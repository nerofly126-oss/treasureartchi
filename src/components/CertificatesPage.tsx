import ScrollReveal from './ScrollReveal'
import type { CertificateItem } from '../data/certificates'

type CertificatesPageProps = {
  certificates: CertificateItem[]
  homeHref: string
}

export default function CertificatesPage({
  certificates,
  homeHref,
}: CertificatesPageProps) {
  const [leadCertificate, ...otherCertificates] = certificates

  return (
    <main className='certificates-page'>
      <section className='certificates-hero'>
        <div className='certificates-hero__grain' aria-hidden='true' />
        <div className='certificates-hero__rings' aria-hidden='true' />

        <ScrollReveal className='certificates-hero__topbar' as='div' variant='fade-right'>
          <a href={homeHref} className='certificates-back-link'>
            ← Back Home
          </a>
          <p className='certificates-kicker'>Certificates</p>
        </ScrollReveal>

        <div className='certificates-hero__grid'>
          <ScrollReveal className='certificates-hero__copy' as='div' variant='fade-right'>
            <p className='certificates-eyebrow'>Collected milestones</p>
            <h1 className='certificates-title'>Paper trails of practice, discipline and recognition.</h1>
          </ScrollReveal>

          {leadCertificate ? (
            <ScrollReveal className='certificates-lead' as='article' delay={120} variant='soft-zoom'>
              <div className='certificates-lead__frame'>
                <img
                  src={leadCertificate.image.src}
                  srcSet={leadCertificate.image.srcSet}
                  sizes={leadCertificate.image.sizes}
                  alt={leadCertificate.image.alt}
                  className='certificates-lead__image'
                  loading='lazy'
                  decoding='async'
                />
              </div>

              <div className='certificates-lead__meta'>
                <p className='certificates-chip'>First in sequence</p>
                <h2>{leadCertificate.title}</h2>
                <p>{leadCertificate.note}</p>
                <div className='certificates-lead__details'>
                  <span>{leadCertificate.issuer}</span>
                  <span>{leadCertificate.year}</span>
                </div>
              </div>
            </ScrollReveal>
          ) : null}
        </div>
      </section>

      <section className='certificates-gallery' aria-labelledby='certificates-gallery-heading'>
        <ScrollReveal className='certificates-gallery__header' as='div' variant='fade-left'>
          <p className='certificates-eyebrow'>Archive wall</p>
          <h2 id='certificates-gallery-heading'>Certificates and plaques</h2>
        </ScrollReveal>

        <div className='certificates-masonry'>
          {otherCertificates.map((certificate, index) => (
            <ScrollReveal
              key={`${certificate.title}-${certificate.year}`}
              className={`certificate-card certificate-card-${(index % 3) + 1}`}
              as='article'
              delay={80 + index * 60}
              variant={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <div className='certificate-card__image-wrap'>
                <img
                  src={certificate.image.src}
                  srcSet={certificate.image.srcSet}
                  sizes={certificate.image.sizes}
                  alt={certificate.image.alt}
                  className='certificate-card__image'
                  loading='lazy'
                  decoding='async'
                />
              </div>

              <div className='certificate-card__copy'>
                <p className='certificate-card__year'>{certificate.year}</p>
                <h3>{certificate.title}</h3>
                <p>{certificate.note}</p>
                <span>{certificate.issuer}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  )
}
