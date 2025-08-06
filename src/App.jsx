import React from 'react'
import Navbar from './sections/navbar'
import Hero from './sections/hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Experiences from './sections/Experiences'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Clients/>
      <Experiences/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App