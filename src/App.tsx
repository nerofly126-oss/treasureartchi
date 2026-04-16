import './App.css'
import { Analytics } from '@vercel/analytics/react'
import africaBackground from './assets/africa.png'
import { useState } from 'react'

type ImageAsset = {
  src: string
  srcSet: string
  sizes: string
}

const imageModules = import.meta.glob('./assets/*.jpg', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const gallerySizes = '(max-width: 600px) 92vw, (max-width: 900px) 88vw, 960px'
const heroSizes = '100vw'

function getAsset(fileName: string) {
  const asset = imageModules[`./assets/${fileName}`]

  if (!asset) {
    throw new Error(`Missing asset: ${fileName}`)
  }

  return asset
}

function getImageAsset(baseName: string, sizes = gallerySizes): ImageAsset {
  return {
    src: getAsset(`${baseName}.jpg`),
    srcSet: [
      `${getAsset(`${baseName}-640.jpg`)} 640w`,
      `${getAsset(`${baseName}-960.jpg`)} 960w`,
      `${getAsset(`${baseName}.jpg`)} 1600w`,
    ].join(', '),
    sizes,
  }
}

const dividerPattern = getAsset('patterns-borders.jpg')
const heroBanner = getImageAsset('hero-banner', heroSizes)

function App() {
  const featuredWorks = [
    {
      title: 'Drink and Burn',
      category: 'Oil on Canvas',
      year: '2025',
      medium: 'Oil on Canvas',
      dimensions: '3 x 3 ft',
      description:
        'A vivid meeting of fire and water, rendered through swirling movement, contrast, and emotional intensity.',
      image: getImageAsset('drink-and-burn'),
      thumb: getImageAsset('drink-and-burn'),
    },
    {
      title: 'Fiery Soul',
      category: 'Oil on Canvas',
      year: '2024',
      medium: 'Oil on Canvas',
      dimensions: '2 x 3 ft',
      description:
        'A luminous, heat-filled figure study that uses flowing lines and molten color to express inner force and presence.',
      image: getImageAsset('fiery-soul'),
      thumb: getImageAsset('fiery-soul'),
    },
    {
      title: 'Will of fate and time',
      category: 'Oil on Canvas',
      year: '2024',
      medium: 'Oil on Canvas',
      dimensions: '2 x 3 ft',
      description:
        'A symbolic composition shaped by time, growth, and reflection, bringing together memory, destiny, and inner witnessing.',
      image: getImageAsset('will-of-fate-and-time'),
      thumb: getImageAsset('will-of-fate-and-time'),
    },
    {
      title: 'Strive to Surrender',
      category: 'Oil on Canvas',
      year: '2025',
      medium: 'Oil on Canvas',
      dimensions: '2 x 3 ft',
      description:
        'A contemplative studio scene that merges discipline and release, using light, motion, and symbolism to explore creative surrender.',
      image: getImageAsset('strive-to-surrender'),
      thumb: getImageAsset('strive-to-surrender'),
    },
    {
      title: 'This burden called Life',
      category: 'Oil on Canvas',
      year: '2024',
      medium: 'Oil on Canvas',
      dimensions: '2 x 3 ft',
      description:
        'A charged figurative work that confronts labor, identity, and the weight of existence through symbolism and raw physical presence.',
      image: getImageAsset('this-burden-called-life'),
      thumb: getImageAsset('this-burden-called-life'),
    },
    {
      title: 'The essence of femininity',
      category: 'Acrylic on Canvas',
      year: '2024',
      medium: 'Acrylic on Canvas',
      dimensions: '3 x 4 ft',
      description:
        'A vibrant, symbolic meditation on feminine presence, using color, pattern, and softness to evoke beauty, power, and transformation.',
      image: getImageAsset('the-essence-of-femininity'),
      thumb: getImageAsset('the-essence-of-femininity'),
    },
    {
      title: 'A beautiful evening',
      category: 'Oil on Canvas',
      year: '2024',
      medium: 'Oil on Canvas',
      dimensions: '2 x 3 ft',
      description:
        'A luminous everyday scene transformed through expressive color and movement, holding onto warmth, memory, and atmosphere.',
      image: getImageAsset('a-beautiful-evening'),
      thumb: getImageAsset('a-beautiful-evening'),
    },
    {
      title: 'The Quest for Love',
      category: 'Acrylic on Canvas',
      year: '2024',
      medium: 'Acrylic on Canvas',
      dimensions: '2 x 2 ft',
      description:
        'A symbolic composition of desire, wonder, and pursuit, using radiant color and abstract form to trace the search for connection.',
      image: getImageAsset('the-quest-for-love'),
      thumb: getImageAsset('the-quest-for-love'),
    },
    {
      title: 'Midnight Dance',
      category: 'Oil on Canvas',
      year: '2024',
      medium: 'Oil on Canvas',
      dimensions: '2 x 3 ft',
      description:
        'A moonlit celebration of rhythm and movement, capturing collective joy through luminous figures and dramatic night color.',
      image: getImageAsset('midnight-dance'),
      thumb: getImageAsset('midnight-dance'),
    },
    {
      title: 'Magical Dusk',
      category: 'Acrylic on Canvas',
      year: '2024',
      medium: 'Acrylic on Canvas',
      dimensions: '2 x 3 ft',
      description:
        'A glowing landscape built around atmosphere and motion, where color transforms an ordinary road into a dreamlike passage.',
      image: getImageAsset('magical-dusk'),
      thumb: getImageAsset('magical-dusk'),
    },
    {
      title: 'Winter sunset',
      category: 'Acrylic and Oil on Canvas',
      year: '2023',
      medium: 'Acrylic and Oil on Canvas',
      dimensions: '2 x 3 ft',
      description:
        'A quiet winter landscape shaped by glowing light, still water, and layered atmosphere at the edge of sunset.',
      image: getImageAsset('winter-sunset'),
      thumb: getImageAsset('winter-sunset'),
    },
    {
      title: 'Hustle and Bustle',
      category: 'Mixed media (Oil, acrylic, pastel and car paint) on Canvas',
      year: '2025',
      medium: 'Mixed media (Oil, acrylic, pastel and car paint) on Canvas',
      dimensions: '2 x 3 ft',
      description:
        'A bustling market scene alive with movement, trade, and atmosphere, capturing the pulse of everyday communal life.',
      image: getImageAsset('hustle-and-bustle'),
      thumb: getImageAsset('hustle-and-bustle'),
    },
  ]

  const abstractWorks = [
    {
      title: 'A tale of Self Protection',
      category: 'Charcoal on paper',
      year: '2024',
      medium: 'Charcoal on paper',
      dimensions: 'A3',
      description:
        'An abstract figurative drawing exploring defense, concealment, and inner boundaries through layered symbols and charcoal rhythm.',
      image: getImageAsset('a-tale-of-self-protection'),
    },
    {
      title: 'Windy',
      category: 'Charcoal on paper',
      year: '2024',
      medium: 'Charcoal on paper',
      dimensions: 'A3',
      description:
        'A flowing abstract drawing that turns movement and air into spirals, textures, and shifting charcoal forms.',
      image: getImageAsset('windy'),
    },
    {
      title: 'Journeying into the unknown',
      category: 'Charcoal on paper',
      year: '2024',
      medium: 'Charcoal on paper',
      dimensions: 'A3',
      description:
        'An abstract charcoal composition built from tension, curiosity, and movement, tracing a path into uncertain space.',
      image: getImageAsset('journeying-into-the-unknown'),
    },
    {
      title: 'Thoughts in incubation',
      category: 'Charcoal on paper',
      year: '2024',
      medium: 'Charcoal on paper',
      dimensions: 'A3',
      description:
        'A charcoal drawing of gathering thoughts and quiet formation, expressed through spirals, contrast, and suspended movement.',
      image: getImageAsset('thoughts-in-incubation'),
    },
    {
      title: 'Chukwu biko',
      category: 'Charcoal on paper',
      year: '2024',
      medium: 'Charcoal on paper',
      dimensions: '<A3',
      description:
        'An expressive charcoal drawing filled with symbolic forms, prayerful tension, and layered spiritual reflection.',
      image: getImageAsset('chukwu-biko'),
    },
    {
      title: "It's easy to be happy",
      category: 'Charcoal on paper',
      year: '2024',
      medium: 'Charcoal on paper',
      dimensions: 'A3',
      description:
        'A bold abstract charcoal work that explores joy, contrast, and emotional openness through playful form and dense black rhythm.',
      image: getImageAsset('its-easy-to-be-happy'),
    },
    {
      title: 'Let the trees sing to me',
      category: 'Charcoal on paper',
      year: '2024',
      medium: 'Charcoal on paper',
      dimensions: '<A3',
      description:
        'A botanical abstract drawing that turns leaf structures and natural rhythm into a meditative charcoal composition.',
      image: getImageAsset('let-the-trees-sing-to-me'),
    },
    {
      title: 'The Positive and Negative side',
      category: 'Charcoal on paper',
      year: '2024',
      medium: 'Charcoal on paper',
      dimensions: 'A3 (joined)',
      description:
        'A joined charcoal work exploring contrast, balance, and duality through mirrored forms and shifting tonal fields.',
      image: getImageAsset('the-positive-and-negative-side'),
    },
  ]

  const miniatureWorks = [
    {
      title: 'Mmuo Mmiri',
      category: 'Acrylic on black embossed paper',
      year: '2023',
      medium: 'Acrylic on black embossed paper',
      dimensions: '20 x 24 inches',
      description:
        'A luminous spiritual scene of water, presence, and ritual, rendered with glowing color against a dark embossed surface.',
      image: getImageAsset('mmuo-mmiri'),
    },
    {
      title: 'Of the stars',
      category: 'Oil on Canvas',
      year: '2025',
      medium: 'Oil on Canvas',
      dimensions: '20 x 24 inches',
      description:
        'A cosmic portrait exploring identity, wonder, and vastness, with the figure suspended in a richly colored celestial field.',
      image: getImageAsset('of-the-stars'),
    },
    {
      title: 'Frame of mind',
      category: 'Oil on Canvas',
      year: '2025',
      medium: 'Oil on Canvas',
      dimensions: '20 x 24 inches',
      description:
        'A psychological portrait layered with symbols, memory, and shifting emotion, rendered in a vivid nocturnal palette.',
      image: getImageAsset('frame-of-mind'),
    },
    {
      title: 'The Rush of City',
      category: 'Pastel on paper',
      year: '2022',
      medium: 'Pastel on paper',
      dimensions: 'A3',
      description:
        'A vibrant cityscape of movement and crowd energy, using bold pastel color to capture urban pressure and pace.',
      image: getImageAsset('the-rush-of-city'),
    },
    {
      title: 'Solitude',
      category: 'Pastel chalks on paper',
      year: '2025',
      medium: 'Pastel chalks on paper',
      dimensions: '<A3',
      description:
        'An intimate pastel portrait shaped by introspection, color tension, and symbolic detail, holding a quiet emotional charge.',
      image: getImageAsset('solitude'),
    },
    {
      title: 'The dark side',
      category: 'Charcoal and Pastel on black embossed paper',
      year: '2023',
      medium: 'Charcoal and Pastel on black embossed paper',
      dimensions: 'A3',
      description:
        'A dramatic figurative work set against darkness and light, using contrast and posture to explore vulnerability and intensity.',
      image: getImageAsset('the-dark-side'),
    },
  ]

  const sketchPadWorks = [
    {
      title: 'Ifunaya',
      category: 'Charcoal and pastel pencils on paper',
      year: '2025',
      medium: 'Charcoal and pastel pencils on paper',
      dimensions: 'A3',
      description:
        'A sketch pad work combining tenderness and vivid symbolic patterning.',
      image: getImageAsset('ifunaya'),
    },
    {
      title: 'Divine help',
      category: 'Charcoal and pastel pencils on paper',
      year: '2025',
      medium: 'Charcoal and pastel pencils on paper',
      dimensions: 'A3',
      description:
        'A symbolic study built around strain, ascent, and unseen support.',
      image: getImageAsset('divine-help'),
    },
    {
      title: 'Trappings of the Past I',
      category: 'Charcoal and pastel pencils on paper',
      year: '2025',
      medium: 'Charcoal and pastel pencils on paper',
      dimensions: 'A3',
      description:
        'A sketch pad composition reflecting memory, restraint, and emotional residue.',
      image: getImageAsset('trappings-of-the-past-i'),
    },
    {
      title: "The Serpent's handshake",
      category: 'Charcoal and pastel pencils on paper',
      year: '2025',
      medium: 'Charcoal and pastel pencils on paper',
      dimensions: 'A3',
      description:
        'A charged symbolic work exploring temptation, exchange, and danger.',
      image: getImageAsset('the-serpents-handshake'),
    },
    {
      title: 'In my girlie era',
      category: 'Charcoal and pastel pencils on paper',
      year: '2025',
      medium: 'Charcoal and pastel pencils on paper',
      dimensions: 'A3',
      description:
        'A playful self-aware work shaped by femininity and adornment.',
      image: getImageAsset('in-my-girlie-era'),
    },
    {
      title: 'Trappings of the Past II',
      category: 'Charcoal and pastel pencils on paper',
      year: '2025',
      medium: 'Charcoal and pastel pencils on paper',
      dimensions: 'A3',
      description:
        'A continuation of the series, tracing what lingers, clings, and repeats.',
      image: getImageAsset('trappings-of-the-past-ii'),
    },
    {
      title: 'Seperated',
      category: 'Charcoal and pastel pencils on paper',
      year: '2025',
      medium: 'Charcoal and pastel pencils on paper',
      dimensions: 'A3',
      description:
        'A sketch pad work centered on rupture, distance, and emotional division.',
      image: getImageAsset('seperated'),
    },
    {
      title: 'Trappings of the Past III',
      category: 'Charcoal and pastel pencils on paper',
      year: '2025',
      medium: 'Charcoal and pastel pencils on paper',
      dimensions: 'A3',
      description:
        'A further study in inherited weight, repetition, and release.',
      image: getImageAsset('trappings-of-the-past-iii'),
    },
  ]

  const [activeWork, setActiveWork] = useState(0)
  const [activeAbstractWork, setActiveAbstractWork] = useState(0)
  const [activeMiniatureWork, setActiveMiniatureWork] = useState(0)
  const [activeSketchPadWork, setActiveSketchPadWork] = useState(0)
  const safeActiveWork = activeWork % featuredWorks.length
  const currentWork = featuredWorks[safeActiveWork]
  const safeActiveAbstractWork = activeAbstractWork % abstractWorks.length
  const currentAbstractWork = abstractWorks[safeActiveAbstractWork]
  const hasMiniatureWorks = miniatureWorks.length > 0
  const safeActiveMiniatureWork = hasMiniatureWorks
    ? activeMiniatureWork % miniatureWorks.length
    : 0
  const currentMiniatureWork = hasMiniatureWorks
    ? miniatureWorks[safeActiveMiniatureWork]
    : null
  const safeActiveSketchPadWork = activeSketchPadWork % sketchPadWorks.length
  const currentSketchPadWork = sketchPadWorks[safeActiveSketchPadWork]

  const showPreviousWork = () => {
    setActiveWork((current) =>
      current === 0 ? featuredWorks.length - 1 : current - 1,
    )
  }

  const showNextWork = () => {
    setActiveWork((current) =>
      current === featuredWorks.length - 1 ? 0 : current + 1,
    )
  }

  const showPreviousAbstractWork = () => {
    setActiveAbstractWork((current) =>
      current === 0 ? abstractWorks.length - 1 : current - 1,
    )
  }

  const showNextAbstractWork = () => {
    setActiveAbstractWork((current) =>
      current === abstractWorks.length - 1 ? 0 : current + 1,
    )
  }

  const showPreviousMiniatureWork = () => {
    if (!hasMiniatureWorks) return

    setActiveMiniatureWork((current) =>
      current === 0 ? miniatureWorks.length - 1 : current - 1,
    )
  }

  const showNextMiniatureWork = () => {
    if (!hasMiniatureWorks) return

    setActiveMiniatureWork((current) =>
      current === miniatureWorks.length - 1 ? 0 : current + 1,
    )
  }

  const showPreviousSketchPadWork = () => {
    setActiveSketchPadWork((current) =>
      current === 0 ? sketchPadWorks.length - 1 : current - 1,
    )
  }

  const showNextSketchPadWork = () => {
    setActiveSketchPadWork((current) =>
      current === sketchPadWorks.length - 1 ? 0 : current + 1,
    )
  }

  return (
    <main className="page">
      <section className="hero">
        <div className="hero-bg">
          <img
            src={heroBanner.src}
            srcSet={heroBanner.srcSet}
            sizes={heroBanner.sizes}
            alt="Treasure Artchi — Nigerian Artist"
            width={1920}
            height={720}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>

        <div className="hero-topline" aria-hidden="true">
          <span>treasure</span>
          <span>artchi</span>
          <span>exhibits</span>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            <span className="stack">Treasure</span>
            <span className="stack accent">Artchi</span>
          </h1>
          <a className="cta" href="#gallery">
            View portfolio
          </a>
        </div>
      </section>

      <div className="zigzag-divider" aria-hidden="true"></div>

      <section className="about" id="about">
        <div className="about-text">
          <p className="eyebrow">About Treasure Artchi</p>
          <h2>Rooted in Afrocentrism</h2>
          <p>
            I am a Nigerian artist whose practice moves across painting,
            draughtsmanship, art education, poetry, music and theatre. My
            artistry explores spirituality, life&apos;s uncertainties,
            femininity, mysticism and nature&apos;s beauty in Afrocentric
            flavours.
          </p>
        </div>
        <div className="about-notes">
          <article className="about-note about-note-influence">
            <h3>Influence</h3>
            <ul className="about-list">
              <li>The Uli Metaphor, a dying traditional art style from South-eastern Nigeria</li>
              <li>Spirituality and Mysticism</li>
              <li>Femininity and Feminism</li>
              <li>Nature</li>
            </ul>
          </article>
          <article className="about-note about-note-focus">
            <h3>Focus</h3>
            <p>
              To reconcile humans with the Supernatural, while embracing the
              mundane affairs of life.
            </p>
          </article>
          <article className="about-note about-note-location">
            <h3>Location</h3>
            <p>Nigeria. Available for exhibitions, performances and collaborations.</p>
          </article>
        </div>
      </section>

      <section className="featured" id="gallery">
        <div className="featured-shell">
          <div className="featured-header">
            <div>
              <h2>Featured Works</h2>
            </div>
          </div>

          <p className="featured-kicker featured-kicker-near">Paintings</p>

          <div className="featured-stage">
            <button
              type="button"
              className="featured-arrow featured-arrow-left"
              onClick={showPreviousWork}
              aria-label="Show previous project"
            >
              ←
            </button>

            <article key={currentWork.title} className="featured-main-card">
              <div className="featured-card-copy">
                <h3>{currentWork.title}</h3>
              </div>
              <div className="featured-frame">
                <img
                  src={currentWork.image.src}
                  srcSet={currentWork.image.srcSet}
                  sizes={currentWork.image.sizes}
                  alt={currentWork.title}
                  className="featured-main-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="featured-meta">
                <p>{currentWork.medium}</p>
                <span>{currentWork.year}</span>
              </div>
            </article>

            <button
              type="button"
              className="featured-arrow featured-arrow-right"
              onClick={showNextWork}
              aria-label="Show next project"
            >
              →
            </button>
          </div>

        </div>
      </section>

      <div className="art-separator" aria-hidden="true">
        <img src={dividerPattern} alt="" loading="lazy" decoding="async" />
      </div>

      <section className="abstracts" id="abstract-drawings">
        <div className="featured-shell">
          <div className="abstracts-bg" aria-hidden="true">
            <img src={africaBackground} alt="" loading="lazy" decoding="async" />
          </div>
          <p className="featured-kicker featured-kicker-near">
            Abstract Drawings
          </p>

          <div className="featured-stage abstract-stage">
            <button
              type="button"
              className="featured-arrow featured-arrow-left"
              onClick={showPreviousAbstractWork}
              aria-label="Show previous abstract drawing"
            >
              ←
            </button>

            <article
              key={currentAbstractWork.title}
              className="featured-main-card abstract-main-card"
            >
              <div className="featured-card-copy">
                <h3>{currentAbstractWork.title}</h3>
              </div>
              <div className="featured-frame abstract-frame">
                <img
                  src={currentAbstractWork.image.src}
                  srcSet={currentAbstractWork.image.srcSet}
                  sizes={currentAbstractWork.image.sizes}
                  alt={currentAbstractWork.title}
                  className="featured-main-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="featured-meta">
                <p>{currentAbstractWork.medium}</p>
                <span>{currentAbstractWork.year}</span>
              </div>
            </article>

            <button
              type="button"
              className="featured-arrow featured-arrow-right"
              onClick={showNextAbstractWork}
              aria-label="Show next abstract drawing"
            >
              →
            </button>
          </div>
        </div>
      </section>

      <div className="art-separator" aria-hidden="true">
        <img src={dividerPattern} alt="" loading="lazy" decoding="async" />
      </div>

      <section className="miniatures" id="miniature-paintings">
        <div className="featured-shell">
          <p className="featured-kicker featured-kicker-near">
            Miniature Paintings
          </p>

          <div className="featured-stage miniature-stage">
            {currentMiniatureWork ? (
              <>
                <button
                  type="button"
                  className="featured-arrow featured-arrow-left"
                  onClick={showPreviousMiniatureWork}
                  aria-label="Show previous miniature painting"
                >
                  ←
                </button>

                <article
                  key={currentMiniatureWork.title}
                  className="featured-main-card miniature-main-card"
                >
                  <div className="featured-card-copy">
                    <h3>{currentMiniatureWork.title}</h3>
                  </div>
                  <div className="featured-frame miniature-frame">
                    <img
                      src={currentMiniatureWork.image.src}
                      srcSet={currentMiniatureWork.image.srcSet}
                      sizes={currentMiniatureWork.image.sizes}
                      alt={currentMiniatureWork.title}
                      className="featured-main-image"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="featured-meta">
                    <p>{currentMiniatureWork.medium}</p>
                    <span>{currentMiniatureWork.year}</span>
                  </div>
                </article>

                <button
                  type="button"
                  className="featured-arrow featured-arrow-right"
                  onClick={showNextMiniatureWork}
                  aria-label="Show next miniature painting"
                >
                  →
                </button>
              </>
            ) : (
              <article className="featured-main-card miniature-main-card miniature-empty">
                <div className="featured-card-copy">
                  <h3>Miniature Paintings</h3>
                </div>
                <div className="featured-frame miniature-frame miniature-placeholder">
                  <div className="miniature-placeholder-inner">
                    Add miniature paintings here next
                  </div>
                </div>
              </article>
            )}
          </div>
        </div>
      </section>

      <div className="art-separator" aria-hidden="true">
        <img src={dividerPattern} alt="" loading="lazy" decoding="async" />
      </div>

      <section className="sketchpads" id="sketch-pads">
        <div className="featured-shell">
          <p className="featured-kicker featured-kicker-near">Sketch Pads</p>

          <div className="featured-stage sketchpad-stage">
            <button
              type="button"
              className="featured-arrow featured-arrow-left"
              onClick={showPreviousSketchPadWork}
              aria-label="Show previous sketch pad work"
            >
              ←
            </button>

            <article
              key={currentSketchPadWork.title}
              className="featured-main-card sketchpad-main-card"
            >
              <div className="featured-card-copy">
                <h3>{currentSketchPadWork.title}</h3>
              </div>
              <div className="featured-frame sketchpad-frame">
                <img
                  src={currentSketchPadWork.image.src}
                  srcSet={currentSketchPadWork.image.srcSet}
                  sizes={currentSketchPadWork.image.sizes}
                  alt={currentSketchPadWork.title}
                  className="featured-main-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="featured-meta">
                <p>{currentSketchPadWork.medium}</p>
                <span>{currentSketchPadWork.year}</span>
              </div>
            </article>

            <button
              type="button"
              className="featured-arrow featured-arrow-right"
              onClick={showNextSketchPadWork}
              aria-label="Show next sketch pad work"
            >
              →
            </button>
          </div>
        </div>
      </section>
      <Analytics />
    </main>
  )
}

export default App
