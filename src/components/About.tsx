import '../styles/About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a passionate programmer who enjoys building systems and solving real-world problems through code. I have experience working with technologies such as JavaScript, React, Node.js, and PostgreSQL, and I enjoy developing web applications that are both functional and user-friendly. I am constantly learning new tools and improving my skills to become a better developer. My goal is to create efficient, scalable, and impactful software solutions.
            </p>
            <p>
              In addition to my technical skills, I am a strong communicator and collaborator. I enjoy working in teams and believe that effective communication is key to successful project outcomes. I am always open to feedback and eager to learn from others, which helps me grow both personally and professionally.
            </p>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <img src="/profile.jpg" alt="Aeon Sebastian Cruz" className="profile-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
