import ProductList from '../components/ProductList'
import Banner from '~/components/Banner'



const Home = () => {
  return (
    <>
      <Banner />
      <h1 className='mt-10'>SẢN PHẨM BÁN CHẠY</h1>
      <div className='grid grid-cols-4 gap-4 mt-10'>
        <ProductList />
      </div>
    </>
  )
}

export default Home
