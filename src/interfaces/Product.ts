export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock_quantity: number;
  imgUrl: string;
  category_id: {
    _id: string;
    name: string;
  };
  createdAt?: string;
  updatedAt?: string;
}
