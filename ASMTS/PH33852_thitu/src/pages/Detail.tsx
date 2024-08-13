import { useEffect, useState } from "react";
import { getProduct } from "@/apis/product";
import { Product } from "@/types/Product";
import { useParams } from "react-router-dom";
const Detail = () => {
  const {id} = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  useEffect(() => {
    (async () => {
      const data = await getProduct(+id!);
      setProduct(data);
    })();
  }, []);

  return (
    <>
      {product ? (
        <div className="flex gap-20">
          <div>
            <img
              src={product.thumbnail}
              alt=""
              className=" w-[600px] h-[350px] rounded-md mb-4"
            />
            <p className="w-[600px]">
              {" "}
              <b>Mô tả:</b>
              <br /> {product.description}
            </p>
          </div>

          <div>
            <b className="text-[25px]">{product.title}</b>
            <p>
              Price: <b>{product.price}</b>
            </p>
            <p>Rating: {product.rating}</p>
          </div>
        </div>
      ) : (
        <h2 className="text-2xl font-semibold mb-4">Không còn sản phẩm này</h2>
      )}
    </>
  );
};

export default Detail;
