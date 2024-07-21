import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Freeservice from '../components/Freeservice'
import Footer from '../components/Footer'
import Marketplace from '../components/Marketplace'
import ContactUs from '../components/ContactUs'

function Home() {
  return (
    <div>
        <>
        <Navbar/>
        <Banner/>
        
        <Freeservice/>
        <Footer/>
        
        
        </>
    </div>
  )
}

export default Home