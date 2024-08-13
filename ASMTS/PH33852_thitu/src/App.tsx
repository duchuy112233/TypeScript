import { useEffect, useState } from "react";
import { Product } from "./types/Product";
import Home from "./pages/Home";
import Header from "./components/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  getProducts,
  removeProduct,
  createProduct,
  updateProduct,
} from "./apis/product";
import Detail from "./pages/Detail";
import ListAD from "./pages/admin/ListAD";
import AddAD from "./pages/admin/AddAD";
import EditAmin from "./pages/admin/edit";
import NotFound from "./pages/NotFound";
function App() {
  //
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    (async () => {
      const data = await getProducts();
      setProducts(data);
    })();
  }, []);
  //add
  const navigate = useNavigate();
  const AddHendle = (product: Product) => {
    (async () => {
      const data = await createProduct(product);
      setProducts([...products, data]);
    })();
    navigate("/admin");
  };

  //up

  const EditHendle = (product: Product) => {
    (async () => {
      const data = await updateProduct(product);
      setProducts(products.map((p) => (p.id === data.id ? data : p)));
    })();
    navigate("/admin");
  };

  //
  const DeleteHendle = (id: number | undefined) => {
    (async () => {
      const cf = window.confirm("bn co chac chan muan xoa ko");
      if (cf) {
        await removeProduct(`${id}`);
        setProducts(products.filter((i) => i.id !== id));
      }
    })();
  };

  return (
    <>
      <Header />
      <main className="mt-20 bg-white color-text ">
        <div className="max-w-screen-xl mx-auto pt-[14px] flex pb-16">
          <div className="content grow">
            <Routes>
              <Route path="/">
                <Route index element={<Home products={products} />} />
                <Route path="/shop/:id" element={<Detail />} />
              </Route>
              <Route path="/admin">

                <Route
                  path="/admin"
                  element={<ListAD products={products} onDel={DeleteHendle} />}
                />

                <Route
                  path="/admin/add"
                  element={<AddAD onAdd={AddHendle} />}
                />

                <Route
                  path="/admin/edit/:id"
                  element={<EditAmin onEdit={EditHendle} />}
                />

              </Route>

              <Route path="*" element={<NotFound />} />
              
            </Routes>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
