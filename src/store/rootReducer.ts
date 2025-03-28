import { combineReducers } from "redux";
import authReducer from "@/redux/auth/authSlice";
import cartReducer from "@/redux/cart/cartSlice";
import searchReducer from "@/redux/search/searchSlice";
import chatReducer from "@/redux/chat/chatSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  search: searchReducer,
  chat: chatReducer,
});