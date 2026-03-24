import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import '../styles/Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Aeon</h1>
        </div>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <button onClick={() => handleNavClick('hero')} className="nav-link">Home</button>
          <button onClick={() => handleNavClick('about')} className="nav-link">About</button>
          <button onClick={() => handleNavClick('projects')} className="nav-link">Projects</button>
          <button onClick={() => handleNavClick('skills')} className="nav-link">Skills</button>
          <button onClick={() => handleNavClick('contact')} className="nav-link">Contact</button>
        </nav>
      </div>
    </header>
  )
}

export default Header
