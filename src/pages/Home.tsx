import withSEO from "@/components/commons/withSEO";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/interfaces/Cart";
import { useProducts } from "@/queries/useProduct";
import { addItemToCart } from "@/redux/cart/cartSlice";
import { useAppDispatch } from "@/store/hooks";

const HomeComponent = () => {
  const dispatch = useAppDispatch();
  const { data: products, isLoading, error } = useProducts();

  const addToCart = (product: CartItem) => {
    dispatch(addItemToCart(product));
  };

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products!</p>;

  return (
    <div>
      <h1>Welcome to Pawlish!</h1>
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product) => (
          <div key={product._id}>
            <img src={product.imgUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <Button
              onClick={() => addToCart({ productId: product, quantity: 1 })}
            >
              Add to Cart
            </Button>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

const Home = withSEO(HomeComponent, {
  title: "Pawlish | Pet Spa & Grooming Services",
  description:
    "Welcome to Pawlish! We offer professional pet spa and grooming services for dogs, cats, and other pets. Keep your furry friends clean, healthy, and happy with our top-notch care.",
});

export default Home;
