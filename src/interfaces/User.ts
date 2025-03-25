export interface User {
  _id: string;
  full_name?: string;
  email: string;
  phone?: string;
  address?: string;
  role: "admin" | "customer";
}

export interface UpdateUserData {
  full_name?: string;
  email?: string;
  phone?: string;
  address?: string;
}

export interface LoginResponse {
  accessToken: string;
  user: User;
}