import { Product } from "~/types/product";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "./../apis/product";

const ProductDetail = () => {
  const { id } = useParams();
  const [products, setProducts] = useState<Product | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getProduct(+id!);
      setProducts(data);
    })();
  }, []);

  return (
    <div className="flex gap-10 mt-20 ">
      {products ? (
        <div>
          <div className="flex gap-20">
            <div>
              <img
                src={products.thumbnail}
                alt={products.title}
                className=" w-[600px] h-[350px] rounded-md mb-4"
              />
              <p className="w-[600px]">
                {" "}
                <b>{products.description}</b>
                <br />
              </p>
            </div>

            <div>
              <b className="text-[25px]">{products.title}</b>
              <p>
                Price: <b> {products.price}</b>
              </p>
              <p>Rating: {products.rating}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Không còn sản phẩm này
          </h2>
          <a href="/" className="text-blue-500 hover:underline">
            Go back Home
          </a>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
