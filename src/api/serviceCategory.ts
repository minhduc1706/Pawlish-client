import { ServiceCategory } from "@/interfaces/ServiceCategory";
import apiClient from "../config/axiosClient";


export const getServiceCategory = async (): Promise<ServiceCategory[]> => {
  try {
    const { data } = await apiClient.get("/service-category");
    return data;  
  } catch (error) {
    console.error("Error fetching serviceCategory:", error);
    throw error;
  }
};