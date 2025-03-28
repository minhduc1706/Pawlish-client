import { useProducts } from "@/queries/useProduct"
import type React from "react"
import { useNavigate } from "react-router-dom"
import {  PawPrintIcon as Paw, Star } from "lucide-react"
import { Scissors, Dog, House } from 'lucide-react';
import { useState } from "react";
import Chat from "@/components/commons/chat";

interface ButtonProps {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { data: products, isLoading, isError } = useProducts();
  const [isChatOpen, setIsChatOpen] = useState(false);

  const buttons: ButtonProps[] = [
    { label: "Xem Thêm", href: "/services/Grooming", variant: "primary" },
    { label: "Online Booking", href: "/booking", variant: "secondary" },
  ];

  

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans relative">
      <main className="container mx-auto px-5 pt-8 pb-16">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-50 hidden md:block"></div>
          <div className="absolute bottom-10 right-20 w-12 h-12 bg-yellow-100 rounded-full opacity-70 hidden md:block"></div>

          <div className="flex-1 text-left mb-10 md:mb-0 z-10">
            <div className="inline-flex items-center bg-blue-100 px-3 py-1 rounded-full mb-4">
              <Paw className="h-4 w-4 text-blue-600 mr-2" />
              <p className="text-blue-600 text-sm font-medium tracking-widest">
                PET SERVICE
              </p>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              DỊCH VỤ THÚ CƯNG <br />
              
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-md leading-relaxed">
              Uy tín hàng đầu tại Hồ Chí Minh với đội ngũ nhân viên chuyên
              nghiệp và tận tâm
            </p>

            <div className="flex flex-wrap gap-4">
              {buttons.map((button) => (
                <button
                  key={button.label}
                  onClick={() => navigate(button.href)}
                  className={`px-8 py-3 rounded-full transition-all duration-300 font-medium text-base shadow-md hover:shadow-lg transform hover:-translate-y-1 ${
                    button.variant === "primary"
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {button.label}
                </button>
              ))}
            </div>

            <div className="flex items-center mt-8 text-gray-600">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="ml-2 text-sm">
                Hơn 1000+ khách hàng hài lòng
              </span>
            </div>
          </div>

          <div className="relative flex-1 flex justify-end">
            <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-20 transform translate-x-10 translate-y-10"></div>
            <div className="relative bg-white p-3 rounded-2xl shadow-xl transform rotate-2 z-10">
              <img
                src="https://petservicehcm.com/wp-content/uploads/2024/08/pet-care-slide3-img-1.webp"
                alt="Pet Image"
                className="w-full max-w-sm h-auto object-cover rounded-xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
                <span className="font-bold">10+</span> Năm kinh nghiệm
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16" id="services">
  <div className="text-center mb-10">
    <h2 className="text-3xl font-bold text-blue-900 mb-4">Dịch Vụ Của Chúng Tôi</h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Chúng tôi cung cấp các dịch vụ chăm sóc thú cưng chuyên nghiệp tại nhà với đội ngũ nhân viên giàu kinh nghiệm
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Card 1: Grooming */}
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center">
      <div className="text-4xl mb-4">
        <Scissors  />
      </div>
      <h3 className="text-xl font-semibold text-blue-900 mb-2">GROOMING</h3>
      <p className="text-gray-600 text-center">
        Chúng tôi biết cách làm thế nào để thú cưng của bạn trở nên đáng yêu và cả tinh hơn. Với dịch vụ cắt tỉa lông thú cưng chúng tôi sẽ giúp các bé trở thành phiên bản hoàn hảo nhất...
      </p>
      <button
        onClick={() => navigate("/services/Grooming")}
        className="mt-4 bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-full hover:bg-gray-200 transition-all"
      >
        Xem Thêm
      </button>
    </div>

    {/* Card 2: Shop */}
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center">
      <div className="text-4xl mb-4">
        <Dog  />
      </div>
      <h3 className="text-xl font-semibold text-blue-900 mb-2">SHOP</h3>
      <p className="text-gray-600 text-center">
        Cung với hơn 3.000 khách hàng đã tin tưởng, đóng góp, chúng tôi luôn đặt ra những mục tiêu và thực thách mới. PET SERVICE cung cấp các sản phẩm, phụ kiện rất đa dạng...
      </p>
      <button
        onClick={() => navigate("/shop/products")}
        className="mt-4 bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-full hover:bg-gray-200 transition-all"
      >
        Xem Thêm
      </button>
    </div>

    {/* Card 3: Hotel */}
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center">
      <div className="text-4xl mb-4">
        <House />
      </div>
      <h3 className="text-xl font-semibold text-blue-900 mb-2">HOTEL</h3>
      <p className="text-gray-600 text-center">
        Mỗi hành động ở PET SERVICE đều bắt đầu từ sự mềm mại trao đi yêu thương. Mỗi thú cưng khi đến với chúng tôi đều được quan tâm đặc biệt bởi đội ngũ nhân viên nhiệt huyết...
      </p>
      <button
        onClick={() => navigate("/services")}
        className="mt-4 bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-full hover:bg-gray-200 transition-all"
      >
        Xem Thêm
      </button>
    </div>
  </div>
</div>

        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-blue-900">
              Sản Phẩm Nổi Bật
            </h2>
            <button
              onClick={() => navigate("shop/products")}
              className="text-blue-600 font-medium flex items-center hover:text-blue-800"
            >
              Xem tất cả
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {isLoading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600">Đang tải sản phẩm...</p>
            </div>
          )}

          {isError && (
            <div className="text-center py-12 bg-red-50 rounded-lg">
              <div className="text-red-600 text-lg font-medium">
                Lỗi khi tải sản phẩm
              </div>
              <p className="mt-2 text-red-500">Vui lòng thử lại sau</p>
            </div>
          )}

          {products && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {Array.isArray(products) &&
                products.slice(0, 3).map((product) => (
                  <div
                    key={product._id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
                    onClick={() => navigate(`/product/${product._id}`)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={product.imgUrl || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-blue-600 px-4 py-2 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                        Xem chi tiết
                      </button>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-blue-600 font-bold">
                        {typeof product.price === "number"
                          ? `${product.price.toLocaleString()} đ`
                          : product.price}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Khách Hàng Nói Gì
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Những đánh giá từ khách hàng đã sử dụng dịch vụ của chúng tôi
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-600 font-bold">TH</span>
              </div>
              <div>
                <h4 className="font-semibold">Trần Hương</h4>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "Dịch vụ rất tốt, nhân viên chuyên nghiệp và tận tâm. Bé nhà mình
              rất thích và không còn sợ hãi khi được tắm và cắt tỉa lông nữa. Sẽ
              tiếp tục sử dụng dịch vụ trong tương lai!"
            </p>
          </div>
        </div>
      </main>
      <Chat isOpen={isChatOpen} toggleChat={() => setIsChatOpen(!isChatOpen)} />
    </div>
  );
};

export default Home;
