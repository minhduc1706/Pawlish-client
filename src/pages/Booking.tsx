import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Định nghĩa kiểu dữ liệu cho các bước
interface Step {
  number: number;
  label: string;
  active: boolean;
}

// Định nghĩa kiểu dữ liệu cho dịch vụ
interface Service {
  id: number;
  name: string;
}

const Booking: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date(2025, 2, 12)); // Khởi tạo ngày 12/03/2025

  const steps: Step[] = [
    { number: 1, label: "Chọn dịch vụ", active: true },
    { number: 2, label: "Thông tin", active: false },
    { number: 3, label: "Xác nhận", active: false },
  ];

  const services: Service[] = [
    { id: 1, name: "Tắm thú cưng (Spa)" },
    { id: 2, name: "Cắt tỉa thú cưng (Grooming)" },
    { id: 3, name: "Đặt phòng khách sạn" },
    { id: 4, name: "Khám chữa bệnh" },
  ];

  const times: string[] = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30"];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Progress Bar */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          {steps.map((step) => (
            <div key={step.number} className="flex-1 flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
                  step.active ? "bg-amber-600" : "bg-gray-500"
                }`}
              >
                {step.number}
              </div>
              <span className="text-gray-600 mt-2">{step.label}</span>
            </div>
          ))}
        </div>
        <hr className="border-gray-300" />

        {/* Booking Form */}
        <div className="max-w-3xl mx-auto mt-8 flex flex-col md:flex-row gap-6">
          {/* Left Section: Image and Service Selection */}
          <div className="w-full md:w-1/2 bg-gray-900 text-white p-6 rounded-lg shadow-md">
            <img
              src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Pet Image"
              className="w-full h-64 object-cover rounded-md mb-6" // Tăng chiều cao lên h-64
            />
            <div className="mb-6">
              <label className="block text-white font-semibold mb-2 uppercase">Chủ cần</label>
              <select className="w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-600 text-lg">
                {services.map((service) => (
                  <option key={service.id} value={service.name}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-white font-semibold mb-2 uppercase">Khi nào</label>
              <select className="w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-600 text-lg">
                {times.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
            <button className="bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 text-lg">
              Tiếp theo
            </button>
          </div>

          {/* Right Section: Calendar */}
          <div className="w-full md:w-1/2">
            <div className="w-full h-full">
              <DatePicker
                selected={date}
                onChange={(newDate: Date) => setDate(newDate)}
                calendarClassName="custom-calendar"
                dayClassName={(day: Date) =>
                  day.toDateString() === new Date(2025, 2, 12).toDateString()
                    ? "bg-amber-200 rounded-md"
                    : undefined
                }
                inline // Hiển thị calendar trực tiếp
                formatWeekDay={(nameOfDay: string) => nameOfDay.charAt(0)} // Hiển thị M, T, W, ...
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3">
        <button className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Booking;