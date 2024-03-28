import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
//
import instance from './apis'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
//
import { Product } from './types/Product'
import ProductDetail from './pages/ProductDetail'
//
import Shop from './pages/Shop'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Dashboard from './pages/admin/Dashboard'

const App = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await instance.get('/products')
        console.log(data)
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }

    getProducts()
  }, [])
  return (
    <>
      <Header />
      <main className='mt-8 bg-white color-text'>
        <div className='max-w-screen-xl mx-auto pt-[14px] flex pb-16'>
          <div className='content grow'>
            <Routes>
              <Route index element={<Home products={products} />} />

              <Route path='/shop' element={<Shop />} />
              <Route path='/about' element={<About />} />
              <Route path='/shop/:id' element={<ProductDetail />} />

              {/* admin */}
              <Route path='/admin'>
                <Route index element={<Dashboard products={products} />} />
              </Route>
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
