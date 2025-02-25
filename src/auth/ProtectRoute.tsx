import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../store";
import { useAppSelector } from "../store/hooks";

export const ProtectRoute = () => {
  const { isAuthenticated } = useAppSelector((state: RootState) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
