// import './App.css'


import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'

import { Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop'
import About from './pages/About'
import ProductDetail from './pages/ProductDetail'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
      <Header />
      <main className='mt-8 bg-white color-text'>
        <div className='max-w-screen-xl mx-auto pt-[14px] flex pb-16'>
          <div className='content grow'>
            <Routes>
              <Route path='/' element={<Home />} />

              <Route path='/shop' element={<Shop />} />
              <Route path='/about' element={<About />} />
              <Route path='/shop/:id' element={<ProductDetail />} />

              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
