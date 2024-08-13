import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Product } from "./types/Product";
import { getAll, getDelete, addProduct } from "./apis/product";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import ListAdmin from "./pages/admin/ListAdmin";
import AddProduct from "./pages/admin/AddProduct";

const App = () => {
  // hiẻn thị
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    (async () => {
      const data = await getAll();
      setProducts(data);
    })();
  }, []);

  //delete
  const Delete = (id: number | undefined) => {
    (async () => {
      const cf = window.confirm("Ban co chac chan muon xoa?");
      if (cf) {
        await getDelete(`${id}`);
        setProducts(products.filter((item) => item.id !== id));
      }
    })();
  };
  //add
  const navigate = useNavigate();
  const HandleAdd = (product: Product) => {
    (async () => {
      const data = await addProduct(product);
      setProducts([...products, data]);
    })();
    navigate("/admin");
  };

  return (
    <>
      <Header />
      <main className="mt-8 bg-white color-text mt-24">
        <div className="max-w-screen-xl mx-auto pt-[14px] flex pb-16">
          <div className="content grow">
            <Routes>
              <Route path="/">
                <Route index element={<Home products={products} />} />
                <Route path="/shop/:id" element={<ProductDetail />} />
              </Route>
              <Route path="/admin">
                <Route
                  path="/admin"
                  element={<ListAdmin onDel={Delete} products={products} />}
                />
                <Route
                  path="/admin/add"
                  element={<AddProduct onAdd={HandleAdd} />}
                />
              </Route>
              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
