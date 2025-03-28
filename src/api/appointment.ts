import apiClient from "../config/axiosClient";
import { Appointment } from "@/interfaces/Appointment";


export const getAppointment = async (): Promise<Appointment[]> => {
  try {
    const { data } = await apiClient.get("/appointments");
    return data;  
  } catch (error) {
    console.error("Error fetching appointment:", error);
    throw error;
  }
};

export const createAppointment = async (appointment: Appointment) => {
    const { data } = await apiClient.post("/appointment", appointment);
    return data;
  };