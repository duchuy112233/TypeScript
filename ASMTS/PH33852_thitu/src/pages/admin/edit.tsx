import { SubmitHandler, useForm } from "react-hook-form";
import { Product } from "@/types/Product";
import schemaProduct from "@/validation/product";
import { joiResolver } from "@hookform/resolvers/joi";
import { useEffect, useState } from "react";
import { getProduct } from "@/apis/product";
import { useParams } from "react-router-dom";

type Props = {
  onEdit: (product: Product) => void;
};

const EditAmin = (props: Props) => {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const data = await getProduct(Number(id));
      setProduct(data);
    })();
  }, [id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({
    resolver: joiResolver(schemaProduct),
  });
  const onSubmit: SubmitHandler<Product> = (data: Product) => {
    props.onEdit({ ...data, id });
  };
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl text-center font-semibold mb-4">
        Thêm mới sản phẩm
      </h1>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block mb-1">Tên sản phẩm</label>
          <input
            type="text"
            id="title"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Tên sản phẩm..."
            defaultValue={product?.title}
            {...register("title", {
              required: true,
              minLength: 3,
              maxLength: 100,
            })}
          />
          {errors.title && (
            <span className="text-red-500">{errors.title.message}</span>
          )}
        </div>
        <div>
          <label className="block mb-1">Giá sản phẩm</label>
          <input
            type="text"
            id="price"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Giá sản phẩm..."
            defaultValue={product?.price as number}
            {...register("price", { required: true, minLength: 3 })}
          />
          {errors.price && (
            <span className="text-red-500">{errors.price.message}</span>
          )}
        </div>
        <div>
          <label className="block mb-1">Mô tả sản phẩm</label>
          <input
            type="text"
            id="description"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Mô tả sản phẩm..."
            defaultValue={product?.description}
            {...register("description", { required: true, minLength: 5 })}
          />
        </div>
        <div>
          <label className="block mb-1">Ảnh sản phẩm</label>
          <img
            className="max-w-full p-2 h-auto"
            width={200}
            src={product?.thumbnail}
            alt=""
          />
          <input
            type="text"
            id="thumbnail"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Ảnh sản phẩm..."
            defaultValue={product?.thumbnail}
            {...register("thumbnail", { required: true, minLength: 5 })}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300"
        >
          Xác nhận
        </button>
      </form>
    </div>
  );
};

export default EditAmin;
