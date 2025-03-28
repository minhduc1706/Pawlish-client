import { ServiceCategory } from "./ServiceCategory";

export interface Service {
    _id: string;
    name: string;
    duration: number;
    price: number;
    available?: boolean;
    category_id: ServiceCategory;
    createdAt?: string;
    updatedAt?: string;
  }
  