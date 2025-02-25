import { ShoppingCart, Search, Phone, MapPin, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { useEffect } from "react";
import { syncCartAfterLogin } from "@/api/cartApi";


const TopBar = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.auth.user);
  const { totalAmount, totalQuantity, items } = useAppSelector(
    (state: RootState) => state.cart
  );

  useEffect(() => {
    if (user) {
      const fetchCart = async () => {
        try {
          await syncCartAfterLogin(dispatch); 
        } catch (error) {
          console.error("Error syncing cart:", error);
        }
      };

      fetchCart();
    }
  }, [user, dispatch]);

  return (
    <div className="bg-[#222a63] text-white text-sm py-2 sticky top-0 w-full z-30">
      <div className="lg:container mx-auto justify-end flex items-center lg:justify-between gap-4 px-4">
        <div className="hidden lg:flex items-center gap-4 text-center justify-center">
          <span className="flex items-center space-x-1">
            <Phone size={16} />
            <a href="tel:+123456789" className="font-semibold">
              +123 456 789
            </a>
          </span>

          <span className="flex items-center space-x-1">
            <MapPin size={16} />
            <span>123 Paw Street, PetCity</span>
          </span>
        </div>

        <div className="hidden lg:flex relative items-center w-full max-w-xs">
          <Input type="text" placeholder="Search..." className="pr-10 w-full" />
          <Search className="absolute right-3" size={18} />
        </div>

        <div className="flex items-center gap-4 text-center justify-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="relative flex items-center hover:text-[#49B3F4] cursor-pointer">
                <span>
                  ${totalAmount > 0 ? totalAmount.toFixed(2) : "0.00"}
                </span>
                <div className="relative">
                  <ShoppingCart size={20} />
                  {totalQuantity > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#23A455] text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
                      {totalQuantity}
                    </span>
                  )}
                </div>
              </Button>
            </SheetTrigger>

            <SheetContent className="bg-white shadow-lg flex flex-col h-screen">
              <SheetHeader>
                <SheetTitle>Shopping Cart</SheetTitle>
                <SheetDescription>
                  You have {totalQuantity} items in your cart
                </SheetDescription>
              </SheetHeader>
              <div className="mt-4 flex flex-col gap-4 overflow-y-auto pr-4 pb-4">
                {items.length > 0 ? (
                  items.map((item) => (
                    <div
                      key={item.productId._id}
                      className="flex justify-between items-center border-b pb-2"
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={item.productId.imgUrl}
                          alt={item.productId.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div>
                          <p className="text-sm font-semibold">{item.productId.name}</p>
                          <p className="text-xs text-gray-500">
                            x{item.quantity}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold">
                        ${(item.productId.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-center">
                    Your cart is empty
                  </p>
                )}
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <p className="text-lg font-bold">
                  Total: ${totalAmount.toFixed(2)}
                </p>
                <Button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200">
                  <Link to="/checkout" className="w-full block text-center">
                    Checkout
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          {user ? (
            <span className="flex items-center space-x-2">
              <User size={20} />
              <span className="font-semibold">{user.email}</span>
            </span>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="auth" className="hover:text-[#49B3F4]">
                Login
              </Link>
              <span>|</span>
              <Link to="auth" className="hover:text-[#49B3F4]">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
