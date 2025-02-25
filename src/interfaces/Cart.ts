export interface CartItem {
  productId: {
    _id: string;
    name: string;
    price: number;
    imgUrl: string;
  };
  quantity: number;
}

export interface Cart {
  user_id: string;
  items: CartItem[];
  totalPrice: number;
  createdAt?: string;
  updatedAt?: string;
}
