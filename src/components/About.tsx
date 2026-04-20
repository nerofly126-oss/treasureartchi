import ScrollReveal from './ScrollReveal'

type AboutProps = {
  emailAddresses: readonly string[]
  emailLinks: string[]
}

export default function About({ emailAddresses, emailLinks }: AboutProps) {
  return (
    <section className='about' id='about'>
      <ScrollReveal className='about-intro' as='div' variant='fade-right'>
        <p className='about-label'>About</p>
        <h2 className='about-title'>Rooted in Afrocentrism, spirituality and feminine presence.</h2>
        <p className='about-lead'>
          I am a Nigerian artist whose practice moves across painting, draughtsmanship, art education, poetry, music and
          theatre. My artistry explores spirituality, life's uncertainties, femininity, mysticism and nature's
          beauty in Afrocentric flavours.
        </p>
      </ScrollReveal>

      <div className='about-grid'>
        <ScrollReveal className='about-card about-card-statement' as='article' variant='fade-up'>
          <p className='about-card-label'>Practice</p>
          <p className='about-card-copy'>
            I create work that reconciles the human and the supernatural while remaining attentive to the ordinary,
            intimate and lived details of everyday life.
          </p>
        </ScrollReveal>

        <ScrollReveal className='about-card about-card-influence' as='article' delay={120} variant='soft-zoom'>
          <p className='about-card-label'>Influence</p>
          <ul className='about-list'>
            <li>The Uli metaphor from South-eastern Nigeria</li>
            <li>Spirituality and mysticism</li>
            <li>Femininity and feminism</li>
            <li>Nature and emotional memory</li>
          </ul>
        </ScrollReveal>

        <ScrollReveal className='about-card about-card-location' as='article' delay={220} variant='fade-left'>
          <p className='about-card-label'>Based in</p>
          <p className='about-card-copy'>Nigeria — available for exhibitions, performances and collaborations.</p>
          <div className='about-email-list'>
            {emailAddresses.map((email, index) => (
              <a key={email} className='about-link' href={emailLinks[index]}>
                {email}
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
