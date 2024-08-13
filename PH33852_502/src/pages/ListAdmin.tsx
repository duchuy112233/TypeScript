import { Product } from "@/types/Product";

import { Link } from "react-router-dom";
type Props = {
  products: Product[];
  onDel: (id: Number | undefined) => void;
};
function ListAdmin({ products, onDel }: Props) {
  const HendleDelete = (id: Number | undefined) => {
    onDel(id);
  };
  return (
    <>
      <>
        <h1 className="text-4xl text-center">Hello, admin</h1>
        <Link
          className="no-underline mb-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          to="/add"
        >
          Them moi
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
              {products.map((prd) => (
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                    {prd.title}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    {prd.price}
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex justify-center items-center">
                    <img
                      className="max-w-full h-auto"
                      width={140}
                      src={prd.thumbnail}
                      alt=""
                    />
                  </td>

                  <td className=" px-4 py-2 text-gray-900">
                    {" "}
                    {prd.description}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    <button
                      onClick={() => HendleDelete(Number(prd.id))}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
                    >
                      Delete
                    </button>

                    <Link
                      to={`/edit/${prd.id}`}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
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
    </>
  );
}

export default ListAdmin;
