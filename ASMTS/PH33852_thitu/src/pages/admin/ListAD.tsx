import { Link } from "react-router-dom";
import { Product } from "@/types/Product";

type Props = {
  products: Product[];
  onDel: (id: number | undefined) => void
};

const ListAD = ({ products, onDel }: Props) => {
  const hendleDelete = (id: number | undefined) => {
    onDel(id);
  };
  return (
    <>
      <h1 className="text-4xl text-center">Hello, admin</h1>

      <Link
        className="no-underline mb-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        to="/admin/add"
      >
        Add new product
      </Link>

      <div className="overflow-x-auto mt-10">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                title
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                price
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                img
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                desc
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {products.map((item) => (
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  {item.title}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  {item.price}
                </td>

                <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex justify-center items-center">
                  <img
                    className="max-w-full h-auto"
                    width={140}
                    src={item.thumbnail}
                    alt=""
                  />
                </td>

                <td className=" px-4 py-2 text-gray-900">{item.description}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  <button
                    onClick={() => hendleDelete(Number(item.id))}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Delete
                  </button>

                    <Link
                    to={`/admin/edit/${item.id}`}
                    className='bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded'
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListAD;
