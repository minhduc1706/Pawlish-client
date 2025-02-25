import {
  addItemToCart,
  getCart,
  removeItemFromCart,
  syncCartAfterLogin,
} from "@/api/cartApi";
import { CartItem } from "@/interfaces/Cart";
import { useAppDispatch } from "@/store/hooks";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useCart = (userId: string) => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  
  const cartQuery = useQuery({
    queryKey: ["cart", userId],
    queryFn: () => (userId ? getCart() : null),
    enabled: !!userId,
  });

  const addToCartMutation = useMutation({
    mutationFn: (params: CartItem) => addItemToCart(params),
    onSuccess: () => {
      if (userId) {
        queryClient.invalidateQueries({ queryKey: ["cart", userId] });
      }
    },
    onError: (error) => {
      console.error("Failed to add item to cart:", error);
    },
  });

  const removeFromCartMutation = useMutation({
    mutationFn: (itemId: string) => removeItemFromCart(itemId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart", userId] });
    },
    onError: (error) => {
      console.error("Failed to remove item from cart:", error);
    },
  });

  const syncCartMutation = useMutation({
    mutationFn: () => syncCartAfterLogin(dispatch),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart", userId] });
    },
    onError: (error) => {
      console.error("Failed to sync with server:", error);
    },
  });

  return {
    cartQuery,
    addToCartMutation,
    removeFromCartMutation,
    syncCartMutation,
  };
};
