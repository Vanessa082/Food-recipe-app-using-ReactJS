import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Herosection from './Components/Herosection/Herosection'
import Favorite from './Components/Favorite/Favorite'
import Category from './Components/Category/Category'
import Contactus from './Components/Contactus/Contactus'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Herosection />
        <Favorite />
        <Category />
        <Contactus />
        <Footer />
      </div>
    </>
  )
}

export default App
