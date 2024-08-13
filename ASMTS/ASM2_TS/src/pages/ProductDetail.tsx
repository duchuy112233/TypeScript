import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Product } from "~/types/product";
import { getDetail } from "~/apis/product";
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getDetail(+id!);
      setProduct(data);
    })();
  }, []);
  return (
    <div className="flex gap-10 mt-20">
      {product ? (
        <div className="flex gap-20">
          <div>
            <img
              src={product.thumbnail}
              alt={product.title}
              className=" w-[600px] h-[350px] rounded-md mb-4"
            />
            <p className="w-[600px]">
              <h1> {product.title}</h1>
              <b>Mô tả:</b>
              <br /> {product.description}
            </p>
          </div>

          <div>
            <b className="text-[25px]"></b>
            <p>
              Price: <b>{product.price}</b>
            </p>
            <p>Rating {product.rating}</p>
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
