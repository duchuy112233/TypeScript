import Header from "./component/header";
import { Product } from "~/types/product";
import NotFound from "./pages/NotFound";

import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { getProducts, removeProduct, createProduct,updateProduct } from "./apis/product";

import Home from "./pages/home";
import ProductDetail from "./pages/productDetail";
import ListAdmin from "./pages/admin/list";
import AddProduct from "./pages/admin/add";
import EditProduct from "./pages/admin/edit";

const App = () => {
  // hiển thị
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    (async () => {
      const data = await getProducts();
      setProducts(data);
    })();
  }, []);
  //
  const handleDeleteProduct = (id: number | undefined) => {
    (async () => {
      const isConfirm = window.confirm(
        "Bạn có chắc chắn muốn xoá sản phẩm này?",
      );
      if (isConfirm) {
        await removeProduct(`${id}`);
        setProducts(products.filter((i) => i.id !== id));
      }
    })();
  };
  //
  const navigate = useNavigate();
  const add = (product: Product) => {
    (async () => {
      const data = await createProduct(product);
      setProducts([...products, data]);
    })();
    navigate("/admin");
  };
  //
  // edit
  const handleEditProduct = (product: Product) => {
    (async () => {
      const data = await updateProduct(product);
      setProducts(products.map((p) => (p.id === data.id ? data : p)));
    })();
    navigate("/admin");
  };

  return (
    <div>
      <Header />

      <main className="mt-8 bg-white color-text mt-24">
        <div className="max-w-screen-xl mx-auto pt-[14px] flex pb-16">
          <div className="content grow">
            <Routes>
              <Route path="/">
                <Route index element={<Home products={products} />} />
                <Route path="/shop/:id" element={<ProductDetail />} />

                <Route path="/admin">
                  <Route
                    path="/admin"
                    element={
                      <ListAdmin
                        onDel={handleDeleteProduct}
                        products={products}
                      />
                    }
                  />
                  <Route
                    path="/admin/add"
                    element={<AddProduct onAdd={add} />}
                  />
                  <Route
                    path="/admin/edit/:id"
                    element={<EditProduct onEdit={handleEditProduct} />}
                  />
                </Route>

                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
