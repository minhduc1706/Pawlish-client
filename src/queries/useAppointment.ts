import { getAppointment } from "@/api/appointment";
import { Appointment } from "@/interfaces/Appointment";
import { useQuery } from "@tanstack/react-query";

export const useAppointment = () =>
  useQuery<Appointment[]>({
    queryKey: ["appointment"],
    queryFn: getAppointment,
    refetchOnWindowFocus: false,
  });
