import {
  addItemToCart,
  getCart,
  removeItemFromCart,
  syncCartAfterLogin,
} from "@/api/cartApi";
import { Cart } from "@/interfaces/Cart";
import { useAppDispatch } from "@/store/hooks";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useCart = (userId: string) =>
  useQuery<Cart | null>({
    queryKey: ["cart", userId],
    queryFn: () => (userId ? getCart() : Promise.resolve(null)),
    enabled: !!userId,
  });

export const useAddToCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addItemToCart,
    onMutate: async (newItem) => {
      await queryClient.cancelQueries({ queryKey: ["cart"] });
      const previousCart = queryClient.getQueryData(["cart"]);

      queryClient.setQueryData(["cart"], (oldCart: Cart) => {
        return {
          ...oldCart,
          items: [...oldCart.items, newItem],
        };
      });

      return { previousCart };
    },
    onError: (_error, _newItem, context) => {
      queryClient.setQueryData(["cart"], context?.previousCart);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};

export const useRemoveFromCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeItemFromCart,
    onMutate: async (itemId) => {
      await queryClient.cancelQueries({ queryKey: ["cart"] });
      const previousCart = queryClient.getQueryData(["cart"]);

      queryClient.setQueryData(["cart"], (oldCart: Cart) => {
        return {
          ...oldCart,
          items: oldCart.items.filter((item) => item.productId._id !== itemId),
        };
      });

      return { previousCart };
    },
    onError: (_error, _itemId, context) => {
      queryClient.setQueryData(["cart"], context?.previousCart);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};

export const useSyncCart = () => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: async () => {
      const updatedCart = await syncCartAfterLogin(dispatch);
      queryClient.setQueryData(["cart"], updatedCart);
    },
    onError: (error) => {
      console.log("sync cart failed", error);
    },
  });
};
