import type { ImageAsset } from '../types/artwork'

const imageModules = import.meta.glob('../assets/*.{jpg,jpeg,png,svg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

export const gallerySizes = '(max-width: 600px) 92vw, (max-width: 900px) 88vw, 960px'
export const heroSizes = '100vw'

export function getAsset(fileName: string) {
  const asset = imageModules[`../assets/${fileName}`]

  if (!asset) {
    throw new Error(`Missing asset: ${fileName}`)
  }

  return asset
}

export function getImageAsset(baseName: string, sizes = gallerySizes, alt = ''): ImageAsset {
  return {
    src: getAsset(`${baseName}.jpg`),
    srcSet: [
      `${getAsset(`${baseName}-640.jpg`)} 640w`,
      `${getAsset(`${baseName}-960.jpg`)} 960w`,
      `${getAsset(`${baseName}.jpg`)} 1600w`,
    ].join(', '),
    sizes,
    alt,
  }
}

export const heroBanner: ImageAsset = {
  src: getAsset('hero-banner.jpg'),
  srcSet: [
    `${getAsset('hero-banner-768.jpg')} 768w`,
    `${getAsset('hero-banner-1280.jpg')} 1280w`,
    `${getAsset('hero-banner.jpg')} 1600w`,
  ].join(', '),
  sizes: heroSizes,
  alt: '',
}

export const heroPortrait = getAsset('hero-portrait.jpg')
export const dividerPattern = getAsset('images7.jpeg')
export const africaBackground = getAsset('africa.png')
