import type { ImageAsset } from '../types/artwork'

type HeroProps = {
  heroBanner: ImageAsset
  heroPortrait: string
  emailAddresses: readonly string[]
  emailLinks: string[]
}

export default function Hero({ heroBanner, heroPortrait, emailAddresses, emailLinks }: HeroProps) {
  return (
    <section className='hero' id='home'>
      <div className='hero-panel'>
        <div className='hero-copy-panel'>
          <div className='hero-copy-top'>
            <p className='hero-signature'>Tre.</p>
            <a className='hero-contact' href='#gallery'>
              View Works
            </a>
          </div>

          <div className='hero-copy-body'>
            <p className='hero-kicker'>Artist. Poet. Actress</p>
            <h1 className='hero-word'>
              <span>Treasure</span>
              <span>Artchi</span>
            </h1>
          </div>

          <div className='hero-copy-bottom'>
            <div className='hero-email-list'>
              {emailAddresses.map((email, index) => (
                <a key={email} className='hero-email' href={emailLinks[index]}>
                  {email}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className='hero-image-panel'>
          <img
            src={heroPortrait}
            alt='Portrait of Treasure Artchi'
            className='hero-portrait'
            loading='eager'
            fetchPriority='high'
            decoding='async'
          />
        </div>
      </div>

      <div className='hero-bg' aria-hidden='true'>
        <img
          src={heroBanner.src}
          srcSet={heroBanner.srcSet}
          sizes={heroBanner.sizes}
          alt=''
          width={1920}
          height={720}
          loading='eager'
          fetchPriority='high'
          decoding='async'
        />
      </div>
    </section>
  )
}
