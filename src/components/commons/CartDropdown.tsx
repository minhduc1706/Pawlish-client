import {  useLocation } from "react-router-dom"; 
import { SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { RootState } from "@/store";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { removeItemFromCart, addItemToCart, clearCart } from "@/redux/cart/cartSlice";
import { CartItem } from "@/interfaces/Cart";
import { useState, useEffect } from "react"; 
import { createVNPayPayment } from "@/api/payment";

const CartDropdown = () => {
  const { totalAmount, totalQuantity, items } = useAppSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useAppDispatch();
  const location = useLocation(); 
  const [loading, setLoading] = useState<boolean>(false);
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null); 

  const handleRemoveItem = (id: string) => {
    dispatch(removeItemFromCart(id));
  };

  const handleUpdateQuantity = (item: CartItem, newQuantity: number) => {
    if (newQuantity < 1) return;
    dispatch(
      addItemToCart({
        ...item,
        quantity: newQuantity - item.quantity,
      })
    );
  };

  const handlePayment = async () => {
    if (totalAmount <= 0 || items.length === 0) {
      alert("Giỏ hàng trống hoặc tổng tiền không hợp lệ!");
      return;
    }
  
    setLoading(true);
    try {
      const products = items.map(item => ({
        product_id: item.productId._id,
        quantity: item.quantity,
      }));
      const paymentUrl = await createVNPayPayment({
        amount: totalAmount,
        products,
      });
      window.location.href = paymentUrl;
    } catch (error) {
      console.error("Error initiating VNPay payment:", error);
      alert("Có lỗi xảy ra khi khởi tạo thanh toán VNPay!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const responseCode = queryParams.get("vnp_ResponseCode");
    const orderId = queryParams.get("vnp_TxnRef");

    if (responseCode) {
      if (responseCode === "00") {
        setPaymentStatus(`Thanh toán thành công cho đơn hàng ${orderId}`);
        dispatch(clearCart());
      } else {
        setPaymentStatus("Thanh toán thất bại. Vui lòng thử lại.");
      }
    }
  }, [location.search, dispatch]);

  return (
    <SheetContent className="bg-white shadow-lg flex flex-col h-screen">
      <SheetHeader>
        <SheetTitle>Shopping Cart</SheetTitle>
        <SheetDescription>You have {totalQuantity} items in your cart</SheetDescription>
      </SheetHeader>

      {paymentStatus && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p className={paymentStatus.includes("thành công") ? "text-green-600" : "text-red-600"}>
            {paymentStatus}
          </p>
          <Button
            onClick={() => setPaymentStatus(null)}
            className="mt-2 w-full bg-gray-500 hover:bg-gray-600 text-white"
          >
            Đóng
          </Button>
        </div>
      )}

      <div className="mt-4 flex flex-col gap-4 overflow-y-auto pr-4 pb-4">
        {items.length > 0 ? (
          items.map((item: CartItem) => (
            <div
              key={item.productId._id}
              className="flex justify-between items-center border-b pb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.productId.imgUrl}
                  alt={item.productId.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <p className="font-semibold">{item.productId.name}</p>
                  <p className="text-[#4CAF50] font-semibold mt-1">
                    ${item.productId.price.toFixed(2)}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="p-1 hover:bg-gray-100 rounded"
                      onClick={() => handleUpdateQuantity(item, item.quantity - 1)}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      className="p-1 hover:bg-gray-100 rounded"
                      onClick={() => handleUpdateQuantity(item, item.quantity + 1)}
                    >
                      <Plus size={16} />
                    </button>
                    <button
                      className="p-1 hover:bg-gray-100 rounded ml-2 text-red-500"
                      onClick={() => handleRemoveItem(item.productId._id)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-sm font-semibold">
                ${(item.productId.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">Your cart is empty</p>
        )}
      </div>
      <div className="mt-6 flex flex-col gap-4 border-t pt-4">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Total:</span>
          <span className="text-lg font-bold text-[#4CAF50]">
            ${totalAmount.toFixed(2)}
          </span>
        </div>
        <Button
          onClick={handlePayment}
          disabled={loading || items.length === 0}
          className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white"
        >
          {loading ? "Processing..." : "Pay with VNPay"}
        </Button>
      </div>
    </SheetContent>
  );
};

export default CartDropdown;