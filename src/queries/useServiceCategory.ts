import { getServiceCategory } from "@/api/serviceCategory";
import { ServiceCategory } from "@/interfaces/ServiceCategory";
import { useQuery } from "@tanstack/react-query";


export const useServiceCategory = () =>
    useQuery<ServiceCategory[]>({
      queryKey: ["serviceCategory"],
      queryFn: getServiceCategory,
      refetchOnWindowFocus: false
    });