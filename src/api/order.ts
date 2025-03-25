import apiClient from "@/config/axiosClient";
import { Order } from "@/interfaces/Order";

export const getCustomerOrder = async (id: string): Promise<Order[]> => {
    try {
      const { data } = await apiClient.get(`/orders/${id}`);
      return data;
    } catch (error) {
      console.error(`Error fetching order with id ${id}:`, error);
      throw error;
    }
  };