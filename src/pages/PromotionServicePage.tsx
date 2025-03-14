import React, { useState } from "react";

const PromotionServicePage = () => {
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

      const response = await fetch(
        "http://localhost:3000/promotionServiceRequests",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

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
      {/* Breadcrumb */}
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
          Dịch vụ Spa Thú Cưng HCM – Chăm sóc toàn diện cho Boss yêu
        </a>{" "}
        / Ưu Đãi PAWLISH
      </nav>

      {/* Header */}
      <h1 className="text-[35px] font-bold mb-2">Ưu Đãi PAWLISH</h1>

      {/* Giới thiệu dịch vụ */}

      <h2 className="text-[35px] font-bold mb-2">
        Giới thiệu dịch vụ – ưu đãi PAWLISH
      </h2>

      <div>
        <p className="mb-2">
          PAWLISH giới thiệu đến khách hàng các dịch vụ như:
        </p>
        <ul className="list-disc ml-5">
          <li className="mb-2">Dịch vụ chăm sóc thú cưng tại spa và tại nhà</li>
          <li className="mb-2">Khách sạn thú cưng</li>
          <li className="mb-2">
            Pet shop: Cung cấp các dòng sản phẩm thú cưng
          </li>
          <li className="mb-2">Tiêm vaccine tại spa và tại nhà</li>
          <li className="mb-2">Dịch vụ dắt chó đi dạo</li>
        </ul>
      </div>

      <img
        src="/public/service-info.png"
        alt="Giới thiệu dịch vụ"
        className="w-full rounded-lg mt-4"
      />

      <div>
        <p className="mb-2">Với các ưu đãi PAWLISH hấp dẫn như:</p>
        <ul className="list-disc ml-5">
          <li className="mb-2">
            Chương trình tích điểm dành cho khách hàng sử dụng dịch vụ spa thú
            cưng. Đủ 6 ticks tặng 1 combo tắm vệ sinh.
          </li>
          <li className="mb-2">
            Chương trình chiết khấu sản phẩm 3%, 5%, 10% dựa trên số điểm mà quý
            khách đã mua hàng ở pet shop PAWLISH.
          </li>
          <li className="mb-2">
            Ưu đãi khi sử dụng dịch vụ pet hotel tại PAWLISH: gửi từ 5 ngày giảm
            50% phí tắm vệ sinh, gửi từ 7 ngày tặng tắm vệ sinh, giảm 50.000đ
            khi gửi bé thứ 2, chiết khấu lên đến 15% cho khách gửi dài hạn,…
          </li>
          <li className="mb-2">
            Nhiều chương trình sale diễn ra hàng tháng tại PAWLISH.
          </li>
          <li className="mb-2">Đặc biệt PAWLISH đưa đón thú cưng miễn phí </li>
        </ul>
      </div>

      <h2 className="text-[35px] font-bold mb-2">
        Ưu đãi đặc biệt của PAWLISH – Khách tháng
      </h2>

      <div>
        <p className="mb-2">
          PAWLISH cung cấp 3 gói tháng Mini Basic, Basic, Premium với các ưu đãi
          đặc biệt cho khách tháng của PAWLISH:
        </p>
        <ul className="list-disc ml-5">
          <li className="mb-2">Chiết khấu lên đến 10% giá dịch vụ.</li>
          <li className="mb-2">Đưa đón thú cưng tận nhà</li>
          <li className="mb-2">Tặng cắt tỉa lông.</li>
          <li className="mb-2">
            Nhiều chương trình sale diễn ra hàng tháng tại PAWLISH.
          </li>
          <li className="mb-2">
            Sử dụng dịch vụ pet hotel với chiết khấu lên đến 50%.
          </li>
          <li className="mb-2">
            Giảm lên đến 5% khi mua sản phẩm thú cưng tại pet shop.
          </li>
          <li className="mb-2">
            Tặng xổ giun và vaccine, miễn phí tư vấn sức khỏe, theo dõi và báo
            cáo tình trạng da/ bệnh của thú cưng.
          </li>
        </ul>
      </div>
      <img
        src="/public/special-service.png"
        alt="Ưu đãi chăm sóc thú cưng"
        className="w-full rounded-lg mt-4"
      />

      <h2 className="text-[35px] font-bold mb-2">
        Ưu đãi đặc biệt – Khách tháng
      </h2>
      <ul className="list-disc ml-5 text-[20px] text-gray-700">
        <li>Chiết khấu lên đến 10% giá dịch vụ</li>
        <li>Đưa đón thú cưng miễn phí khu vực HCM</li>
        <li>Tặng cắt tỉa lông</li>
        <li>Chiết khấu 50% dịch vụ pet hotel</li>
        <li>Giảm 5% khi mua sản phẩm tại pet shop</li>
        <li>Miễn phí xổ giun, vaccine, tư vấn sức khỏe</li>
      </ul>

      <section className="mb-6">
        <h2 className="text-[35px] font-bold mb-2">
          PAWLISH – Thông tin liên hệ
        </h2>
        <div className="text-[20px]">
          Hãy liên hệ ngay vớiPAWLISH qua thông tin bên dưới:{" "}
        </div>
        <p className="text-[17px] text-gray-700">Hotline 24/7: 0898 520 760</p>
        <p className="text-[17px] text-gray-700">Email: pawlish@gmail.com</p>
      </section>
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
        <label htmlFor="name" className="block text-[20px] font-medium mb-2">
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
        <label htmlFor="name" className="block text-[20px] font-medium mb-2">
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
              className="block text-[20px] font-medium mb-2 whitespace-nowrap"
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
              className="block text-[20px] font-medium mb-2 whitespace-nowrap"
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

        <label htmlFor="name" className="block text-[20px] font-medium mb-2">
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
        <label htmlFor="name" className="block text-[20px] font-medium mb-2">
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
        <label htmlFor="name" className="block text-[20px] font-medium mb-2">
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
        <label htmlFor="name" className="block text-[20px] font-medium mb-2">
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
            <label htmlFor="age" className="block text-[20px] font-medium mb-2">
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
              className="block text-[20px] font-medium mb-2"
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

        <label htmlFor="name" className="block text-[20px] font-medium mb-2">
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

export default PromotionServicePage;
