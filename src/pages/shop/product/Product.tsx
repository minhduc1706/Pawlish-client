import { Button } from "../../../components/ui/button";
import { CartItem } from "../../../interfaces/Cart";
import { getProducts } from "../../../api/productApi";
import { addItemToCart } from "../../../redux/cart/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Product.css";
import { useEffect, useState } from "react";
import { Product as ProductType } from "../../../interfaces/Product";

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';

const Product = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<number>(1000);
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [sortOption, setSortOption] = useState<SortOption>('default');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const productsPerPage = 6;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        console.log("Fetching products...");
        const data = await getProducts();
        console.log("Products fetched:", data);
        setProducts(data);
        
        // Find the highest price for the slider max value
        if (data && data.length > 0) {
          const highestPrice = Math.max(...data.map((product: ProductType) => Number(product.price)));
          const roundedMaxPrice = Math.ceil(highestPrice / 100) * 100; // Round up to nearest 100
          setMaxPrice(roundedMaxPrice);
          setPriceRange(roundedMaxPrice);
        }
        
        // Extract unique categories from products
        const uniqueCategories = extractUniqueCategories(data);
        setCategories(uniqueCategories);
        
        setError(null);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Extract unique categories from products
  const extractUniqueCategories = (products: ProductType[]) => {
    const categoriesMap = new Map();
    
    products.forEach(product => {
      if (product.category_id && product.category_id._id && product.category_id.name) {
        categoriesMap.set(product.category_id._id, {
          id: product.category_id._id,
          name: product.category_id.name
        });
      }
    });
    
    return [{ id: "all", name: "All Products" }, ...Array.from(categoriesMap.values())];
  };

  // Handle price range change
  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange(Number(e.target.value));
    setCurrentPage(1); // Reset to first page on filter change
  };

  // Handle sort option change
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value as SortOption);
    setCurrentPage(1); // Reset to first page on sort change
  };

  // Handle category change
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1); // Reset to first page on category change
  };

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter and sort products
  useEffect(() => {
    let filtered = [...products];
    
    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        product => product.category_id && product.category_id._id === selectedCategory
      );
    }
    
    // Filter by price
    filtered = filtered.filter(product => Number(product.price) <= priceRange);
    
    // Sort products
    switch (sortOption) {
      case 'price-asc':
        filtered.sort((a, b) => Number(a.price) - Number(b.price));
        break;
      case 'price-desc':
        filtered.sort((a, b) => Number(b.price) - Number(a.price));
        break;
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Sort by newest first based on createdAt timestamp if available
        filtered.sort((a, b) => {
          if (a.createdAt && b.createdAt) {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
          }
          // Fallback to _id comparison
          return b._id.localeCompare(a._id);
        });
        break;
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory, priceRange, sortOption, products]);

  // Get current products for pagination
  const getCurrentProducts = () => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    return filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  };

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Generate page numbers array
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPageItems = 5; // Maximum number of page items to show
    
    if (totalPages <= maxPageItems) {
      // If total pages is less than or equal to max items, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always include first page, last page, and current page
      // Then add pages before and after current page
      
      const leftSide = Math.floor(maxPageItems / 2);
      const rightSide = maxPageItems - leftSide - 1;
      
      // If current page is close to the beginning
      if (currentPage <= leftSide + 1) {
        for (let i = 1; i <= maxPageItems - 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
      // If current page is close to the end
      else if (currentPage >= totalPages - rightSide) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - maxPageItems + 2; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      }
      // If current page is in the middle
      else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  const addToCart = (product: ProductType) => {
    const cartItem: CartItem = {
      productId: {
        _id: product._id,
        name: product.name,
        price: Number(product.price),
        imgUrl: product.imgUrl
      },
      quantity: 1
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

  if (isLoading) return (
    <div className="loading">
      <div className="loading-spinner"></div>
      <p>Loading products...</p>
    </div>
  );
  
  if (error) return <p className="error-message">Error: {error}</p>;

  // Get current products
  const currentProducts = getCurrentProducts();
  const pageNumbers = getPageNumbers();

  return (
    <div className="product-container">
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span> / </span>
        <span>Products</span>
      </div>
      
      <h1 className="product-heading">All Products</h1>
      
      <div className="filters-sidebar">
        <div className="category-filter">
          <h2>Categories</h2>
          <ul className="category-list">
            {categories.map(category => (
              <li 
                key={category.id}
                className={selectedCategory === category.id ? 'active' : ''}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="price-filter">
          <h2>Price Range</h2>
          <div className="price-slider-container">
            <div className="price-slider">
              <div 
                className="price-slider-track"
                style={{ width: `${(priceRange / maxPrice) * 100}%` }}
              ></div>
              <input
                type="range"
                min="0"
                max={maxPrice}
                value={priceRange}
                onChange={handlePriceRangeChange}
                className="price-slider-input"
              />
            </div>
            <div className="price-range-display">
              <span>$0</span>
              <span>{formatPrice(priceRange)}</span>
            </div>
            <p className="price-filter-text">
              Max Price: <strong>{formatPrice(priceRange)}</strong>
            </p>
          </div>
        </div>
      </div>
      
      <div className="product-content">
        <div className="product-header">
          <div className="product-results">
            <p className="results-count">
              Showing {currentProducts.length} of {filteredProducts.length} products
            </p>
          </div>
          
          <div className="product-sort">
            <label htmlFor="sort-select">Sort by:</label>
            <select 
              id="sort-select"
              value={sortOption}
              onChange={handleSortChange}
              className="sort-select"
            >
              <option value="default">Default (Newest)</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
        </div>
        
        <div className="product-grid">
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <div key={product._id} className="product-card">
                <div className="product-image">
                  <Link to={`/san-pham/${product._id}`}>
                    <img 
                      src={product.imgUrl} 
                      alt={product.name} 
                      onError={(e) => {
                        // Fallback khi ảnh lỗi
                        e.currentTarget.src = "https://via.placeholder.com/200x200?text=No+Image";
                      }}
                    />
                  </Link>
                  <div className="product-category-badge">
                    {product.category_id?.name}
                  </div>
                  {product.stock_quantity <= 5 && product.stock_quantity > 0 && (
                    <div className="product-stock-badge low-stock">
                      Chỉ còn {product.stock_quantity}
                    </div>
                  )}
                  {product.stock_quantity === 0 && (
                    <div className="product-stock-badge out-of-stock">
                      Hết hàng
                    </div>
                  )}
                </div>
                <div className="product-info">
                  <Link to={`/san-pham/${product._id}`} className="product-name-link">
                    <h3>{product.name}</h3>
                  </Link>
                  <p className="product-price">{formatPrice(Number(product.price))}</p>
                  <Button
                    className="add-to-cart-btn"
                    onClick={() => addToCart(product)}
                    disabled={product.stock_quantity === 0}
                  >
                    {product.stock_quantity === 0 ? 'Hết hàng' : 'Add to Cart'}
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p className="no-products">No products available matching your filters</p>
          )}
        </div>
        
        {filteredProducts.length > 0 && totalPages > 1 && (
          <div className="pagination">
            <button 
              className="pagination-button prev"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &laquo; Prev
            </button>
            
            {pageNumbers.map((pageNumber, index) => (
              pageNumber === '...' ? (
                <span key={`ellipsis-${index}`} className="pagination-ellipsis">...</span>
              ) : (
                <button
                  key={`page-${pageNumber}`}
                  className={`pagination-button ${currentPage === pageNumber ? 'active' : ''}`}
                  onClick={() => typeof pageNumber === 'number' && handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              )
            ))}
            
            <button 
              className="pagination-button next"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next &raquo;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product; 