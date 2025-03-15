import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Pawlish Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Pawlish</h2>
          <p className="text-gray-400 mb-6">
            Pawlish ra đời với mong muốn mang lại cho khách hàng sự chuyên nghiệp, uy tín mang nét đẹp hoa mỹ mà chúng tôi đem lại sự trải nghiệm tốt nhất cho thú cưng của chúng ta.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin size={18} />
              <span>Thu duc Quan 9, TP HCM</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Phone size={18} />
              <span>Hotline: 0898 520 760</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Mail size={18} />
              <span>Hi.pawlish@gmail.com</span>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <Facebook className="cursor-pointer hover:text-blue-400 text-gray-400" />
            <Instagram className="cursor-pointer hover:text-pink-400 text-gray-400" />
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">DỊCH VỤ</h2>
          <ul className="space-y-2 text-gray-400">
            <li>Spa Thú Cưng Chuẩn 5 Sao</li>
            <li>Dịch Vụ Tắm Thú Cưng Tại Nhà</li>
            <li>Dịch Vụ Cắt Tỉa Lông Và Tạo Kiểu Tại Nhà</li>
            <li>Khách Sạn Thú Cưng Chuẩn 5 Sao</li>
            <li>Cung Cấp Sản Phẩm, Phụ Kiện</li>
          </ul>
        </div>

        {/* Home Services Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">DỊCH VỤ THÚ CƯNG TẠI NHÀ</h2>
          <ul className="space-y-2 text-gray-400">
            <li>Dịch Vụ Thú Cưng Tại Nhà Quận 1</li>
            <li>Dịch Vụ Thú Cưng Tại Nhà Quận 2</li>
            <li>Dịch Vụ Thú Cưng Tại Nhà Quận 3</li>
            <li>Dịch Vụ Thú Cưng Tại Nhà Quận 4</li>
            <li>Dịch Vụ Thú Cưng Tại Nhà Quận 7</li>
            <li>Dịch Vụ Thú Cưng Tại Nhà Quận Thủ Đức</li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 All rights reserved</p>
          <p className="text-gray-400 flex items-center gap-1">
            Made with <span className="text-red-500">❤</span> by Brave Cat
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;