import instance from ".";
import { Product } from "~/types/Product";


export const getAll = async () => {
  try {
    const { data } = await instance.get("/products");
    return data;
  } catch (error) {
    console.log(error);
  }
};
//detail
export const getDetail = async (id: number) => {
  try {
    const { data } = await instance.get(`/products/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
//
export const getDelete = async (id: string) => {
  try {
    await instance.delete(`/products/${id}`);
  } catch (error) {
    console.log(error);
  }
};

//

export const addProduct = async (product:Product) => {
  try {
    const { data } = await instance.post("/products",product);
    return data;
  } catch (error) {
    console.log(error);
  }
};
