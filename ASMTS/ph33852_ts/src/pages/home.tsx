import { Link } from "react-router-dom";
import { Product } from "~/types/product";

type Props = {
  products: Product[];
};

const Home = ({ products }: Props) => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mt-20">
        <>
          {products.map((product) => (
            <div>
              <Link to={`/shop/${product.id}`}>
                <img
                  className="w-[300px] h-[200px]"
                  src={product.thumbnail}
                  alt={product.title}
                />
              </Link>
              <Link className="no-underline " to={`/shop/${product.id}`}>
                <b className=" text-[20px]">{product.title}</b> <br />
              </Link>

              <b className="text-[20px]">{product.price}</b>
              <p >{product.rating}</p>
            </div>
          ))}
        </>
      </div>
      
    </div>
  );
};

export default Home;
