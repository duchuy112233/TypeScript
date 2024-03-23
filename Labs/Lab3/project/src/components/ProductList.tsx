import { useEffect, useState } from 'react'
import instance from '../apis'
import { Product } from '../types/Product'

import ProductItem from './ProductItem/ProductItem'

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
          <ProductItem product={product}/>
      ))}
    </>
  )
}

export default ProductList
