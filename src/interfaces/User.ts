export interface User {
  _id?: string;
  full_name?: string;
  email: string;
  phone?: string;
  address?: string;
<<<<<<< HEAD
  role?: "admin" | "customer";
=======
  role: "admin" | "customer" | "staff";
>>>>>>> 6decd84f9330c3fcef6ecd4c10c2c458cdb16c25
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