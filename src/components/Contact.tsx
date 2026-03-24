import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import '../styles/Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>I'm always interested in hearing about new projects and opportunities.</p>
            
            <div className="contact-item">
              <span className="icon"><FaEnvelope /></span>
              <div className="contact-text">
                <h4>Email</h4>
                <a href="mailto:your.email@example.com">aeonsebastiancruz.com</a>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="icon"><FaPhone /></span>
              <div className="contact-text">
                <h4>Phone</h4>
                <a href="tel:+1234567890">+63 05 944 8611</a>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="icon"><FaMapMarkerAlt /></span>
              <div className="contact-text">
                <h4>Location</h4>
                <p>Caloocan City, Philippines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
