import { Product } from "./Product";
import { User } from "./User";

export interface OrderPaymentOrder {
  _id: string;
  total_amount: number;
  status: string;
}

export interface OrderPaymentTransaction {
  _id: string;
}

export interface OrderPayment {
  _id: string;
  user_id: User;
  order_id: string | OrderPaymentOrder;
  amount: number;
  status: "pending" | "completed" | "failed";
  payment_method: string;
  transaction_id?: string | OrderPaymentTransaction;
  created_at: string;
  vnp_transaction_no?: string;
  updated_at?: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface Supplier {
  _id: string;
  name: string;
  address?: string;
  phone?: string;
  email?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface OrderItem {
  product_id: Product;   
  quantity: number;     
}

export interface Order {
  _id: string;
  user_id: User;
  order_date?: string;
  total_amount: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "canceled";
  supplier_id?: Supplier;
  shipping_address?: string;
  expected_delivery_date?: string;
  products: OrderItem[];
  createdAt?: string;
  updatedAt?: string;
}

