import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { useAppSelector } from "@/store/hooks";
import { RootState } from "@/store";
import CartDropdown from "./CartDropdown";

const CartButton = () => {
  const { totalAmount, totalQuantity } = useAppSelector(
    (state: RootState) => state.cart
  );
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="relative flex items-center hover:text-[#49B3F4] cursor-pointer">
          <span>${totalAmount > 0 ? totalAmount.toFixed(2) : "0.00"}</span>
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
      <CartDropdown />
    </Sheet>
  );
};
export default CartButton;