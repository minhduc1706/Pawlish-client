import type React from "react"
import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Button } from "../../../components/ui/button"
import { getProductById } from "../../../api/productApi"
import type { Product } from "../../../interfaces/Product"
import { addItemToCart } from "../../../redux/cart/cartSlice"
import type { CartItem } from "../../../interfaces/Cart"
import { ChevronLeft, Heart, Minus, Plus, ShoppingCart, Star, Truck } from "lucide-react"

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [product, setProduct] = useState<Product | null>(null)
  const [quantity, setQuantity] = useState<number>(1)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [isZoomed, setIsZoomed] = useState<boolean>(false)
  const [activeTab, setActiveTab] = useState<"description" | "reviews">("description")

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (!id) return

      try {
        setIsLoading(true)
        const data = await getProductById(id)
        console.log("Product details:", data)
        setProduct(data)
        setError(null)
      } catch (err) {
        console.error("Error fetching product details:", err)
        setError("Failed to load product details")
      } finally {
        setIsLoading(false)
      }
    }

    fetchProductDetails()
  }, [id])

  const handleImageClick = () => {
    setIsZoomed(!isZoomed)
  }

  const handleCloseZoom = (e: React.MouseEvent) => {
    if (isZoomed) {
      e.stopPropagation()
      setIsZoomed(false)
    }
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (value > 0 && product && value <= product.stock_quantity) {
      setQuantity(value)
    }
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    if (product && quantity < product.stock_quantity) {
      setQuantity(quantity + 1)
    }
  }

  const addToCart = () => {
    if (!product) return

    const cartItem: CartItem = {
      productId: {
        _id: product._id,
        name: product.name,
        price: Number(product.price),
        imgUrl: product.imgUrl,
      },
      quantity: quantity,
    }

    dispatch(addItemToCart(cartItem))
  }

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      maximumFractionDigits: 0,
    }).format(price)
  }

  const getStockStatusLabel = () => {
    if (!product) return ""

    if (product.stock_quantity <= 0) {
      return (
        <span className="text-red-600 font-medium flex items-center">
          <div className="w-3 h-3 rounded-full bg-red-600 mr-2"></div>
          Hết hàng
        </span>
      )
    } else if (product.stock_quantity <= 5) {
      return (
        <span className="text-amber-600 font-medium flex items-center">
          <div className="w-3 h-3 rounded-full bg-amber-600 mr-2"></div>
          Sắp hết hàng - Chỉ còn {product.stock_quantity} sản phẩm
        </span>
      )
    } else {
      return (
        <span className="text-green-600 font-medium flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-600 mr-2"></div>
          Còn hàng
        </span>
      )
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600">Đang tải thông tin sản phẩm...</p>
        </div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="text-center max-w-md px-4">
          <div className="text-red-600 text-lg font-medium mb-4">Không tìm thấy sản phẩm</div>
          <p className="text-gray-600 mb-6">{error || "Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã bị xóa."}</p>
          <Button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300"
          >
            Quay lại
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-blue-600 transition-colors">
            Trang chủ
          </Link>
          <span className="mx-2">/</span>
          <Link to="/shop/products" className="hover:text-blue-600 transition-colors">
            Sản phẩm
          </Link>
          <span className="mx-2">/</span>
          <span className="text-blue-600 font-medium">{product.name}</span>
        </div>

        {/* Back button (mobile only) */}
        <button onClick={() => navigate(-1)} className="flex items-center text-blue-600 mb-4 md:hidden">
          <ChevronLeft className="h-5 w-5 mr-1" />
          Quay lại
        </button>

        {/* Product Detail Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl overflow-hidden shadow-md relative">
              <img
                src={product.imgUrl || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-auto object-contain aspect-square cursor-zoom-in"
                onClick={handleImageClick}
                onError={(e) => {
                  // Fallback when image fails to load
                  ;(e.target as HTMLImageElement).src = "https://via.placeholder.com/400x400?text=No+Image+Available"
                }}
              />
              {product.category_id && (
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.category_id.name}
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-blue-900">{product.name}</h1>

            <div className="flex items-center space-x-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${star <= 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="text-gray-500">(12 đánh giá)</span>
            </div>

            <div className="text-3xl font-bold text-blue-600">{formatPrice(Number(product.price))}</div>

            <div className="border-t border-b border-gray-200 py-6">
              <div className="flex items-center text-gray-600 mb-4">
                <Truck className="h-5 w-5 mr-2" />
                <span>Giao hàng miễn phí cho đơn hàng trên 500.000đ</span>
              </div>

              <div className="flex items-center">
                <span className="text-gray-700 mr-4">Tình trạng:</span>
                {getStockStatusLabel()}
              </div>
            </div>

            {product.stock_quantity > 0 && (
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-gray-700 w-24">Số lượng:</span>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={decreaseQuantity}
                      className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <input
                      type="number"
                      min="1"
                      max={product.stock_quantity}
                      value={quantity}
                      onChange={handleQuantityChange}
                      className="w-12 text-center border-l border-r border-gray-300 py-2 focus:outline-none"
                    />
                    <button
                      onClick={increaseQuantity}
                      className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                      disabled={quantity >= product.stock_quantity}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button
                    className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center justify-center shadow-md"
                    onClick={addToCart}
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Thêm vào giỏ hàng
                  </Button>
                  <Button
                    className="px-4 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300 flex items-center justify-center"
                    variant="outline"
                  >
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            )}

            {/* Product Description */}
            <div className="bg-blue-50 rounded-xl p-4 space-y-2">
              <h3 className="font-semibold text-blue-900">Mô tả sản phẩm:</h3>
              <p className="text-gray-700">{product.description}</p>
            </div>

            {/* Product Meta */}
            <div className="text-sm text-gray-500 space-y-1">
              <div className="flex">
                <span className="w-24">Mã sản phẩm:</span>
                <span className="text-gray-700">{product._id}</span>
              </div>
              {product.category_id && (
                <div className="flex">
                  <span className="w-24">Danh mục:</span>
                  <Link to={`/shop/category/${product.category_id._id}`} className="text-blue-600 hover:underline">
                    {product.category_id.name}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mb-16">
          <div className="border-b border-gray-200 mb-6">
            <div className="flex space-x-8">
              <button
                className={`py-4 font-medium text-lg relative ${
                  activeTab === "description" ? "text-blue-600" : "text-gray-500 hover:text-blue-600"
                }`}
                onClick={() => setActiveTab("description")}
              >
                Chi tiết sản phẩm
                {activeTab === "description" && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>
                )}
              </button>
              <button
                className={`py-4 font-medium text-lg relative ${
                  activeTab === "reviews" ? "text-blue-600" : "text-gray-500 hover:text-blue-600"
                }`}
                onClick={() => setActiveTab("reviews")}
              >
                Đánh giá (12)
                {activeTab === "reviews" && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>}
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            {activeTab === "description" ? (
              <div className="prose max-w-none">
                <p className="mb-4">
                  {product.description ||
                    `Sản phẩm ${product.name} là một trong những sản phẩm chăm sóc thú cưng cao cấp nhất hiện nay. Được thiết kế đặc biệt để đáp ứng nhu cầu của các thú cưng và chủ nuôi, sản phẩm này mang đến trải nghiệm tuyệt vời và an toàn.`}
                </p>
                <p className="mb-4">
                  Với chất liệu cao cấp, an toàn cho sức khỏe thú cưng, sản phẩm này là lựa chọn hoàn hảo cho những
                  người yêu thú cưng muốn mang đến cho thú cưng của mình những điều tốt nhất.
                </p>
                <p className="mb-4">
                  Sản phẩm dễ dàng sử dụng, vệ sinh và bảo quản. Phù hợp với mọi giống chó, mèo và các loại thú cưng
                  khác.
                </p>
                <h3 className="text-xl font-semibold text-blue-900 mt-6 mb-3">Hướng dẫn sử dụng:</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Làm sạch sản phẩm trước khi sử dụng</li>
                  <li>Đặt ở vị trí phù hợp, tránh ánh nắng trực tiếp</li>
                  <li>Vệ sinh định kỳ để đảm bảo an toàn cho thú cưng</li>
                </ol>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Đánh giá từ khách hàng</h3>
                    <div className="flex items-center mt-1">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-5 w-5 ${star <= 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-500">4.0/5 (12 đánh giá)</span>
                    </div>
                  </div>
                  <Button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300">
                    Viết đánh giá
                  </Button>
                </div>

                {/* Sample reviews */}
                <div className="space-y-4">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="border-b border-gray-200 pb-4 last:border-0">
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-blue-600 font-bold">
                              {review === 1 ? "NT" : review === 2 ? "HL" : "VT"}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-medium">
                              {review === 1 ? "Nguyễn Thảo" : review === 2 ? "Hoàng Linh" : "Vũ Tùng"}
                            </h4>
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`h-4 w-4 ${
                                    star <= (review === 3 ? 3 : 5) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-gray-500 text-sm">
                          {review === 1 ? "12/08/2023" : review === 2 ? "05/07/2023" : "22/06/2023"}
                        </span>
                      </div>
                      <p className="text-gray-700">
                        {review === 1
                          ? "Sản phẩm rất tốt, chất lượng cao. Bé nhà mình rất thích, sẽ mua thêm trong tương lai."
                          : review === 2
                            ? "Đóng gói cẩn thận, giao hàng nhanh. Sản phẩm đúng như mô tả, rất hài lòng."
                            : "Sản phẩm tạm ổn, nhưng giá hơi cao so với chất lượng. Cần cải thiện thêm."}
                      </p>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-full py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-all duration-300"
                  variant="outline"
                >
                  Xem thêm đánh giá
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Image Zoom Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={handleCloseZoom}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300 transition-colors"
              onClick={handleCloseZoom}
            >
              ×
            </button>
            <img
              src={product.imgUrl || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-auto max-h-[80vh] object-contain"
              onError={(e) => {
                ;(e.target as HTMLImageElement).src = "https://via.placeholder.com/800x800?text=No+Image+Available"
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetail

