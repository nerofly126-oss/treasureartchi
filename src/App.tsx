import heroBanner from './assets/hero-banner.jpg'
import './App.css'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-bg">
          <img
            src={heroBanner}
            alt="Treasure Ndukwe — Nigerian Artist"
            width={1920}
            height={720}
          />
        </div>

        <div className="hero-topline" aria-hidden="true">
          <span>treasure</span>
          <span>ndukwe</span>
          <span>exhibits</span>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            <span className="stack">Treasure</span>
            <span className="stack accent">Ndukwe</span>
          </h1>
          <p className="hero-copy">
            A Nigerian artist showcasing talent across contemporary exhibits,
            with work rooted in culture, movement, and visual storytelling.
          </p>
          <a className="cta" href="#gallery">
            View portfolio
          </a>
        </div>
      </section>

      <div className="zigzag-divider" aria-hidden="true"></div>

      <section className="about" id="about">
        <div className="about-text">
          <p className="eyebrow">About Treasure</p>
          <h2>Rooted in Nigerian culture, shaped by contemporary exhibits.</h2>
          <p>
            Treasure Ndukwe is an artist based in Nigeria whose practice moves
            across painting, mixed media, and exhibition-led storytelling. Her
            work explores identity, memory, and movement—translating lived
            experience into immersive visual narratives.
          </p>
        </div>
        <div className="about-notes">
          <div>
            <h3>Practice</h3>
            <p>Painting, mixed media, installation, and live exhibits.</p>
          </div>
          <div>
            <h3>Focus</h3>
            <p>Culture, identity, movement, and contemporary narratives.</p>
          </div>
          <div>
            <h3>Location</h3>
            <p>Nigeria · Available for exhibitions and collaborations.</p>
          </div>
        </div>
      </section>
      <Analytics />
    </main>
  )
}

export default App
