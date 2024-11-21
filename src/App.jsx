import React from 'react'
import Navbar from './components/NavBar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Servieces from './components/Servieces/Services'
import Mywork from './components/Mywork/Mywork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Fotter'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Servieces/>
      <Mywork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
