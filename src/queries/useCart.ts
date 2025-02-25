import {
  addItemToCart,
  getCart,
  removeItemFromCart,
  syncCartAfterLogin,
} from "@/api/cartApi";
import { CartItem } from "@/interfaces/Cart";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useCart = (userId: string) => {
  const queryClient = useQueryClient();

  const cartQuery = useQuery({
    queryKey: ["cart", userId],
    queryFn: () => (userId ? getCart() : []),
    enabled: !!userId,
  });

  const addToCartMutation = useMutation({
    mutationFn: (params: { userId: string; item: CartItem }) =>
      addItemToCart(params),
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
    mutationFn: ({ itemId }: { itemId: string }) =>
      removeItemFromCart({ itemId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart", userId] });
    },
    onError: (error) => {
      console.error("Failed to remove item from cart:", error);
    },
  });

  const syncCartMutation = useMutation({
    mutationFn: () => syncCartAfterLogin(),
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
