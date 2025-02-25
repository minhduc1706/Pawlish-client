import { combineReducers } from "redux";
import authReducer from "@/redux/auth/authSlice";
import cartReducer from "@/redux/cart/cartSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
