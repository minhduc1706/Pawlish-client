import { useState } from "react";

const GroomingCombo3 = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    petName: "",
    petType: "",
    petBreed: "",
    age: "",
    weight: "",
    date: "",
    appointmentDate: "",
    service: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formattedAppointmentDate = new Date(
        formData.appointmentDate
      ).toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

      const dataToSend = {
        ...formData,
        appointmentDate: formattedAppointmentDate,
      };

      const response = await fetch("http://localhost:3000/groomingRequests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error(`Lỗi: ${response.status}`);
      }

      alert("Đã gửi yêu cầu thành công!");
      setFormData({
        name: "",
        phone: "",
        address: "",
        email: "",
        petName: "",
        petType: "",
        petBreed: "",
        age: "",
        weight: "",
        date: "",
        appointmentDate: "",
        service: "",
        note: "",
      });
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu:", error);
      alert("Gửi yêu cầu thất bại! Vui lòng thử lại.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <nav className="text-sm mb-4 text-gray-500">
        <a
          href="http://localhost:5173/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Trang chủ /
        </a>{" "}
        <a
          href="http://localhost:5173/services/PromotionServicePage"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Dịch vụ Spa Thú Cưng HCM
        </a>{" "}
        / Combo 3 – Tắm Cắt Tỉa Lông
      </nav>

      <h1 className="text-[35px] font-bold mb-4">Combo 3 – Tắm Cắt Tỉa Lông</h1>

      <p className="text-[21px] mb-6">
        PAWLISH sẽ giới thiệu đến các bạn trung tâm chăm sóc thú cưng chuyên
        nghiệp với đội ngũ nhân viên dày dặn kinh nghiệm. Chúng tôi cung cấp
        Combo 3 – Tắm cắt tỉa lông để thú cưng của bạn được sạch sẽ thơm tho sau
        10 bước.
      </p>

      <h2 className="text-[33px] font-bold mt-4 mb-2">
        COMBO 10 BƯỚC TẮM CẮT TỈA LÔNG
      </h2>
      <img
        src="/public/combo-3.png"
        alt="Combo 3"
        className="w-full rounded-lg mb-4"
      />

      <h2 className="text-[35px] font-bold mt-4 mb-2">
        Bảng giá Grooming tại PAWLISH
      </h2>
      <img
        src="/public/price-list.png"
        alt="Bảng giá"
        className="w-full rounded-lg mb-4"
      />

      <h2 className="text-[35px] font-bold mt-4 mb-2">
        Ưu đãi dành cho khách hàng thân thiết
      </h2>
      <img
        src="/public/special-service.png"
        alt="Ưu đãi"
        className="w-full rounded-lg mb-4"
      />

      <h2 className="text-[35px] font-bold mt-4 mb-2">
        Đưa đón khứ hồi về spa
      </h2>
      <p className="text-[21px] mb-4">
        Pet Pick Up – Dịch vụ đưa đón bé tận nơi mang tới những tiện ích siêu
        thích, nhanh chóng, an toàn và tiết kiệm thời gian đưa Pet đến Spa.
      </p>
      <img
        src="https://clownvietnam.com/wp-content/uploads/2025/02/van-chuyen-thu-cung.jpg"
        alt="Ưu đãi"
        className="w-full rounded-lg mb-4"
      />
      <p className="text-[35px] font-bold">Tìm hiểu thêm Combo:</p>
      <ul className="list-disc ml-5">
        <li className="text-[21px]">
          Combo 1:{" "}
          <a
            href="http://localhost:5173/services/Combo1"
            className="text-blue-500 underline hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tắm vệ sinh
          </a>
        </li>
        <li className="text-[21px]">
          Combo 2:{" "}
          <a
          // href="https://petservicehcm.com/spa-thu-cung/combo-cat-tia-ve-sinh"
          // className="text-blue-500 underline hover:text-blue-700"
          // target="_blank"
          // rel="noopener noreferrer"
          >
            Cắt tỉa vệ sinh
          </a>
        </li>
        <li className="text-[21px]">
          Combo 4:{" "}
          <a
            href="http://localhost:5173/services/Combo4"
            className="text-blue-500 underline hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cạo tắm vệ sinh
          </a>
        </li>
        <li className="text-[21px]">
          Combo 5:{" "}
          <a
          // // href=""
          // className="text-blue-500 underline hover:text-blue-700"
          // target="_blank"
          // rel="noopener noreferrer"
          >
            Cạo vệ sinh
          </a>
        </li>
      </ul>

      {/* Form đăng ký */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="name" className="block text-[35px] font-medium mb-2">
          Yêu cầu dịch vụ <span className="text-red-500">*</span>
        </label>
        <div>
          Vui lòng chọn 1 dịch vụ bạn đang cần để PawLish có thể chuẩn bị, và
          phục vụ các bé một cách chu đáo nhất nhé!
        </div>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded-md"
        >
          <option value="Tắm vệ sinh tại nhà">Tắm vệ sinh tại nhà</option>
          <option value="Cắt tỉa lông tại nhà">Cắt tỉa lông tại nhà </option>
          <option value="Thú y tại nhà">Thú y tại nhà</option>
          <option value="Khách sạn thú cưng">Khách sạn thú cưng</option>
          <option value="Combo tắm tháng 4 lần">Combo tắm tháng 4 lần</option>
          <option value="Combo tắm tháng 8 lần">Combo tắm tháng 8 lần</option>
          <option value="Combo 1: Tắm  sấy + Vệ sinh">
            Combo 1: Tắm sấy + vệ Sinh
          </option>
          <option value="Combo 2: Cắt tỉa + Vệ sinh">
            Combo 2: Cắt tỉa + Vệ sinh
          </option>

          <option value="Combo 3: Tắm  sấy + Vệ sinh + Cắt tỉa lông">
            Combo 3: Tắm sấy + Vệ sinh + Cắt tỉa lông
          </option>
          <option value="Combo 4: Tắm Sấy + Vệ Sinh + Cạo lông">
            Combo 4: Tắm Sấy + Vệ Sinh + Cạo lông
          </option>
        </select>
        <label htmlFor="name" className="block text-[21px] font-medium mb-2">
          Họ Tên <span className="text-red-500">*</span>
        </label>
        <input
          type="text" // Đổi thành text cho họ tên
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded-md"
          placeholder=""
        />
        <label htmlFor="name" className="block text-[21px] font-medium mb-2">
          Số điện thoại <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded-md"
          placeholder=""
        />
        <div className="flex gap-4">
          {/* Địa chỉ */}
          <div className="w-1/2">
            <label
              htmlFor="address"
              className="block text-[21px] font-medium mb-2 whitespace-nowrap"
            >
              Địa chỉ <span className="text-red-500">*</span>
            </label>
            <input
              id="address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded-md"
              placeholder="Nhập địa chỉ"
            />
          </div>

          {/* Email */}
          <div className="w-1/2">
            <label
              htmlFor="email"
              className="block text-[21px] font-medium mb-2 whitespace-nowrap"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded-md"
              placeholder="Nhập email"
            />
          </div>
        </div>

        <label htmlFor="name" className="block text-[21px] font-medium mb-2">
          Ngày đặt lịch<span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          name="appointmentDate"
          value={formData.appointmentDate}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded-md"
          placeholder=""
        />
        <label htmlFor="name" className="block text-[21px] font-medium mb-2">
          Tên thú cưng<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="petName"
          value={formData.petName}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded-md"
          placeholder=""
        />
        <label htmlFor="name" className="block text-[21px] font-medium mb-2">
          Loài<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="petType"
          value={formData.petType}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded-md"
          placeholder=""
        />
        <label htmlFor="name" className="block text-[21px] font-medium mb-2">
          Thuộc giống<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="petBreed"
          value={formData.petBreed}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded-md"
          placeholder=""
        />
        <div className="flex gap-4">
          {/* Tuổi của thú cưng */}
          <div className="w-1/2">
            <label htmlFor="age" className="block text-[21px] font-medium mb-2">
              Tuổi của thú cưng<span className="text-red-500">*</span>
            </label>
            <input
              id="age"
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded-md"
              placeholder=""
            />
          </div>

          {/* Trọng lượng */}
          <div className="w-1/2">
            <label
              htmlFor="weight"
              className="block text-[21px] font-medium mb-2"
            >
              Trọng lượng (kg)<span className="text-red-500">*</span>
            </label>
            <input
              id="weight"
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded-md"
              placeholder=""
            />
          </div>
        </div>

        <label htmlFor="name" className="block text-[21px] font-medium mb-2">
          Ghi chú<span className="text-red-500">*</span>
        </label>
        <textarea
          name="note"
          value={formData.note}
          onChange={handleChange}
          rows={3}
          className="w-full border p-2 rounded-md"
          placeholder="Nhập một vài mô tả về tình trạng của bé để các chuyên viên có thể hỗ trợ bạn tốt nhất."
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Đăng Ký Dịch Vụ
        </button>
      </form>
    </div>
  );
};

export default GroomingCombo3;
