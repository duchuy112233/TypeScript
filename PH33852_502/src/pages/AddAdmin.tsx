import { Product } from "@/types/Product";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {
  onAdd: (produc: Product) => void;
};

const AddAdmin = (props: Props) => {
    const {

    } = useForm<Product>({
        resolver:
    })
  const onSubmit: SubmitHandler<Product> = (data: Product) => {
    props.onAdd(data);
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
            //
          />
          //
        </div>
        <div>
          <label className="block mb-1">Giá sản phẩm</label>
          <input
            type="text"
            id="price"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Giá sản phẩm..."
            //
          />
          //
        </div>
        <div>
          <label className="block mb-1">Mô tả sản phẩm</label>
          <input
            type="text"
            id="description"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Mô tả sản phẩm..."
          />
        </div>
        <div>
          <label className="block mb-1">Ảnh sản phẩm</label>
          <input
            type="text"
            id="thumbnail"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Ảnh sản phẩm..."
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

export default AddAdmin;
