import { User } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { logoutThunk } from "@/redux/auth/authThunk";
import { useAppDispatch } from "@/store/hooks";
import { logout } from "@/redux/auth/authSlice";

const UserMenu = ({ user }: { user: { email: string } }) => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    logoutThunk();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#222A63] text-white hover:bg-[#1B2254] transition-all duration-200 cursor-pointer">
          <User size={20} />
          <span className="font-semibold">{user.email}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-48 bg-white shadow-lg border border-gray-200 rounded-lg"
      >
        <DropdownMenuItem asChild>
          <Link
            to="/profile"
            className="w-full px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200 cursor-pointer"
          >
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link
            to="/order-history"
            className="w-full px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200 cursor-pointer"
          >
            Order History
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleLogout}
          className="w-full px-3 py-2 font-medium rounded-lg hover:bg-gray-100 transition-all duration-200 cursor-pointer"
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
