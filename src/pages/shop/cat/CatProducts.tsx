import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CatProducts.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/slices/cartSlice';
import { toast } from 'sonner';

interface CatProduct {
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

const CatProducts: React.FC = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<CatProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [sortOption, setSortOption] = useState<string>('default');
  const [priceRange, setPriceRange] = useState<number>(1000);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 8;

  const categories: CategoryFilter[] = [
    { id: 'all', name: 'All Products', count: 100 },
    { id: 'food', name: 'Food & Nutrition', count: 40 },
    { id: 'cat-food', name: 'Dry Food', count: 6 },
    { id: 'wet-food', name: 'Wet Food & Gravy', count: 5 },
    { id: 'treats', name: 'Treats', count: 16 },
    { id: 'medicine', name: 'Medical Support Food', count: 1 },
    { id: 'hygiene', name: 'Hygiene Products', count: 15 }
  ];

  useEffect(() => {
    const mockData: CatProduct[] = [
      {
        id: 1,
        name: 'Cát vệ sinh mix than hoạt tính LAPAW cho mèo mùi CAFE túi 15L/8kg',
        price: 130000,
        image: '/images/cat/hygiene/lapaw-cafe.jpg',
        category: 'hygiene',
        rating: 4.7,
        inStock: true
      },
      {
        id: 2,
        name: 'Cát gỗ cho Mèo CatFee 6L Hương Dừa',
        price: 135000,
        originalPrice: 145000,
        image: '/images/cat/hygiene/catfee-coconut.jpg',
        category: 'hygiene',
        rating: 4.8,
        inStock: true,
        discountPercent: 7
      },
      {
        id: 3,
        name: 'Royal Canin Indoor 27 Cho Mèo Trưởng Thành 2kg',
        price: 420000,
        image: '/images/cat/food/royal-canin-indoor.jpg',
        category: 'cat-food',
        rating: 4.9,
        inStock: true
      },
      {
        id: 4,
        name: 'Pate Whiskas vị cá thu 85g',
        price: 15000,
        image: '/images/cat/food/whiskas-mackerel.jpg',
        category: 'wet-food',
        rating: 4.5,
        inStock: true
      },
      {
        id: 5,
        name: 'Bánh thưởng Temptations vị hải sản 85g',
        price: 45000,
        originalPrice: 55000,
        image: '/images/cat/treats/temptations-seafood.jpg',
        category: 'treats',
        rating: 4.6,
        inStock: true,
        discountPercent: 18
      },
      {
        id: 6,
        name: 'Royal Canin Recovery Cho Mèo Bệnh 100g',
        price: 65000,
        image: '/images/cat/food/royal-canin-recovery-cat.jpg',
        category: 'medicine',
        rating: 4.9,
        inStock: true
      },
      {
        id: 7,
        name: 'Royal Canin Kitten 2kg',
        price: 450000,
        originalPrice: 480000,
        image: '/images/cat/food/royal-canin-kitten.jpg',
        category: 'cat-food',
        rating: 4.8,
        inStock: true,
        discountPercent: 6
      },
      {
        id: 8,
        name: 'Pate Whiskas vị cá ngừ 85g',
        price: 15000,
        image: '/images/cat/food/whiskas-tuna.jpg',
        category: 'wet-food',
        rating: 4.4,
        inStock: true
      },
      {
        id: 9,
        name: 'Bánh thưởng Temptations vị gà 85g',
        price: 45000,
        image: '/images/cat/treats/temptations-chicken.jpg',
        category: 'treats',
        rating: 4.5,
        inStock: true
      },
      {
        id: 10,
        name: 'Cát vệ sinh CATLIKE Bentonite 10L',
        price: 180000,
        originalPrice: 200000,
        image: '/images/cat/hygiene/catlike-bentonite.jpg',
        category: 'hygiene',
        rating: 4.8,
        inStock: true,
        discountPercent: 10
      },
      {
        id: 11,
        name: 'Royal Canin Persian 2kg',
        price: 460000,
        image: '/images/cat/food/royal-canin-persian.jpg',
        category: 'cat-food',
        rating: 4.6,
        inStock: true
      },
      {
        id: 12,
        name: 'Pate Whiskas vị cá hồi 85g',
        price: 15000,
        image: '/images/cat/food/whiskas-salmon.jpg',
        category: 'wet-food',
        rating: 4.3,
        inStock: true
      },
      {
        id: 13,
        name: 'Bánh thưởng Temptations vị cá hồi 85g',
        price: 45000,
        image: '/images/cat/treats/temptations-salmon.jpg',
        category: 'treats',
        rating: 4.7,
        inStock: true
      },
      {
        id: 14,
        name: 'Khay vệ sinh cho mèo có nắp đậy',
        price: 250000,
        originalPrice: 280000,
        image: '/images/cat/hygiene/litter-box.jpg',
        category: 'hygiene',
        rating: 4.5,
        inStock: true,
        discountPercent: 11
      },
      {
        id: 15,
        name: 'Royal Canin Mother & Babycat 2kg',
        price: 490000,
        image: '/images/cat/food/royal-canin-mother-babycat.jpg',
        category: 'cat-food',
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

  const filteredProducts = (): CatProduct[] => {
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

  const handleAddToCart = (product: CatProduct) => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    }));
    toast.success('Product added to cart!');
  };

  return (
    <div className="cat-products-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> &gt; 
        <span> For Cats</span>
      </div>

      <div className="page-container">
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

export default CatProducts; 