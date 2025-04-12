import axios from "axios";

// Set config defaults when creating the instance
export const basicInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL,
});

export const getAllProducts = async () => {
  try {
    const response = await basicInstance.get("/products");
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductDetails = async (id) => {
  try {
    const response = await basicInstance.get(`/products/${id}`);

    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllCategory = async () => {
  try {
    const response = await basicInstance.get(`/products/categories`);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductByCat = async (cat) => {
  try {
    const response = await basicInstance.get(`/products/category/${cat}`);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
