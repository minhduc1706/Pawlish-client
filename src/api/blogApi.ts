import apiClient from "../config/axiosClient";
import { Blog } from "../interfaces/Blog";

export const getBlog = async (): Promise<Blog[]> => {
  try {
    const { data } = await apiClient.get("/blog");
    return data;  
  } catch (error) {
    console.error("Error fetching blog:", error);
    throw error;
  }
};

export const getBlogById = async (id: string): Promise<Blog> => {
  try {
    const { data } = await apiClient.get(`/blog/${id}`);
    return data;
  } catch (error) {
    console.error(`Error fetching blog with id ${id}:`, error);
    throw error;
  }
};

export const addBlog = async (product: Blog) => {
  const { data } = await apiClient.post("/blog", product);
  return data;
};

export const updateBlog = async (id: string, product: Blog) => {
  const { data } = await apiClient.put(`/blog/${id}`, product);
  return data;
};

export const deleteBlog = async (id: string) => {
  const { data } = await apiClient.delete(`/blog/${id}`);
  return data;
};
