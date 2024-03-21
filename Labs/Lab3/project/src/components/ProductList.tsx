import { useEffect, useState } from 'react'
import instance from '../apis'
import { Product } from '../types/Product'
import { Link } from 'react-router-dom'


const ProductList = () => {
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
      {products.map((product) => (
        <div key={product.id}>
          <div className='item-product px-5 pt-[13px] pb-[26px] h-[317px] flex flex-col justify-between'>
            <Link to={`/shop/${product.id}`}>
              <img src={product.thumbnail} alt={product.title} className='max-w-[200px] max-h-[200px]' />
            </Link>

            <div className='info-product'>
              <Link to={`/shop/${product.id}`}>
                <h3 className='color-text text-[20px]'>{product.title}</h3>
              </Link>
              <div className='reviews flex items-center my-[6px]'>
                <div className='starts text-xs'>
                  <i className='fa-solid fa-star'></i>
                  <i className='fa-solid fa-star'></i>
                  <i className='fa-solid fa-star'></i>
                  <i className='fa-solid fa-star'></i>
                  <i className='fa-solid fa-star'></i>
                </div>
                <span className='w-[1px] h-[10px] bg-slate-300 m-[6px]'></span>
                <div className='sold text-xs text-[#787878]'>Đã bán 1000+</div>
              </div>
              <div className='price color-price flex items-center text-red-500 text-[20px]'>
                <span>{product.price}</span> ₫
                <div className='ml-2 text-xs border border-red-500  bg-[#FFF0F1]'>-23%</div>
              </div>
              <div className='text-red-500 slogan color-price flex relative mt-1'>
                <p className='uppercase text-xs pl-1'>Xếp hạng: {product.rating}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ProductList
