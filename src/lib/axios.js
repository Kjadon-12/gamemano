import axios from "axios";


// Set config defaults when creating the instance
export const basicInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASEURL,
  });

export const getAllProducts = async () => {
    const response = await basicInstance.get("/products");
    return response?.data;
} 

export const getProductDetails = async (id) => {
  const response = await basicInstance.get(`/products/${id}`);
  return response?.data;
}

export const getAllCategory = async () => {
  const response = await basicInstance.get(`/products/categories`);
  return response?.data;
}

export const getProductByCat = async (cat) => {
  const response = await basicInstance.get(`/products/category/${cat}`);
  return response?.data;
}