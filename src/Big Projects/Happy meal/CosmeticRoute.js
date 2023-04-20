import React from 'react'
import Services from './components/Services/Services'
import Pricing from './components/Pricing/Pricing'
import Blobs from './components/Blog/Blobs'
import Statues from './components/Status/Statues'
import Contact from './components/Contact Us/Contact'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Portfolio from './components/Portfolio/Portfolio'
import Reviews from './components/Reviews/Reviews'
// import Footer from './components/Footer/Footer'
// import Scroll from './components/Scroll/Scroll'
import { BrowserRouter } from 'react-router-dom'
import Skills from './components/Skills/Skills'
import Scroll from './components/Scroll/Scroll'
function CosmeticRoute() {
  return (
    <BrowserRouter>
      <Home/>
      <Services/>
      <Portfolio/>
      <Statues/> 
      <Blobs/>
      <Pricing/>
       <Skills/>
      <Reviews/>
      <Scroll/>
      <Contact/> 
       <Footer/>
      </BrowserRouter>
  )
}

export default CosmeticRoute