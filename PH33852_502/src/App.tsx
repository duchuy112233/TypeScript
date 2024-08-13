import { Product } from "./types/Product";
import ListAdmin from "./pages/ListAdmin";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getProducts, removeProduct } from "./apis/product";
function App() {
  //
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    (async () => {
      const data = await getProducts();
      setProducts(data);
    })();
  }, []);
    //
    const HendleDeletes = (id:Number | undefined) => {
        (async () => {
        await removeProduct(`$`);
        setProducts(products.filter((i)=>i.id !== id));
      })();
    }
 
  

  return (
    <>
      <main className="mt-20 bg-white color-text ">
        <div className="max-w-screen-xl mx-auto pt-[14px] flex pb-16">
          <div className="content grow">
            <Routes>
              <Route path="/" element={<ListAdmin products={products} />} />
            </Routes>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
