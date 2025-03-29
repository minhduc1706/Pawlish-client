import { Service } from "./Service";
import { ServiceCategory } from "./ServiceCategory";
import { User } from "./User";

export type AppointmentStatus =
  | "pending"
  | "ongoing"
  | "completed"
  | "cancelled"
  | "confirmed";

export interface Appointment {
  _id?: string;
  user_id?: User | string | null;
  pet_id: Pet;
  service_id: Service;
  date: Date;
  time: string;
  amount: number;
  status?: AppointmentStatus;
  staff_id: Staff;
  notes?: string;
  category_id: ServiceCategory;
  createdAt?: string;
  updatedAt?: string;
}

export interface Pet {
  _id?: string;
  name: string;
  breed: string;
  species: string;
  weight: number;
  gender: string;
  age: number;
  user_id: User;
  createdAt?: string;
  updatedAt?: string;
}

export interface Staff {
  _id: string;
  full_name: string;
  email: string;
  phone: string;
  salary: number;
  service_id: Service[];
  createdAt?: string;
  updatedAt?: string;
}
