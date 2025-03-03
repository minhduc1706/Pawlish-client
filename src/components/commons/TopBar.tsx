import { Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { useSyncCart } from "@/queries/useCart";
import UserMenu from "./UserMenu";
import CartButton from "./CartButton";
import SearchBar from "./SearchBar";

const TopBar = () => {
  const { user, accessToken } = useAppSelector((state) => state.auth);
  const syncCartMutation = useSyncCart();
    
  useEffect(() => {
    if (!user || !accessToken) return;
    syncCartMutation.mutate();
  }, [user?._id, accessToken]);

  return (
    <div className="bg-[#222a63] text-white text-sm py-2 sticky top-0 w-full z-30">
      <div className="lg:container mx-auto justify-end flex items-center lg:justify-between gap-4 px-4">
        <div className="hidden lg:flex items-center gap-4">
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
        <SearchBar />
        <div className="flex items-center gap-4">
          <CartButton />
          {user ? (
            <UserMenu user={user} />
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
