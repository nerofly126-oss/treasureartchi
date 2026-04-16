import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const rootDir = process.cwd()
const appFile = path.join(rootDir, 'src', 'App.tsx')
const assetDir = path.join(rootDir, 'src', 'assets')

const maxWidths = new Map([
  ['hero-banner.jpg', 1600],
  ['patterns-borders.jpeg', 800],
  ['africa.png', 225],
])

const responsiveWidths = new Map([
  ['hero-banner.jpg', [768, 1280]],
  ['patterns-borders.jpeg', []],
  ['africa.png', []],
])

const qualityOverrides = new Map([
  ['hero-banner.jpg', 72],
  ['patterns-borders.jpeg', 70],
])

const keepOriginalNames = new Set(['africa.png'])

const appSource = await fs.readFile(appFile, 'utf8')
const importPattern = /from\s+['"]\.\/assets\/([^'"]+)['"]/g
const helperPattern = /getImageAsset\('([^']+)'/g
const importedAssets = [...appSource.matchAll(importPattern)].map((match) => match[1])
const helperAssets = [...appSource.matchAll(helperPattern)].map(
  (match) => `${match[1]}.jpg`,
)
const referencedAssets = [...new Set([...importedAssets, ...helperAssets])]

const touchedFiles = []
let nextAppSource = appSource

for (const assetName of referencedAssets) {
  if (keepOriginalNames.has(assetName)) continue

  const sourcePath = await resolveSourcePath(assetName)
  const stats = await fs.stat(sourcePath)
  const image = sharp(sourcePath, { failOn: 'none' }).rotate()
  const metadata = await image.metadata()

  const widthCap = maxWidths.get(assetName) ?? 1600
  const quality = qualityOverrides.get(assetName) ?? 74
  const outputIsPng = Boolean(metadata.hasAlpha)
  const parsed = path.parse(assetName)
  const outputName = outputIsPng ? `${parsed.name}.png` : `${parsed.name}.jpg`
  const outputPath = path.join(assetDir, outputName)
  const tempOutputPath =
    outputPath === sourcePath ? `${outputPath}.tmp` : outputPath

  let pipeline = image.resize({
    width: Math.min(metadata.width ?? widthCap, widthCap),
    withoutEnlargement: true,
    fit: 'inside',
  })

  if (outputIsPng) {
    pipeline = pipeline.png({ compressionLevel: 9, palette: true, quality: 80 })
  } else {
    pipeline = pipeline.jpeg({
      quality,
      mozjpeg: true,
      progressive: true,
      chromaSubsampling: '4:2:0',
    })
  }

  await pipeline.toFile(tempOutputPath)

  if (tempOutputPath !== outputPath) {
    await fs.rename(tempOutputPath, outputPath)
  }

  const variantWidths = responsiveWidths.get(assetName) ?? [640, 960]

  for (const variantWidth of variantWidths) {
    const variantName = outputIsPng
      ? `${parsed.name}-${variantWidth}.png`
      : `${parsed.name}-${variantWidth}.jpg`
    const variantPath = path.join(assetDir, variantName)

    let variantPipeline = sharp(sourcePath, { failOn: 'none' })
      .rotate()
      .resize({
        width: Math.min(metadata.width ?? variantWidth, variantWidth),
        withoutEnlargement: true,
        fit: 'inside',
      })

    if (outputIsPng) {
      variantPipeline = variantPipeline.png({
        compressionLevel: 9,
        palette: true,
        quality: 80,
      })
    } else {
      variantPipeline = variantPipeline.jpeg({
        quality,
        mozjpeg: true,
        progressive: true,
        chromaSubsampling: '4:2:0',
      })
    }

    await variantPipeline.toFile(variantPath)
  }

  if (sourcePath !== outputPath) {
    await fs.rm(sourcePath)
  }

  if (outputName !== assetName) {
    nextAppSource = nextAppSource.replaceAll(`./assets/${assetName}`, `./assets/${outputName}`)
  }

  const outputStats = await fs.stat(outputPath)
  touchedFiles.push({
    assetName,
    outputName,
    beforeKb: Math.round(stats.size / 1024),
    afterKb: Math.round(outputStats.size / 1024),
  })
}

if (nextAppSource !== appSource) {
  await fs.writeFile(appFile, nextAppSource)
}

const totalBeforeKb = touchedFiles.reduce((sum, file) => sum + file.beforeKb, 0)
const totalAfterKb = touchedFiles.reduce((sum, file) => sum + file.afterKb, 0)

console.table(touchedFiles)
console.log(
  `Optimized ${touchedFiles.length} images: ${totalBeforeKb}KB -> ${totalAfterKb}KB`,
)

async function resolveSourcePath(assetName) {
  const directPath = path.join(assetDir, assetName)

  try {
    await fs.access(directPath)
    return directPath
  } catch {}

  const parsed = path.parse(assetName)
  const fallbackExtensions = ['.png', '.jpg', '.jpeg']

  for (const extension of fallbackExtensions) {
    const fallbackPath = path.join(assetDir, `${parsed.name}${extension}`)

    try {
      await fs.access(fallbackPath)
      return fallbackPath
    } catch {}
  }

  throw new Error(`Missing asset source for ${assetName}`)
}
