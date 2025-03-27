import { Service } from "./service";

export interface Staff {
    _id?: string;
    full_name?: string;
    email: string;
    phone?: string;
    address?: string;
    salary?: number;
    service_id?: Service[];
  }
