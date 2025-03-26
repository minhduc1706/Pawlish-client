import apiClient from "../config/axiosClient";
import { Product } from "../interfaces/Product";

export const getProducts = async (): Promise<Product[]> => {
  try {
    const { data } = await apiClient.get("/product");
    return data;  
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductById = async (id: string): Promise<Product> => {
  try {
    const { data } = await apiClient.get(`/product/${id}`);
    return data;
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    throw error;
  }
};

export const addProduct = async (product: Product) => {
  const { data } = await apiClient.post("/product", product);
  return data;
};

export const updateProduct = async (id: string, product: Product) => {
  const { data } = await apiClient.put(`/product/${id}`, product);
  return data;
};

export const deleteProduct = async (id: string) => {
  const { data } = await apiClient.delete(`/product/${id}`);
  return data;
};
