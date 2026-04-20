import { useRef, type TouchEvent } from 'react'
import ScrollReveal from './ScrollReveal'
import type { ArtworkItem, FeaturedArtworkItem } from '../types/artwork'

type ArtworkCarouselSectionProps = {
  sectionClassName: string
  id: string
  title: string
  item: ArtworkItem | null
  isAnimating?: boolean
  direction?: 'forward' | 'backward'
  previousLabel: string
  nextLabel: string
  onPrevious: () => void
  onNext: () => void
  thumbnails?: FeaturedArtworkItem[]
  activeIndex?: number
  onSelectItem?: (index: number) => void
  reverseLayout?: boolean
  stageClassName?: string
  cardClassName?: string
  frameClassName?: string
  backgroundImage?: string
  emptyTitle?: string
  emptyMessage?: string
}

export default function ArtworkCarouselSection({
  sectionClassName,
  id,
  title,
  item,
  isAnimating = false,
  direction = 'forward',
  previousLabel,
  nextLabel,
  onPrevious,
  onNext,
  reverseLayout = false,
  stageClassName,
  cardClassName,
  frameClassName,
  backgroundImage,
  emptyTitle = title,
  emptyMessage = 'Add miniature paintings here next',
}: ArtworkCarouselSectionProps) {
  const showcaseClassName = ['featured-showcase', reverseLayout ? 'featured-showcase-reverse' : ''].filter(Boolean).join(' ')
  const stageClasses = ['featured-stage', stageClassName].filter(Boolean).join(' ')
  const cardClasses = [
    'featured-main-card',
    'featured-editorial-card',
    cardClassName,
    isAnimating ? 'is-page-turning' : '',
    direction === 'backward' ? 'is-page-turning-backward' : 'is-page-turning-forward',
  ]
    .filter(Boolean)
    .join(' ')
  const frameClasses = ['featured-frame', 'featured-editorial-frame', frameClassName].filter(Boolean).join(' ')
  const touchStartXRef = useRef<number | null>(null)
  const touchStartYRef = useRef<number | null>(null)

  const resetTouchTracking = () => {
    touchStartXRef.current = null
    touchStartYRef.current = null
  }

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0]

    touchStartXRef.current = touch.clientX
    touchStartYRef.current = touch.clientY
  }

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const startX = touchStartXRef.current
    const startY = touchStartYRef.current

    if (startX === null || startY === null) {
      return
    }

    const touch = event.changedTouches[0]
    const deltaX = touch.clientX - startX
    const deltaY = touch.clientY - startY

    resetTouchTracking()

    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return
    }

    if (deltaX < 0) {
      onNext()
      return
    }

    onPrevious()
  }

  return (
    <section className={`${sectionClassName} featured-section`} id={id}>
      <div className='featured-shell'>
        {backgroundImage ? (
          <div className='abstracts-bg' aria-hidden='true'>
            <img src={backgroundImage} alt='' loading='lazy' decoding='async' />
          </div>
        ) : null}

        <ScrollReveal className='featured-header featured-section-header' as='div' variant='fade-right'>
          <div className='featured-section-heading'>
            <h4>{title}</h4>
          </div>
        </ScrollReveal>

        <ScrollReveal
          className={showcaseClassName}
          as='div'
          delay={120}
          variant={reverseLayout ? 'fade-left' : 'soft-zoom'}
        >
          <div className={stageClasses}>
            {item ? (
              <>
                <button
                  type='button'
                  className='featured-arrow featured-arrow-left'
                  onClick={onPrevious}
                  aria-label={previousLabel}
                >
                  ←
                </button>

                <button
                  type='button'
                  className='featured-arrow featured-arrow-right'
                  onClick={onNext}
                  aria-label={nextLabel}
                >
                  →
                </button>

                <article key={item.title} className={cardClasses}>
                  <div className='featured-card-topbar'>
                  <div className='featured-card-copy'>
                    <h3>{item.title}</h3>
                    <p className='featured-card-description'>{item.description}</p>
                  </div>
                </div>

                <div className='featured-card-gallery'>
                  <div
                    className='featured-card-spotlight'
                    role='group'
                    aria-label={`${title}. Swipe left or right on the artwork to browse.`}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onTouchCancel={resetTouchTracking}
                  >
                    <div className={frameClasses}>
                      <img
                        src={item.image.src}
                        srcSet={item.image.srcSet}
                        sizes={item.image.sizes}
                        alt={item.title}
                        className='featured-main-image'
                        loading='lazy'
                        decoding='async'
                      />
                    </div>

                    <div className='featured-meta'>
                      <p>{item.medium}</p>
                      <span>{item.year}</span>
                      <span>{item.dimensions}</span>
                    </div>
                  </div>
                </div>
              </article>
              </>
            ) : (
              <article className={['featured-main-card', cardClassName, 'miniature-empty'].filter(Boolean).join(' ')}>
                <div className='featured-card-copy'>
                  <h3>{emptyTitle}</h3>
                </div>
                <div
                  className={['featured-frame', frameClassName, 'miniature-frame', 'miniature-placeholder'].filter(Boolean).join(' ')}
                >
                  <div className='miniature-placeholder-inner'>{emptyMessage}</div>
                </div>
              </article>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
