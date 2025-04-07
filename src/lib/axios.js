import axios from "axios";


// Set config defaults when creating the instance
export const basicInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASEURL,
  });

export const getAllProducts = async () => {
    const response = await basicInstance.get("/products");
    return response?.data;
}  