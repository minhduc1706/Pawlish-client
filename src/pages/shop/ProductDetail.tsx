import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/slices/cartSlice';
import { toast } from 'sonner';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  discountPercent?: number;
  category: string;
  rating: number;
  inStock: boolean;
  description?: string;
  specifications?: { [key: string]: string };
  shortDescription?: string;
  usage?: string;
  ingredients?: string;
  benefits?: string[];
  features?: string[];
  sku?: string;
  brand?: string;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'description' | 'specifications'>('description');
  const dispatch = useDispatch();

  useEffect(() => {
    // Simulate API call to fetch product details
    const fetchProduct = async () => {
      // This would be an actual API call in production
      const mockProduct: Product = {
        id: 1,
        name: 'Royal Canin Mini Adult 8kg',
        price: 38,
        originalPrice: 42,
        image: '/images/dog/food/royal-canin-mini-adult.jpg',
        category: 'dry-food',
        rating: 4.8,
        inStock: true,
        discountPercent: 6,
        sku: 'RC-MA-8KG',
        brand: 'Royal Canin',
        shortDescription: 'Premium dry food for adult dogs under 10kg',
        description: 'Royal Canin Mini Adult is a premium dry food specially formulated for adult dogs aged 10 months to 8 years, weighing under 10kg. This product is researched and developed to meet the nutritional needs of small breed dogs.',
        usage: 'Feed according to the feeding guide printed on the packaging, adjust based on your dog\'s weight and activity level. Always ensure fresh water is available.',
        ingredients: 'Poultry protein, rice, animal fats, corn gluten, corn flour, vegetable protein, dried beetroot pulp, fish oil, soybean oil, minerals, yeast, vegetable oil.',
        benefits: [
          'Supports healthy digestion',
          'Maintains ideal weight',
          'Strengthens immune system',
          'Promotes strong teeth and bones'
        ],
        features: [
          'Modern manufacturing technology',
          'Premium ingredients',
          'Balanced nutrition formula',
          'Suitable for small breeds'
        ],
        specifications: {
          'Brand': 'Royal Canin',
          'Origin': 'France',
          'Weight': '8kg',
          'Suitable Age': '10 months - 8 years',
          'Size': 'For dogs under 10kg'
        }
      };

      setTimeout(() => {
        setProduct(mockProduct);
        setLoading(false);
      }, 500);
    };

    fetchProduct();
  }, [id]);

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2
    }).format(price);
  };

  const handleQuantityChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const getBreadcrumbByCategory = (category: string) => {
    switch (category) {
      case 'dry-food':
      case 'wet-food':
      case 'treats':
      case 'medicine':
      case 'hygiene':
        return {
          path: '/cho-cho',
          label: 'For Dogs'
        };
      case 'cat-food':
      case 'cat-treats':
      case 'cat-hygiene':
        return {
          path: '/cho-meo',
          label: 'For Cats'
        };
      default:
        return {
          path: '/phu-kien',
          label: 'Accessories'
        };
    }
  };

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity
      }));
      toast.success(`${quantity} item(s) added to cart!`);
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const breadcrumb = getBreadcrumbByCategory(product.category);

  return (
    <div className="product-detail-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> &gt;
        <Link to={breadcrumb.path}> {breadcrumb.label}</Link> &gt;
        <span> {product.name}</span>
      </div>

      <div className="product-detail-container">
        <div className="product-gallery">
          <div className="main-image">
            <img src={product.image} alt={product.name} />
            {product.discountPercent && (
              <div className="discount-badge">-{product.discountPercent}%</div>
            )}
          </div>
        </div>

        <div className="product-info">
          <h1 className="product-name">{product.name}</h1>
          
          <div className="product-meta">
            <span className="sku">SKU: {product.sku}</span>
            <span className="brand">Brand: {product.brand}</span>
          </div>

          <div className="price-container">
            <span className="current-price">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="original-price">{formatPrice(product.originalPrice)}</span>
            )}
          </div>

          <div className="short-description">
            <p>{product.shortDescription}</p>
          </div>

          <div className="stock-status">
            Status: <span className={product.inStock ? 'in-stock' : 'out-of-stock'}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          <div className="add-to-cart-section">
            <div className="quantity-controls">
              <button onClick={() => setQuantity(prev => Math.max(1, prev - 1))}>-</button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              />
              <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
            </div>
            <button 
              className="add-to-cart-btn"
              onClick={handleAddToCart}
              disabled={!product?.inStock}
            >
              {product?.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>

          <div className="product-tabs">
            <div className="tab-buttons">
              <button 
                className={activeTab === 'description' ? 'active' : ''}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button 
                className={activeTab === 'specifications' ? 'active' : ''}
                onClick={() => setActiveTab('specifications')}
              >
                Specifications
              </button>
            </div>

            <div className="tab-content">
              {activeTab === 'description' ? (
                <div className="description-content">
                  <div className="product-description">
                    <h2>Product Description</h2>
                    <p>{product.description}</p>
                  </div>

                  {product.usage && (
                    <div className="usage-section">
                      <h3>Usage Instructions</h3>
                      <p>{product.usage}</p>
                    </div>
                  )}

                  {product.ingredients && (
                    <div className="ingredients-section">
                      <h3>Ingredients</h3>
                      <p>{product.ingredients}</p>
                    </div>
                  )}

                  {product.benefits && (
                    <div className="benefits-section">
                      <h3>Key Benefits</h3>
                      <ul>
                        {product.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {product.features && (
                    <div className="features-section">
                      <h3>Key Features</h3>
                      <ul>
                        {product.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <div className="specifications-content">
                  {product.specifications && (
                    <div className="product-specifications">
                      <h2>Technical Specifications</h2>
                      <table>
                        <tbody>
                          {Object.entries(product.specifications).map(([key, value]) => (
                            <tr key={key}>
                              <td>{key}</td>
                              <td>{value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <button 
        className="scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
    </div>
  );
};

export default ProductDetail; 