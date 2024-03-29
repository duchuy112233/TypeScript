import instance from '.'
import { Product } from '~/types/Product' 

export const createProduct = async (product: Product) => {
  try {
    const { data } = await instance.post('/products', product)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getProduct = async (id: number) => {
  try {
    const { data } = await instance.get(`/products/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getProducts = async () => {
  try {
    const { data } = await instance.get(`/products`)
    return data
  } catch (error) {
    console.log(error)
  }
}