import { useState } from 'react'

import './App.css'
import { productType } from './types/Product'
import { userType } from './types/User'
import { cartType } from './types/Cart'

function App() {
  const [count, setCount] = useState(0)

  const product: productType = {
    id: 1,
    title: 'iPhone 9',
    description: 'An apple mobile which is nothing like apple',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
    images: [
      'https://cdn.dummyjson.com/product-images/1/1.jpg',
      'https://cdn.dummyjson.com/product-images/1/2.jpg',
      'https://cdn.dummyjson.com/product-images/1/3.jpg',
      'https://cdn.dummyjson.com/product-images/1/4.jpg',
      'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg'
    ]
  }

  const cart: cartType = {
    id: 1,
    products: [
      {
        id: 59,
        title: 'Spring and summershoes',
        price: 20,
        quantity: 3,
        total: 60,
        discountPercentage: 8.71,
        discountedPrice: 55,
        thumbnail: 'https://cdn.dummyjson.com/product-images/59/thumbnail.jpg'
      },
      {
        id: 88,
        title: ' TC Reusable Silicone Magic Washing Gloves',
        price: 29,
        quantity: 2,
        total: 58,
        discountPercentage: 3.19,
        discountedPrice: 56,
        thumbnail: 'https://cdn.dummyjson.com/product-images/88/thumbnail.jpg'
      },
      {
        id: 18,
        title: 'Oil Free Moisturizer 100ml',
        price: 40,
        quantity: 2,
        total: 80,
        discountPercentage: 13.1,
        discountedPrice: 70,
        thumbnail: ' https://cdn.dummyjson.com/product-images/18/thumbnail.jpg'
      },
      {
        id: 95,
        title: 'Wholesale cargo lashing Belt',
        price: 930,
        quantity: 1,
        total: 930,
        discountPercentage: 17.67,
        discountedPrice: 766,
        thumbnail: 'https://cdn.dummyjson.com/product-images/95/thumbnail.jpg'
      },
      {
        id: 39,
        title: 'Women Sweaters Wool',
        price: 600,
        quantity: 2,
        total: 1200,
        discountPercentage: 17.2,
        discountedPrice: 994,
        thumbnail: 'https://cdn.dummyjson.com/product-images/39/thumbnail.jpg'
      }
    ],
    total: 2328,
    discountedTotal: 1941,
    userId: 97,
    totalProducts: 5,
    totalQuantity: 10
  }

  const user: userType = {
    id: 1,
    firstName: 'Terry',
    lastName: 'Medhurst',
    maidenName: 'Smitham',
    age: 50,
    gender: 'other',
    email: 'atuny0@sohu.com',
    phone: '+63 791 675 8914',
    username: 'atuny0',
    password: '9uQFF1Lh',
    birthDate: '2000-12-25',
    image: 'https://robohash.org/Terry.png?set=set4',
    bloodGroup: 'A-',
    height: 189,
    weight: 75.4,
    eyeColor: 'Green',
    hair: {
      color: 'Black',
      type: 'Strands'
    },
    domain: 'slashdot.org',
    ip: '117.29.86.254',
    address: {
      address: '1745 T Street Southeast',
      city: 'Washington',
      coordinates: {
        lat: 38.867033,
        lng: -76.979235
      },
      postalCode: '20020',
      state: 'DC'
    },
    macAddress: '13:69:BA:56:A3:74',
    university: 'Capitol University',
    bank: {
      cardExpire: '06/22',
      cardNumber: '50380955204220685',
      cardType: 'maestro',
      currency: 'Peso',
      iban: 'NO17 0695 2754 967'
    },
    company: {
      address: {
        address: '629 Debbie Drive',
        city: 'Nashville',
        coordinates: {
          lat: 36.208114,
          lng: -86.58621199999999
        },
        postalCode: '37076',
        state: 'TN'
      },
      department: 'Marketing',
      name: "Blanda-O'Keefe",
      title: 'Help Desk Operator'
    },
    ein: '20-9487066',
    ssn: '661-64-2976',
    userAgent: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24',
    crypto: {
      coin: 'Bitcoin',
      wallet: '0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a',
      network: 'Ethereum (ERC20)'
    }
  }

  return (
    <>
      <div className='p-4 border border-gray-300 rounded-md bg-white'>
        <h1 className='text-xl font-bold text-indigo-600'>{product.title}</h1>
        <p className='text-gray-700'>{product.description}</p>
        <p className='text-gray-900'>Price: ${product.price}</p>
        <p className='text-green-500'>Discount: {product.discountPercentage}%</p>
        <p className='text-yellow-400'>Rating: {product.rating}</p>
        <p className='text-blue-500'>Stock: {product.stock}</p>
        <p className='text-indigo-600'>Brand: {product.brand}</p>
        <p className='text-purple-700'>Category: {product.category}</p>
        <img src={product.thumbnail} alt={product.title} className='w-48 h-auto mt-4' />
        <div className='flex mt-4'>
          {product.images.map((image, index) => (
            <img key={index} src={image} alt={product.title} className='w-24 h-auto mr-2' />
          ))}
        </div>
      </div>
      <div className='p-4 border border-gray-300 rounded-md bg-white mt-4'>
        <h2 className='text-xl font-bold'>User Info</h2>
        <p className='text-purple-700'>ID: {user.id}</p>
        <p className='text-purple-700'>
          Name: {user.firstName} {user.lastName}
        </p>
        <p className='text-purple-700'>Email: {user.email}</p>
        <p className='text-purple-700'>Phone: {user.phone}</p>
        <img src={user.image} alt={`${user.firstName} ${user.lastName}`} className='w-24 h-auto mt-4' />
        <p className='text-purple-700'>Age: {user.age}</p>
        <p className='text-purple-700'>Gender: {user.gender}</p>
        <p className='text-purple-700'>Blood Group: {user.bloodGroup}</p>
        <p className='text-purple-700'>Height: {user.height} cm</p>
        <p className='text-purple-700'>Weight: {user.weight} kg</p>
        {/* Hiển thị các thông tin khác của user nếu cần */}
      </div>
    </>
  )
}

export default App
