import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import About from './components/About.tsx'
import Skills from './components/Skills.tsx'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
