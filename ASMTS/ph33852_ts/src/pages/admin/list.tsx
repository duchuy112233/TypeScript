import { Product } from "~/types/product";
import { Link } from "react-router-dom";
type Props = {
  products: Product[];
  onDel: (id: number | undefined) => void;
};

const ListAdmin = ({ products, onDel }: Props) => {
  const handleDelete = (id: number | undefined) => {
    onDel(id);
  };
  return (
    <div>
      <div className="overflow-x-auto mt-20">
        <Link
          className="mb-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          to="/admin/add"
        >
          add product
        </Link>
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className=" px-4 py-2 font-medium text-gray-900">Name</th>
              <th className=" px-4 py-2 font-medium text-gray-900">Price</th>
              <th className=" px-4 py-2 font-medium text-gray-900">Ảnh</th>
              <th className=" px-4 py-2 font-medium text-gray-900">mo ta</th>
              <th className=" px-4 py-2 font-medium text-gray-900">
                Hành động
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {products.map((product) => (
              <tr>
                <td className=" px-4 py-2 font-medium text-gray-900">
                  {product.title}
                </td>
                <td className=" px-4 py-2 text-gray-700">{product.price}</td>
                <td className="p-4 ">
                  <img src={product.thumbnail} className="w-[150px] " alt="" />
                </td>
                <td className=" px-4 py-2 text-gray-700">
                  {product.description}
                </td>
                <td className=" px-4 py-2 text-gray-700">
                  <button onClick={() => handleDelete(Number(product.id))}>
                    Xoá
                  </button>
                  <Link to={`/admin/edit/${product.id}`} className="mr-10">
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListAdmin;
