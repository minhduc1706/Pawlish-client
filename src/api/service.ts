import { Service } from "@/interfaces/Service";
import apiClient from "../config/axiosClient";



export const getService = async (): Promise<Service[]> => {
  try {
    const { data } = await apiClient.get("/services");
    console.log(data)
    return data;  
  } catch (error) {
    console.error("Error fetching service:", error);
    throw error;
  }
};

