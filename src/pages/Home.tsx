import React from "react";
import { useNavigate } from "react-router-dom";

// Định nghĩa kiểu dữ liệu cho các thành phần
interface ButtonProps {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const buttons: ButtonProps[] = [
    { label: "Xem Thêm", href: "#services", variant: "primary" },
    { label: "Online Booking", href: "/booking", variant: "secondary" },
  ];

  return (
    <div className="min-h-screen bg-white flex items-start justify-center font-sans relative">
      {/* Main Content */}
      <main className="container mx-auto px-5 pt-2 pb-4 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="flex-1 text-left mb-8 md:mb-0">
          <p className="text-blue-600 text-sm mb-2 tracking-widest">
            PET SERVICE
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4 leading-tight">
            DỊCH VỤ THÚ CƯNG <br /> TẠI NHÀ
          </h1>
          <p className="text-lg text-gray-600 mb-6 max-w-md">
            Uy tín hàng đầu tại Hồ Chí Minh
          </p>
          <div className="flex space-x-4">
            {buttons.map((button) => (
              <button
                key={button.label}
                onClick={() => navigate(button.href)}
                className={`px-6 py-2 rounded-full transition duration-300 ${
                  button.variant === "primary"
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-white border border-blue-600 text-blue-600 hover:bg-gray-100"
                }`}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex-1 flex justify-end md:mr-10">
          <img
            src="https://petservicehcm.com/wp-content/uploads/2024/08/pet-care-slide3-img-1.webp"
            alt="Pet Image"
            className="w-full max-w-xs md:max-w-sm h-auto object-cover"
          />
          
        </div>
      </main>

      {/* Chat Button */}
      <a
        href="#chat"
        className="fixed bottom-6 right-6 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 flex items-center shadow-lg"
      >
        <span>Chat với mình nhé</span>
        <span className="ml-2">😊</span>
      </a>
    </div>
  );
};

// Tùy chỉnh font chữ viết tay
const style = `
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

  .font-handwriting {
    font-family: 'Dancing Script', cursive;
  }
`;

const styleSheet = new CSSStyleSheet();
styleSheet.replaceSync(style);
document.adoptedStyleSheets = [styleSheet];

export default Home;