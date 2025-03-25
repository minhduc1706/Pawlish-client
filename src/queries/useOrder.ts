import { getCustomerOrder } from "@/api/order";
import { Order } from "@/interfaces/Order";
import { useQuery } from "@tanstack/react-query";

export const useCustomerOrder = (id: string) => {
    return useQuery<Order[], null>({
      queryKey: ["order", id],
      queryFn: () => getCustomerOrder(id), 
      enabled: !!id,
    });
  };