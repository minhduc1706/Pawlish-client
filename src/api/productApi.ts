import apiClient from "@/config/axiosClient";

export const getProducts = async () => {
  const response = await apiClient.get("/product");
  return response.data;
};