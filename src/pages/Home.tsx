import withSEO from "@/components/commons/withSEO";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/interfaces/Cart";
import { addItemToCart } from "@/redux/cart/cartSlice";
import { useAppDispatch } from "@/store/hooks";

const fakeProducts = [
  {
    productId: {
      _id: "67bce82fefd8535953d996e2",
      name: "Pet Shampoo",
      price: 15.99,
      imgUrl: "/images/shampoo.jpg",
    },
    quantity: 1,
  },
  {
    productId: {
      _id: "67bce82fefd8535953d996e3",
      name: "Pet Grooming Scissors",
      price: 25.99,
      imgUrl: "/images/scissors.jpg",
    },
    quantity: 1,
  },
];

const HomeComponent = () => {
  const dispatch = useAppDispatch();

  const addToCart = (product: CartItem) => {
    dispatch(addItemToCart(product));
  };

  return (
    <div>
      <h1 className="">Welcome to Pawlish!</h1>
      {fakeProducts.map((product) => (
        <div key={product.productId._id}>
          <img src={product.productId.imgUrl} alt={product.productId.name} />
          <h3>{product.productId.name}</h3>
          <p>Price: ${product.productId.price}</p>
          <Button onClick={() => addToCart(product)}>Add to Cart</Button>
        </div>
      ))}
    </div>
  );
};

const Home = withSEO(HomeComponent, {
  title: "Pawlish | Pet Spa & Grooming Services",
  description:
    "Welcome to Pawlish! We offer professional pet spa and grooming services for dogs, cats, and other pets. Keep your furry friends clean, healthy, and happy with our top-notch care.",
});

export default Home;
