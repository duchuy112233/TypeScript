import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../apis";
import { Product } from "~/types/Product";

const ProductDetail = () => {
  const { id } = useParams();
  const [products, setProduct] = useState<Product | null>(null);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await instance.get(`/products/${id}`);
        setProduct(data);
      } catch (error) {
        setProduct(null);
      }
    };

    getProduct();
  }, []);

  return (
    <>
      {products ? (
        <div className="flex gap-20">
          <div>
            <img
              src={products.thumbnail}
              alt={products.title}
              className=" w-[600px] h-[350px] rounded-md mb-4"
            />
            <p className="w-[600px]">
              {" "}
              <b>Mô tả:</b>
              <br /> {products.description}
            </p>
          </div>

          <div>
            <b className="text-[25px]">{products.title}</b>
            <p>
              Price: <b>{products.price} đ</b>
            </p>
            <p>Rating: {products.rating}</p>
          </div>
        </div>
      ) : (
        <h2 className="text-2xl font-semibold mb-4">Không còn sản phẩm này</h2>
      )}
    </>
  );
};

export default ProductDetail;



{products ? (
  
	) : (
	  
	)}
  

<>
  {products ? (
							<div className="flex gap-20">
							<div>
								<img
								src={}
								alt={}
								className=" w-[600px] h-[350px] rounded-md mb-4"
								/>
								<p className="w-[600px]">
								{" "}
								<b>Mô tả:666666666</b>
								<br /> 
								</p>
							</div>

							<div>
								<b className="text-[25px]">san pham 1</b>
								<p>
								Price: <b> 88888888đ</b>
								</p>
								<p>Rating: 666666666</p>
							</div>
							</div>
  ) : (
    						<h2 className="text-2xl font-semibold mb-4">Không còn sản phẩm này</h2>
  )}
</>;

