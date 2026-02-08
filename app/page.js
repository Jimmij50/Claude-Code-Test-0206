export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <h1>Welcome to My Website</h1>
        <p className="subtitle">A simple, modern one-page site built with Next.js</p>
      </section>

      <section className="features">
        <div className="feature-card">
          <h2>🚀 Fast</h2>
          <p>Built with Next.js for optimal performance and speed</p>
        </div>
        <div className="feature-card">
          <h2>⚡ Modern</h2>
          <p>Uses the latest React and Next.js App Router</p>
        </div>
        <div className="feature-card">
          <h2>🎨 Clean</h2>
          <p>Simple, beautiful design that's easy to customize</p>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to get started?</h2>
        <button className="cta-button">Get Started</button>
      </section>

      <footer>
        <p>Built with Next.js 2026</p>
      </footer>
    </main>
  )
}
