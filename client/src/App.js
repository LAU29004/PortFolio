import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import "./styles/App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App