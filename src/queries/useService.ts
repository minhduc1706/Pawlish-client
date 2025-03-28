import { getService } from "@/api/service";
import { Service } from "@/interfaces/service";
import { useQuery } from "@tanstack/react-query";


export const useService = () =>
    useQuery<Service[]>({
      queryKey: ["service"],
      queryFn: getService,
      refetchOnWindowFocus: false
    });