import { Staff } from "@/interfaces/Appointment";
import { useQuery } from "@tanstack/react-query";
import { fetchStaffsApi } from "@/api/staff";


  
export const useStaff = () =>
  useQuery<Staff>({
    queryKey: ["Staff"],
    queryFn: () => fetchStaffsApi(),
  });