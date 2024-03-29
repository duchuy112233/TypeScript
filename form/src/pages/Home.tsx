import Banner from "~/components/Banner";
import { Link } from "react-router-dom";
import { Product } from "~/types/Product";

type Props = {
  products: Product[];
};

const Home = ({ products }: Props) => {
  return (
    <>
      <Banner />
      <div className="grid grid-cols-4 gap-4 mt-10">
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
      </div>
    </>
  );
};
export default Home;

<div className="grid grid-cols-4 gap-4 mt-10">
  <>
    <div>
      <Link to={``}>
        <img className="w-[300px] h-[200px]" src={} alt={} />
      </Link>
      <Link className="no-underline" to={``}>
        <b className=" text-[20px]">{}</b> <br />
      </Link>

      <b className="text-red-500 text-[20px]">{}</b>
      <p className="text-yellow-500">{}</p>
    </div>
  </>
</div>;
