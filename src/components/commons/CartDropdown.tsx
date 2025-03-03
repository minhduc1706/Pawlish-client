import { Link } from "react-router-dom";
import { SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useAppSelector } from "@/store/hooks";
import { RootState } from "@/store";
import { Button } from "@/components/ui/button";

const CartDropdown = () => {
  const { totalAmount, totalQuantity, items } = useAppSelector(
    (state: RootState) => state.cart
  );
  return (
    <SheetContent className="bg-white shadow-lg flex flex-col h-screen">
      <SheetHeader>
        <SheetTitle>Shopping Cart</SheetTitle>
        <SheetDescription>You have {totalQuantity} items in your cart</SheetDescription>
      </SheetHeader>
      <div className="mt-4 flex flex-col gap-4 overflow-y-auto pr-4 pb-4">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.productId._id} className="flex justify-between items-center border-b pb-2">
              <div className="flex items-center gap-2">
                <img
                  src={item.productId.imgUrl}
                  alt={item.productId.name}
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <p className="text-sm font-semibold">{item.productId.name}</p>
                  <p className="text-xs text-gray-500">x{item.quantity}</p>
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
      <div className="mt-6 flex flex-col gap-2">
        <p className="text-lg font-bold">Total: ${totalAmount.toFixed(2)}</p>
        <Button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200">
          <Link to="/checkout" className="w-full block text-center">Checkout</Link>
        </Button>
      </div>
    </SheetContent>
  );
};
export default CartDropdown;