import { useEffect, useState } from 'react'
// import './App.css'
import { Product } from './types/Product'

import Banner from './components/Banner'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import instance from './apis'

const App = () => {
  return (
    <>
      <Header />
      <main className='mt-8 bg-white color-text'>
        <div className='max-w-screen-xl mx-auto pt-[14px] flex pb-16'>
          
          <div className='content grow'>
            <Banner />
            <Home />
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
