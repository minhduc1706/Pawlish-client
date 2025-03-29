import { fetchUserByIdApi } from "@/api/userApi";
import { User } from "@/interfaces/User";
import { useQuery } from "@tanstack/react-query";

export const useUser = (id: string) =>
  useQuery<User>({
    queryKey: ["User", id],
    queryFn: () => fetchUserByIdApi(id),
    enabled: !!id,
  });
