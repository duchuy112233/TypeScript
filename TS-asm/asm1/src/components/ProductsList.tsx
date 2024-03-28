import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import instance from '../apis';
import { Product } from '~/types/Product';

const ProductList = () => {
	const [products, setProducts] = useState<Product[]>([]);
	useEffect(() => {
		const getProduct = async () => {
			const { data } = await instance.get('/products');
			console.log(data);
			setProducts(data);
		};
		getProduct();
	}, []);

	return (
		<>
			{products.map((product) => (
				<div key={product.id}>
					<Link to={`/shop/${product.id}`}>
						<img
							className="w-[300px] h-[200px]"
							src={product.thumbnail}
							alt={product.title}
						/>
					</Link>
					<Link className="no-underline" to={`/shop/${product.id}`}>
						<b className=" text-[20px]">{product.title}</b> <br />
					</Link>

					<b className="text-red-500 text-[20px]">{product.price}</b>
					<p className="text-yellow-500">{product.rating}</p>
				</div>
			))}
		</>
	);
};

export default ProductList;
