import { Link } from "react-router-dom";
import { SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { RootState } from "@/store";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { removeItemFromCart, addItemToCart } from "@/redux/cart/cartSlice";
import { CartItem } from "@/interfaces/Cart";

const CartDropdown = () => {
  const { totalAmount, totalQuantity, items } = useAppSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useAppDispatch();

  const handleRemoveItem = (id: string) => {
    dispatch(removeItemFromCart(id));
  };

  const handleUpdateQuantity = (item: CartItem, newQuantity: number) => {
    if (newQuantity < 1) return;
    dispatch(addItemToCart({
      ...item,
      quantity: newQuantity - item.quantity
    }));
  };

  return (
    <SheetContent className="bg-white shadow-lg flex flex-col h-screen">
      <SheetHeader>
        <SheetTitle>Shopping Cart</SheetTitle>
        <SheetDescription>You have {totalQuantity} items in your cart</SheetDescription>
      </SheetHeader>
      <div className="mt-4 flex flex-col gap-4 overflow-y-auto pr-4 pb-4">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.productId._id} className="flex justify-between items-center border-b pb-4">
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
        <Button className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white">
          <Link to="/checkout" className="w-full block text-center">
            Checkout
          </Link>
        </Button>
      </div>
    </SheetContent>
  );
};

export default CartDropdown;