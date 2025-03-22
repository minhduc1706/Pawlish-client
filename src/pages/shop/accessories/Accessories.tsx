import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Accessories.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/slices/cartSlice';
import { toast } from 'sonner';

// Định nghĩa interfaces
interface Accessory {
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

const Accessories: React.FC = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Accessory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [sortOption, setSortOption] = useState<string>('default');
  const [priceRange, setPriceRange] = useState<number>(1000);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 8;
  
  // Danh sách các danh mục phụ kiện
  const categories: CategoryFilter[] = [
    { id: 'all', name: 'All Products', count: 100 },
    { id: 'collar', name: 'Collars & Leashes', count: 20 },
    { id: 'bowl', name: 'Food & Water Bowls', count: 15 },
    { id: 'bed', name: 'Beds & Mats', count: 25 },
    { id: 'carrier', name: 'Carriers & Crates', count: 10 },
    { id: 'toy', name: 'Toys', count: 30 }
  ];

  useEffect(() => {
    const mockData: Accessory[] = [
      {
        id: 1,
        name: 'Đồ chơi Bàn cào móng chữ M cho mèo',
        price: 65000,
        image: '/images/accessories/cat-scratcher.jpg',
        category: 'toys',
        rating: 4.5,
        inStock: true
      },
      {
        id: 2,
        name: 'Đồ chơi Cần câu dây thép cho mèo',
        price: 30000,
        image: '/images/accessories/cat-wand.jpg',
        category: 'toys',
        rating: 4.0,
        inStock: true
      },
      {
        id: 3,
        name: 'Dây dắt chó mèo cuốn tự động 3m',
        price: 79000,
        image: '/images/accessories/retractable-leash.jpg',
        category: 'collar-leash',
        rating: 4.8,
        inStock: true
      },
      {
        id: 4,
        name: 'Dây dắt kèm vòng cổ - 1.0',
        price: 70000,
        image: '/images/accessories/leash-collar-set.jpg',
        category: 'collar-leash',
        rating: 4.3,
        inStock: true
      },
      {
        id: 5,
        name: 'Dây dắt kèm vòng cổ 1.5',
        price: 80000,
        image: '/images/accessories/leash-collar-set-large.jpg',
        category: 'collar-leash',
        rating: 4.4,
        inStock: true
      },
      {
        id: 6,
        name: 'Dây dắt kèm yếm 1.0',
        price: 80000,
        image: '/images/accessories/harness-set.jpg',
        category: 'collar-leash',
        rating: 4.6,
        inStock: true
      },
      {
        id: 7,
        name: 'Bát ăn đôi cho chó mèo',
        price: 85000,
        originalPrice: 100000,
        image: '/images/accessories/double-bowl.jpg',
        category: 'bowls',
        rating: 4.7,
        inStock: true,
        discountPercent: 15
      },
      {
        id: 8,
        name: 'Bình uống nước tự động 2L',
        price: 180000,
        image: '/images/accessories/water-fountain.jpg',
        category: 'bowls',
        rating: 4.9,
        inStock: true
      },
      {
        id: 9,
        name: 'Nệm cho chó mèo size M',
        price: 250000,
        image: '/images/accessories/pet-bed-m.jpg',
        category: 'beds',
        rating: 4.6,
        inStock: true
      },
      {
        id: 10,
        name: 'Áo len cho chó mèo',
        price: 120000,
        originalPrice: 150000,
        image: '/images/accessories/pet-sweater.jpg',
        category: 'clothes',
        rating: 4.4,
        inStock: true,
        discountPercent: 20
      },
      {
        id: 11,
        name: 'Balo phi hành gia cho mèo',
        price: 450000,
        image: '/images/accessories/cat-backpack.jpg',
        category: 'clothes',
        rating: 4.8,
        inStock: true
      },
      {
        id: 12,
        name: 'Lược chải lông cao cấp',
        price: 160000,
        image: '/images/accessories/grooming-brush.jpg',
        category: 'grooming',
        rating: 4.7,
        inStock: true
      },
      {
        id: 13,
        name: 'Kéo cắt móng cho thú cưng',
        price: 75000,
        image: '/images/accessories/nail-clipper.jpg',
        category: 'grooming',
        rating: 4.5,
        inStock: true
      },
      {
        id: 14,
        name: 'Nệm cho chó mèo size L',
        price: 350000,
        originalPrice: 400000,
        image: '/images/accessories/pet-bed-l.jpg',
        category: 'beds',
        rating: 4.8,
        inStock: true,
        discountPercent: 12
      },
      {
        id: 15,
        name: 'Áo mưa cho chó size L',
        price: 180000,
        image: '/images/accessories/dog-raincoat.jpg',
        category: 'clothes',
        rating: 4.6,
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

  const filteredProducts = (): Accessory[] => {
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

  const handleAddToCart = (product: Accessory) => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    }));
    toast.success('Product added to cart!');
  };

  return (
    <div className="accessories-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Home</Link> &gt; 
        <span> Accessories</span>
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

export default Accessories;