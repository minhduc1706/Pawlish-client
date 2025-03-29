import apiClient from "@/config/axiosClient";

export interface PaymentResponse {
  paymentUrl: string;
}
export const createVNPayPayment = async (data: {
  amount: number;
  products: { product_id: string; quantity: number }[];
}) => {
  try {
    const response = await apiClient.post("/order-payment/vnpay", data);
    return response.data.paymentUrl;
  } catch (error) {
    console.error("Error creating VNPay payment:", error);
    throw error;
  }
};

export const createVNPayServicePayment = async (data: {
  amount: number;
  service: string;
  staff: string;
  date: string;
  time: string;
  pet: string;
  user: string;
  notes?: string;
}) => {
  try {
    const response = await apiClient.post("/service-payment/vnpay", data);
    return response.data.paymentUrl;
  } catch (error) {
    console.error("Error creating service VNPay payment:", error);
    throw error;
  }
};
