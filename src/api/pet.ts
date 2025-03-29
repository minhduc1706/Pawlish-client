import apiClient from "@/config/axiosClient";
import { Pet } from "@/interfaces/Appointment";


export const createPet = async (item: Pet): Promise<Pet> => {
  try {
    const { data } = await apiClient.post("/pets", item);
    return data;
  } catch (error) {
    console.error("Error adding item to pet", error);
    throw error;
  }
};
