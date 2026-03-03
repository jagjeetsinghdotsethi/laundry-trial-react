import './App.css'

function App() {
  return (
    <div className="page">
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      <header className="header">
        <div className="brand">Laundry Trial</div>
        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">Doorstep Laundry Service</p>
          <h1>Wash, Dry, Fold. Delivered Fresh.</h1>
          <p className="hero-copy">
            Schedule pickup in under 30 seconds. We clean your clothes with
            care and return them in 24 hours.
          </p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary">
              Book Pickup
            </button>
            <button type="button" className="btn btn-secondary">
              View Pricing
            </button>
          </div>
        </section>

        <section id="services" className="section">
          <h2>Popular Services</h2>
          <div className="cards">
            <article className="card">
              <h3>Everyday Wash</h3>
              <p>Daily wear wash and fold with next-day delivery.</p>
            </article>
            <article className="card">
              <h3>Steam Iron</h3>
              <p>Crisp ironing for office shirts, trousers, and uniforms.</p>
            </article>
            <article className="card">
              <h3>Dry Clean</h3>
              <p>Premium care for suits, dresses, and delicate fabrics.</p>
            </article>
          </div>
        </section>

        <section id="how-it-works" className="section">
          <h2>How It Works</h2>
          <div className="steps">
            <article className="step">
              <span>1</span>
              <p>Choose your slot for pickup.</p>
            </article>
            <article className="step">
              <span>2</span>
              <p>Track cleaning updates live.</p>
            </article>
            <article className="step">
              <span>3</span>
              <p>Receive clothes clean and packed.</p>
            </article>
          </div>
        </section>

        <section id="contact" className="section cta">
          <h2>Ready to start?</h2>
          <p>Call us at +91 98765 43210 or book directly from the app.</p>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Laundry Trial. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
