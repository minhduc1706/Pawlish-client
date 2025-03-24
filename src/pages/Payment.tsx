import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { User } from "@/interfaces/User";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [formData, setFormData] = useState<
    Pick<User, "full_name" | "email" | "phone" | "address">
  >({
    full_name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  //  (mock data)
  const [cartItems] = useState([
    { id: 1, name: "Alkin Mitecyn 50ml", price: 125000, quantity: 2 },
    { id: 2, name: "Pet Shampoo", price: 90000, quantity: 1 },
  ]);

  //  Tính tổng tiền đơn hàng
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirmPayment = () => {
    const newErrors: Partial<typeof formData> = {};

    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.email) newErrors.email = "Email address is required";
    if (!formData.full_name) newErrors.full_name = "Full name is required";
    if (!formData.address) newErrors.address = "Detailed address is required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setIsConfirmed(true);
      alert("Payment successful! Your order is being processed.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <h1 className="text-3xl font-semibold w-full mb-6 text-center md:col-span-2">
        Payment Page
      </h1>

      {/* Customer Information */}
      <Card className="w-full md:w-full shadow-lg">
        <CardContent className="p-6">
          <h2 className="text-xl font-medium mb-4">Customer Information</h2>
          {(
            [
              "phone",
              "email",
              "full_name",
              "address",
            ] as (keyof typeof formData)[]
          ).map((field) => (
            <div key={field}>
              <input
                className="w-full p-3 border rounded mb-4"
                placeholder={field.replace("_", " ").toUpperCase()}
                name={field}
                value={formData[field] || ""}
                onChange={handleChange}
              />
              {errors[field] && (
                <p className="text-red-500 text-sm">{errors[field]}</p>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Payment Information */}
      <div className="w-full md:w-full flex flex-col gap-8">
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-medium mb-4">Order Summary</h2>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between mb-2">
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <span>{item.price.toLocaleString()}₫</span>
              </div>
            ))}
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>{calculateTotal().toLocaleString()}₫</span>
            </div>
          </CardContent>
        </Card>

        {/* Payment Method */}
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-medium mb-4">Payment Method</h2>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bank" id="bank" />
                <label htmlFor="bank">Bank Transfer</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cod" id="cod" />
                <label htmlFor="cod">Cash on Delivery</label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>
      </div>

      {/* Confirm Button */}
      <div className="w-full md:col-span-2">
        <button
          className="w-full bg-blue-600 text-white p-4 rounded-lg text-lg font-semibold disabled:opacity-50"
          onClick={handleConfirmPayment}
          disabled={isConfirmed}
        >
          {isConfirmed ? "Payment Completed" : "Confirm Payment"}
        </button>
      </div>
    </div>
  );
};

export default Payment;
