import ProductList from '~/components/ProductsList';

const Home = () => {
	return (
		<>
			<div className="grid grid-cols-4 gap-4 mt-10">
				<ProductList />
			</div>
		</>
	);
};
export default Home;
