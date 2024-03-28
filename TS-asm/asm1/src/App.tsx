import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

import { Route, Routes } from 'react-router-dom';
import Shop from './components/Shop';
import About from './components/About';
import ProductDetail from './pages/productDetail';

const App = () => {
	return (
		<>
			<Header />
			<main className="mt-8 bg-white color-text">
				<div className="max-w-screen-xl mx-auto pt-[14px] flex pb-16">
					<div className="content grow">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/shop" element={<Shop />} />
							<Route path="/about" element={<About />} />
							<Route path="/shop/:id" element={<ProductDetail />} />
						</Routes>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default App;
