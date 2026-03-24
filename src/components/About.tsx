import '../styles/About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with a keen eye for creating beautiful, functional web experiences.
              With expertise in React, Node.js, and modern web technologies, I transform ideas into reality.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
              or sharing knowledge with the developercommunity.
            </p>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <img src="profile.jpg" alt="Aeon Sebastian Cruz" className="profile-image" />

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
