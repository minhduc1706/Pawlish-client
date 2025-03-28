import apiClient from "../config/axiosClient";

export const getCSKHStaffId = async (): Promise<string> => {
  try {
    const { data } = await apiClient.get("/staff/cskh");
    return data.staffId;
  } catch (error) {
    console.error("Error fetching CSKH staff ID:", error);
    throw error;
  }
};
