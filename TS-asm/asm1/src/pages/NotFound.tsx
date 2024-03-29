import { Link } from 'react-router-dom';
const NotFound = () => {
	return (
		<div className="text-center">
			<h1 className="text-4xl font-bold">404</h1>
			<h2 className="text-2xl font-semibold mb-4">Not Found</h2>
			<Link to="/" className="text-blue-500 hover:underline">
				Go back Home
			</Link>
		</div>
	);
};

export default NotFound;
