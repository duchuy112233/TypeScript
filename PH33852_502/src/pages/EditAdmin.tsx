import { Product } from "@/types/Product";
import { joiResolver } from "@hookform/resolvers/joi";
import { SubmitHandler, useForm } from "react-hook-form";
import schemaProduct from "@/validation/product";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "@/apis/product";

type Props = {
  onEdit: (produc: Product) => void;
};

const EditAdmin = (props: Props) => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
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
    props.onEdit(data);
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
              minLength: 6,
              maxLength: 100,
            })}
          />
          {errors.title && (
            <>
              <span>{errors.title.message}</span>
            </>
          )}
        </div>
        <div>
          <label className="block mb-1">Giá sản phẩm</label>
          <input
            type="text"
            id="price"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Giá sản phẩm..."
            defaultValue={product?.price}
            {...register("price", { required: true, minLength: 100 })}
          />
          {errors.price && (
            <>
              <span>{errors.price.message}</span>
            </>
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

export default EditAdmin;
