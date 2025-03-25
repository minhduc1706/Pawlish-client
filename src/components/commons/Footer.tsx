import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Pawlish Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Pawlish</h2>
          <p className="text-gray-400 mb-6">
            Pawlish was founded with the desire to bring customers professionalism, reliability, and elegance while providing the best experience for our pets.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin size={18} />
              <span>Thu Duc District 9, Ho Chi Minh City</span>
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
          <h2 className="text-xl font-bold mb-4">SERVICES</h2>
          <ul className="space-y-2 text-gray-400">
            <li>5-Star Pet Spa</li>
            <li>In-Home Pet Bathing Service</li>
            <li>In-Home Pet Grooming and Styling</li>
            <li>5-Star Pet Hotel</li>
            <li>Pet Products and Accessories</li>
          </ul>
        </div>

        {/* Home Services Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">IN-HOME PET SERVICES</h2>
          <ul className="space-y-2 text-gray-400">
            <li>Pet Services in District 1</li>
            <li>Pet Services in District 2</li>
            <li>Pet Services in District 3</li>
            <li>Pet Services in District 4</li>
            <li>Pet Services in District 7</li>
            <li>Pet Services in Thu Duc District</li>
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