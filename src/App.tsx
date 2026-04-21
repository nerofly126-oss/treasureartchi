import './App.css'
import { Analytics } from '@vercel/analytics/react'
import { useEffect, useState } from 'react'
import About from './components/About'
import ArtworkCarouselSection from './components/ArtworkCarouselSection'
import CertificatesPage from './components/CertificatesPage'
import Footer from './components/Footer'
import Hero from './components/Hero'
import ScrollReveal from './components/ScrollReveal'
import { certificates } from './data/certificates'
import { emailAddresses, emailLink, emailLinks, whatsappLink } from './data/contact'
import {
  abstractWorks,
  featuredWorks,
  miniatureWorks,
  performancesWorks,
  sketchPadWorks,
} from './data/works'
import {
  africaBackground,
  dividerPattern,
  heroBanner,
  heroPortrait,
} from './lib/assets'
import { useCarousel } from './hooks/useCarousel'

const getCurrentView = () =>
  window.location.hash === '#/certificates' ? 'certificates' : 'home'

function App() {
  const [view, setView] = useState<'home' | 'certificates'>(getCurrentView)
  const featuredCarousel = useCarousel(featuredWorks.length)
  const abstractCarousel = useCarousel(abstractWorks.length)
  const miniatureCarousel = useCarousel(miniatureWorks.length)
  const performancesCarousel = useCarousel(performancesWorks.length)
  const sketchPadCarousel = useCarousel(sketchPadWorks.length)

  const currentWork = featuredWorks[featuredCarousel.activeItemIndex]
  const currentAbstractWork = abstractWorks[abstractCarousel.activeItemIndex]
  const currentMiniatureWork =
    miniatureWorks[miniatureCarousel.activeItemIndex] ?? null
  const currentPerformanceWork =
    performancesWorks[performancesCarousel.activeItemIndex] ?? null
  const currentSketchPadWork = sketchPadWorks[sketchPadCarousel.activeItemIndex]

  useEffect(() => {
    const handleHashChange = () => {
      setView(getCurrentView())
      window.scrollTo({ top: 0, behavior: 'auto' })
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  if (view === 'certificates') {
    return (
      <>
        <CertificatesPage certificates={certificates} homeHref='#' />
        <Analytics />
      </>
    )
  }

  return (
    <main className="page">
      <Hero
        heroBanner={heroBanner}
        heroPortrait={heroPortrait}
        emailAddresses={emailAddresses}
        emailLinks={emailLinks}
      />

      <div className="zigzag-divider" aria-hidden="true"></div>

      <About emailAddresses={emailAddresses} emailLinks={emailLinks} />

      <section className="featured-works-intro" aria-labelledby="featured-works-heading">
        <ScrollReveal className="featured-works-intro__inner" as="div" variant="fade-right">
          <h2 id="featured-works-heading" className="featured-works-intro__title">
            Featured Works
          </h2>
        </ScrollReveal>
      </section>

      <ArtworkCarouselSection
        sectionClassName="featured featured-section"
        id="gallery"
        title="Painting Series"
        item={currentWork}
        items={featuredWorks}
        activeIndex={featuredCarousel.activeItemIndex}
        isAnimating={featuredCarousel.isAnimating}
        direction={featuredCarousel.direction}
        previousLabel="Show previous painting"
        nextLabel="Show next painting"
        onPrevious={featuredCarousel.showPrevious}
        onNext={featuredCarousel.showNext}
        stageClassName="featured-stage-wide"
      />

      <div className="art-separator" aria-hidden="true">
        <img src={dividerPattern} alt="" loading="lazy" decoding="async" />
      </div>

      <ArtworkCarouselSection
        sectionClassName="miniatures featured-section"
        id="miniature-paintings"
        title="Miniature Painting Series"
        item={currentMiniatureWork}
        items={miniatureWorks}
        activeIndex={miniatureCarousel.activeItemIndex}
        isAnimating={miniatureCarousel.isAnimating}
        direction={miniatureCarousel.direction}
        previousLabel="Show previous miniature painting"
        nextLabel="Show next miniature painting"
        onPrevious={miniatureCarousel.showPrevious}
        onNext={miniatureCarousel.showNext}
        stageClassName="miniature-stage"
        cardClassName="miniature-main-card"
        frameClassName="miniature-frame"
        emptyTitle="Miniature Paintings"
        emptyMessage="Add miniature paintings here next"
      />

      <div className="art-separator" aria-hidden="true">
        <img src={dividerPattern} alt="" loading="lazy" decoding="async" />
      </div>

      <ArtworkCarouselSection
        sectionClassName="abstracts featured-section"
        id="abstract-drawings"
        title="Abstract Art Series"
        item={currentAbstractWork}
        items={abstractWorks}
        activeIndex={abstractCarousel.activeItemIndex}
        isAnimating={abstractCarousel.isAnimating}
        direction={abstractCarousel.direction}
        previousLabel="Show previous abstract drawing"
        nextLabel="Show next abstract drawing"
        onPrevious={abstractCarousel.showPrevious}
        onNext={abstractCarousel.showNext}
        reverseLayout
        stageClassName="abstract-stage"
        cardClassName="abstract-main-card"
        frameClassName="abstract-frame"
        backgroundImage={africaBackground}
      />

      <div className="art-separator" aria-hidden="true">
        <img src={dividerPattern} alt="" loading="lazy" decoding="async" />
      </div>

      <ArtworkCarouselSection
        sectionClassName="sketchpads featured-section"
        id="sketch-pads"
        title="Sketch Pad Series"
        item={currentSketchPadWork}
        items={sketchPadWorks}
        activeIndex={sketchPadCarousel.activeItemIndex}
        isAnimating={sketchPadCarousel.isAnimating}
        direction={sketchPadCarousel.direction}
        previousLabel="Show previous sketch pad work"
        nextLabel="Show next sketch pad work"
        onPrevious={sketchPadCarousel.showPrevious}
        onNext={sketchPadCarousel.showNext}
        reverseLayout
        stageClassName="sketchpad-stage"
        cardClassName="sketchpad-main-card"
        frameClassName="sketchpad-frame"
      />

      <div className="art-separator" aria-hidden="true">
        <img src={dividerPattern} alt="" loading="lazy" decoding="async" />
      </div>

      <ArtworkCarouselSection
        sectionClassName="performances featured-section"
        id="performances"
        title="Performances"
        item={currentPerformanceWork}
        items={performancesWorks}
        activeIndex={performancesCarousel.activeItemIndex}
        isAnimating={performancesCarousel.isAnimating}
        direction={performancesCarousel.direction}
        previousLabel="Show previous performance"
        nextLabel="Show next performance"
        onPrevious={performancesCarousel.showPrevious}
        onNext={performancesCarousel.showNext}
        stageClassName="performances-stage"
      />

      <Footer
        currentSketchPadWork={currentSketchPadWork}
        currentAbstractWork={currentAbstractWork}
        featuredThumbWork={featuredWorks[0]}
        footerBackgroundWork={featuredWorks[6]}
        whatsappLink={whatsappLink}
        emailLink={emailLink}
        certificatesHref='#/certificates'
      />

      <Analytics />
    </main>
  )
}

export default App
