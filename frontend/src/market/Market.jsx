import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Marketplace from '../components/Marketplace'

function Market() {
  return (
    <>
    <Navbar />
    <div className='min-h-screen'>
        <Marketplace />
    </div>
    <Footer />
    </>
  )
}

export default Market