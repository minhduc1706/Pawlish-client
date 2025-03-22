import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DogProducts.css';
import RoyalCaninImage from '../assets/royal-canin-mini-adult.jpg';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/slices/cartSlice';
import { toast } from 'sonner';

interface DogProduct {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  discountPercent?: number;
  category: string;
  rating: number;
  inStock: boolean;
}

interface CategoryFilter {
  id: string;
  name: string;
  count: number;
}

const DogProducts: React.FC = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<DogProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [sortOption, setSortOption] = useState<string>('default');
  const [priceRange, setPriceRange] = useState<number>(1000000);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 8;

  const categories: CategoryFilter[] = [
    { id: 'all', name: 'All Products', count: 100 },
    { id: 'food', name: 'Food & Nutrition', count: 40 },
    { id: 'dry-food', name: 'Dry Food', count: 6 },
    { id: 'wet-food', name: 'Wet Food & Gravy', count: 5 },
    { id: 'treats', name: 'Treats', count: 16 },
    { id: 'medicine', name: 'Medical Support Food', count: 1 },
    { id: 'hygiene', name: 'Hygiene Products', count: 15 }
  ];

  useEffect(() => {
    const mockData: DogProduct[] = [
      {
        id: 1,
        name: 'Royal Canin Mini Adult 8kg',
        price: 38,
        originalPrice: 42,
        image: RoyalCaninImage,
        category: 'dry-food',
        rating: 4.8,
        inStock: true,
        discountPercent: 6
      },
      {
        id: 2,
        name: 'Monge Fresh Beef Pate 100g',
        price: 1.5,
        image: '/images/dog/food/monge-pate.jpg',
        category: 'wet-food',
        rating: 4.5,
        inStock: true
      },
      {
        id: 3,
        name: 'Vegebrand Orgo Fish Treats 100g',
        price: 2,
        image: '/images/dog/treats/orgo-fish.jpg',
        category: 'treats',
        rating: 4.6,
        inStock: true
      },
      {
        id: 4,
        name: 'Bio Care Anti Flea Shampoo 200ml',
        price: 5,
        originalPrice: 6.5,
        image: '/images/dog/hygiene/bio-care.jpg',
        category: 'hygiene',
        rating: 4.7,
        inStock: true,
        discountPercent: 20
      },
      {
        id: 5,
        name: 'Bioline Fresh Deodorizer 250ml',
        price: 3.5,
        image: '/images/dog/hygiene/bioline-fresh.jpg',
        category: 'hygiene',
        rating: 4.4,
        inStock: true
      },
      {
        id: 6,
        name: 'Royal Canin Recovery 400g',
        price: 7.5,
        image: '/images/dog/food/royal-canin-recovery.jpg',
        category: 'medicine',
        rating: 4.9,
        inStock: true
      },
      {
        id: 7,
        name: 'Royal Canin Maxi Adult 15kg',
        price: 1450000,
        originalPrice: 1550000,
        image: '/images/dog/food/royal-canin-maxi.jpg',
        category: 'dry-food',
        rating: 4.7,
        inStock: true,
        discountPercent: 6
      },
      {
        id: 8,
        name: 'Pate Monge Fresh gà tây 100g',
        price: 35000,
        image: '/images/dog/food/monge-pate-turkey.jpg',
        category: 'wet-food',
        rating: 4.4,
        inStock: true
      },
      {
        id: 9,
        name: 'Bánh thưởng Vegebrand Orgo Beef 100g',
        price: 45000,
        image: '/images/dog/treats/orgo-beef.jpg',
        category: 'treats',
        rating: 4.5,
        inStock: true
      },
      {
        id: 10,
        name: 'Sữa tắm dưỡng lông Bio Silk 300ml',
        price: 180000,
        originalPrice: 200000,
        image: '/images/dog/hygiene/bio-silk.jpg',
        category: 'hygiene',
        rating: 4.8,
        inStock: true,
        discountPercent: 10
      },
      {
        id: 11,
        name: 'Royal Canin Medium Adult 10kg',
        price: 990000,
        image: '/images/dog/food/royal-canin-medium.jpg',
        category: 'dry-food',
        rating: 4.6,
        inStock: true
      },
      {
        id: 12,
        name: 'Pate Monge Fresh cá hồi 100g',
        price: 35000,
        image: '/images/dog/food/monge-pate-salmon.jpg',
        category: 'wet-food',
        rating: 4.3,
        inStock: true
      },
      {
        id: 13,
        name: 'Bánh thưởng Vegebrand Orgo Chicken 100g',
        price: 45000,
        image: '/images/dog/treats/orgo-chicken.jpg',
        category: 'treats',
        rating: 4.7,
        inStock: true
      },
      {
        id: 14,
        name: 'Lược chải lông cho chó mèo',
        price: 95000,
        originalPrice: 120000,
        image: '/images/dog/hygiene/pet-brush.jpg',
        category: 'hygiene',
        rating: 4.5,
        inStock: true,
        discountPercent: 21
      },
      {
        id: 15,
        name: 'Royal Canin Puppy 2kg',
        price: 390000,
        image: '/images/dog/food/royal-canin-puppy.jpg',
        category: 'dry-food',
        rating: 4.9,
        inStock: true
      }
    ];

    setTimeout(() => {
      setProducts(mockData);
      setLoading(false);
    }, 800);
  }, []);

  const handlePriceRangeChange = (value: number) => {
    setPriceRange(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string) => {
    setCategoryFilter(category);
    setCurrentPage(1);
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
    setCurrentPage(1);
  };

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2
    }).format(price);
  };

  const filteredProducts = (): DogProduct[] => {
    let result = [...products];
    
    if (categoryFilter !== 'all') {
      result = result.filter(item => item.category === categoryFilter);
    }
    
    result = result.filter(item => item.price <= priceRange);
    
    switch (sortOption) {
      case 'popularity':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'latest':
        result.sort((a, b) => b.id - a.id);
        break;
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    
    return result;
  };

  const paginatedProducts = () => {
    const filtered = filteredProducts();
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    return filtered.slice(indexOfFirstProduct, indexOfLastProduct);
  };

  const totalPages = Math.ceil(filteredProducts().length / productsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (product: DogProduct) => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    }));
    toast.success('Product added to cart!');
  };

  return (
    <div className="dog-products-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Home</Link> &gt; 
        <span> For Dogs</span>
      </div>

      <div className="page-container">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="sidebar-block price-filter">
            <h3 className="sidebar-title">Filter by Price</h3>
            <div className="price-range-inputs">
              <div className="price-slider">
                <div 
                  className="slider-track"
                  style={{
                    width: `${(priceRange / 1000) * 100}%`
                  }}
                ></div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="10"
                  value={priceRange}
                  onChange={(e) => handlePriceRangeChange(Number(e.target.value))}
                />
              </div>
              <div className="price-display">
                <div>Max Price: <span>{formatPrice(priceRange)}</span></div>
              </div>
            </div>
          </div>

          <div className="sidebar-block categories">
            <h3 className="sidebar-title">Product Categories</h3>
            <ul className="category-list">
              {categories.map(category => (
                <li 
                  key={category.id} 
                  className={categoryFilter === category.id ? 'active' : ''}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  {category.name} {category.count > 0 && <span className="count">({category.count})</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main content */}
        <div className="main-content">
          <div className="products-header">
            <div className="results-count">
              Showing {filteredProducts().length} results
            </div>
            <select 
              className="sort-select"
              value={sortOption}
              onChange={(e) => handleSortChange(e.target.value)}
            >
              <option value="default">Default sorting</option>
              <option value="popularity">Sort by popularity</option>
              <option value="rating">Sort by average rating</option>
              <option value="latest">Sort by latest</option>
              <option value="price-asc">Sort by price: low to high</option>
              <option value="price-desc">Sort by price: high to low</option>
            </select>
          </div>

          {loading ? (
            <div className="loading">
              <div className="loading-spinner"></div>
            </div>
          ) : (
            <>
              <div className="products-grid">
                {paginatedProducts().map(product => (
                  <div key={product.id} className="product-card">
                    <div className="product-image-container">
                      <Link to={`/san-pham/${product.id}`}>
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="product-image"
                        />
                      </Link>
                      {product.discountPercent && (
                        <div className="discount-badge">-{product.discountPercent}%</div>
                      )}
                      <div className="product-actions">
                        <button 
                          className="add-to-cart"
                          onClick={() => handleAddToCart(product)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <div className="product-info">
                      <Link to={`/san-pham/${product.id}`} className="product-name">
                        <h3>{product.name}</h3>
                      </Link>
                      <div className="price-container">
                        <span className="product-price">
                          {formatPrice(product.price)}
                        </span>
                        {product.originalPrice && (
                          <span className="original-price">
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pagination">
                <button
                  className="pagination-button"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  ←
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
                  <button
                    key={pageNumber}
                    className={`pagination-button ${currentPage === pageNumber ? 'active' : ''}`}
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                ))}
                <button
                  className="pagination-button"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  →
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DogProducts; 