import ScrollReveal from './ScrollReveal'
import type { ArtworkItem, FeaturedArtworkItem } from '../types/artwork'

type FooterProps = {
  currentSketchPadWork: ArtworkItem
  currentAbstractWork: ArtworkItem
  featuredThumbWork: FeaturedArtworkItem
  footerBackgroundWork: FeaturedArtworkItem
  whatsappLink: string
  emailLink: string
  certificatesHref: string
}

export default function Footer({
  currentSketchPadWork,
  currentAbstractWork,
  featuredThumbWork,
  footerBackgroundWork,
  whatsappLink,
  emailLink,
  certificatesHref,
}: FooterProps) {
  return (
    <footer className='footer'>
      <div className='footer-bg' aria-hidden='true'>
        <img
          src={footerBackgroundWork.image.src}
          srcSet={footerBackgroundWork.image.srcSet}
          sizes='100vw'
          alt=''
          loading='lazy'
          decoding='async'
        />
      </div>

      <div className='footer-overlay' aria-hidden='true'></div>

      <div className='footer-inner'>
        <ScrollReveal className='footer-topbar' as='div' variant='fade-right'>
          <h2 className='footer-title'>Let&rsquo;s Talk</h2>
          <a className='footer-contact-link' href={whatsappLink} target='_blank' rel='noopener noreferrer'>
            → Contact
          </a>
        </ScrollReveal>

        <ScrollReveal className='footer-collage' as='div' aria-hidden='true' delay={80} variant='soft-zoom'>
          <figure className='footer-polaroid footer-polaroid-left'>
            <img
              src={featuredThumbWork.thumb.src}
              srcSet={featuredThumbWork.thumb.srcSet}
              sizes='160px'
              alt=''
              loading='lazy'
              decoding='async'
            />
          </figure>
          <figure className='footer-polaroid footer-polaroid-center'>
            <img
              src={currentSketchPadWork.image.src}
              srcSet={currentSketchPadWork.image.srcSet}
              sizes='220px'
              alt=''
              loading='lazy'
              decoding='async'
            />
          </figure>
          <figure className='footer-polaroid footer-polaroid-right'>
            <img
              src={currentAbstractWork.image.src}
              srcSet={currentAbstractWork.image.srcSet}
              sizes='180px'
              alt=''
              loading='lazy'
              decoding='async'
            />
          </figure>
        </ScrollReveal>

        <ScrollReveal className='footer-message' as='div' delay={140} variant='fade-up'>
          <p className='footer-lead'>I keep things simple, creative and meaningful.</p>
          <p className='footer-subcopy'>
            Send me a message on{' '}
            <a href={whatsappLink} target='_blank' rel='noopener noreferrer'>
              WhatsApp
            </a>
          </p>
        </ScrollReveal>

        <ScrollReveal className='footer-meta-grid' as='div' delay={200} variant='fade-left'>
          <div className='footer-signature'>
            <p className='footer-name'>Treasure Artchi.</p>
            <p className='footer-description'>
              Painter, draughtswoman and storyteller creating work rooted in Afrocentrism, spirituality and lived
              experience.
            </p>
          </div>

          <nav className='footer-nav-wrap' aria-label='Footer navigation'>
            <p className='footer-label'>( Explore )</p>
            <ul className='footer-nav'>
              <li>
                <a href='#gallery'>Featured Works</a>
              </li>
              <li>
                <a href='#about'>About</a>
              </li>
              <li>
                <a href='#performances'>Performances</a>
              </li>
              <li>
                <a href='#abstract-drawings'>Abstract Drawings</a>
              </li>
              <li>
                <a href='#miniature-paintings'>Miniatures</a>
              </li>
              <li>
                <a href='#sketch-pads'>Sketch Pads</a>
              </li>
              <li>
                <a href={certificatesHref}>Certificates</a>
              </li>
            </ul>
          </nav>

          <div className='footer-social-wrap'>
            <a
              href='https://www.instagram.com/_treasure_artchi'
              className='footer-tag footer-tag-instagram'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
            >
              <svg viewBox='0 0 24 24' aria-hidden='true'>
                <path d='M7.8 3h8.4A4.8 4.8 0 0 1 21 7.8v8.4a4.8 4.8 0 0 1-4.8 4.8H7.8A4.8 4.8 0 0 1 3 16.2V7.8A4.8 4.8 0 0 1 7.8 3Zm-.1 1.8A3 3 0 0 0 4.8 7.7v8.6a3 3 0 0 0 2.9 2.9h8.6a3 3 0 0 0 2.9-2.9V7.7a3 3 0 0 0-2.9-2.9H7.7Zm9.4 1.4a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 1.8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z' />
              </svg>
            </a>
            <a
              href='https://facebook.com'
              className='footer-tag footer-tag-facebook'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Facebook'
            >
              <svg viewBox='0 0 24 24' aria-hidden='true'>
                <path d='M13.5 21v-7h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6H16.8V4.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.2V11H8v3h2.4v7h3.1Z' />
              </svg>
            </a>
            <a href={emailLink} className='footer-tag footer-tag-email' aria-label='Email'>
              <svg viewBox='0 0 24 24' aria-hidden='true'>
                <path d='M3.5 6.5h17a1 1 0 0 1 1 1v9a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-9a1 1 0 0 1 1-1Z' />
                <path d='m4 8 8 6 8-6' />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>

      <div className='footer-bottom'>
        <p>For commissions and collaborations worldwide.</p>
        <p>&copy; 2026 Treasure Artchi Studio. All rights reserved.</p>
      </div>
    </footer>
  )
}
