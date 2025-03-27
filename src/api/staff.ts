import { data } from "react-router-dom";
import apiClient from "../config/axiosClient";


export const fetchStaffsApi = async () => {
  try {
    const response = await apiClient.get("/staff/all");
    console.log(data)
    return response.data;
  } catch (error) {
    console.error("Error fetching Staffs:", error);
    throw error;
  }
};