import '../styles/Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-shape-left"></div>
        <div className="hero-content">
          <p className="hero-label">Welcome to my portfolio</p>
          <h2 className="hero-title">Hi, I'm Aeon</h2>
          <p className="hero-subtitle">Full Stack Developer & Creative Problem Solver</p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-shape-right"></div>
      </div>
    </section>
  )
}

export default Hero
