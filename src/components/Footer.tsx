import { FaGithub, FaLinkedin } from 'react-icons/fa'
import '../styles/Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Aeon Sebastian Cruz</h3>
            <p>Full Stack Developer crafting modern web experiences.</p>
          </div>

          <div className="footer-right">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#hero">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Follow Me</h4>
              <div className="social-links">
                <a href="https://github.com/aeonsebastian" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/aeon-sebastian-cruz-7953113a5/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Aeon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
