import { Product } from "@/types/Product";
import { Link } from "react-router-dom";

type Props = {
  products: Product[];
};

const Home = ({ products }: Props) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 mt-10">
        <>
          {products.map((prd) => (
            <div key={prd.id}>
              <Link to={`/shop/${prd.id}`}>
                <img
                  className="w-[300px] h-[200px]"
                  src={prd.thumbnail}
                  alt=""
                />
              </Link>
              <Link className="no-underline" to={`/shop/${prd.id}`}>
                <b className=" text-[20px]">{prd.title} </b> <br />
              </Link>

              <b className="text-red-500 text-[20px]">{prd.price} </b>
              <p className="text-yellow-500">{prd.rating} </p>
            </div>
          ))}
        </>
      </div>
    </>
  );
};

export default Home;
