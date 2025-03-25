import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "../../../components/ui/button";
import { getProductById } from "../../../api/productApi";
import { Product } from "../../../interfaces/Product";
import { addItemToCart } from "../../../redux/cart/cartSlice";
import { CartItem } from "../../../interfaces/Cart";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (!id) return;
      
      try {
        setIsLoading(true);
        const data = await getProductById(id);
        console.log("Product details:", data);
        setProduct(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching product details:", err);
        setError("Failed to load product details");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  const handleCloseZoom = (e: React.MouseEvent) => {
    if (isZoomed) {
      e.stopPropagation();
      setIsZoomed(false);
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0 && product && value <= product.stock_quantity) {
      setQuantity(value);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (product && quantity < product.stock_quantity) {
      setQuantity(quantity + 1);
    }
  };

  const addToCart = () => {
    if (!product) return;

    const cartItem: CartItem = {
      productId: {
        _id: product._id,
        name: product.name,
        price: Number(product.price),
        imgUrl: product.imgUrl
      },
      quantity: quantity
    };

    dispatch(addItemToCart(cartItem));
  };

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2
    }).format(price);
  };

  const getStockStatusLabel = () => {
    if (!product) return "";
    
    if (product.stock_quantity <= 0) {
      return <span className="out-of-stock">Out of Stock</span>;
    } else if (product.stock_quantity <= 5) {
      return <span className="low-stock">Low Stock - Only {product.stock_quantity} left</span>;
    } else {
      return <span className="in-stock">In Stock</span>;
    }
  };

  if (isLoading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>Loading product details...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p>{error || "Product not found"}</p>
        <Button 
          className="back-button"
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span> / </span>
        <Link to="/shop/products">Products</Link>
        <span> / </span>
        <span>{product.name}</span>
      </div>

      <div className="product-detail-content">
        <div className="product-detail-image">
          <img 
            src={product.imgUrl} 
            alt={product.name} 
            onError={(e) => {
              // Fallback khi ảnh lỗi
              e.currentTarget.src = "https://via.placeholder.com/400x400?text=No+Image+Available";
            }}
            className="product-image-main"
            onClick={handleImageClick}
          />
          {product.category_id && (
            <div className="product-category-badge">
              {product.category_id.name}
            </div>
          )}
        </div>

        <div className="product-detail-info">
          <h1 className="product-detail-name">{product.name}</h1>
          
          <div className="product-detail-price">
            {formatPrice(Number(product.price))}
          </div>
          
          <div className="product-detail-stock">
            <span className="stock-label">Availability:</span>
            {getStockStatusLabel()}
          </div>
          
          <div className="product-detail-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
          
          {product.stock_quantity > 0 && (
            <div className="product-detail-actions">
              <div className="quantity-selector">
                <button 
                  className="quantity-btn" 
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <input 
                  type="number" 
                  min="1" 
                  max={product.stock_quantity}
                  value={quantity} 
                  onChange={handleQuantityChange}
                  className="quantity-input"
                />
                <button 
                  className="quantity-btn" 
                  onClick={increaseQuantity}
                  disabled={quantity >= product.stock_quantity}
                >
                  +
                </button>
              </div>
              
              <Button 
                className="add-to-cart-btn" 
                onClick={addToCart}
              >
                Add to Cart
              </Button>
            </div>
          )}
          
          <div className="product-meta">
            <div className="product-sku">
              <span>Product ID:</span> {product._id}
            </div>
            <div className="product-category">
              <span>Category:</span> {product.category_id?.name}
            </div>
          </div>
        </div>
      </div>
      
      {isZoomed && (
        <div className="image-zoom-modal" onClick={handleCloseZoom}>
          <div className="zoom-modal-content">
            <button className="zoom-close-btn" onClick={handleCloseZoom}>×</button>
            <img 
              src={product.imgUrl} 
              alt={product.name} 
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/800x800?text=No+Image+Available";
              }}
              className="zoomed-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
