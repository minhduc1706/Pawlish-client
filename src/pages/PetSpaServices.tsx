import { useState } from "react";

const PetSpaServices = () => {
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
        Trang chủ / Dịch vụ Spa Thú Cưng HCM – Chăm sóc toàn diện cho Boss yêu
      </nav>
      <header className="text-[35px] font-bold mb-4">
        Dịch vụ Spa Thú Cưng HCM – Chăm sóc toàn diện cho Boss yêu
      </header>

      <p className="text-[21px] mb-6">
        Spa thú cưng ngày càng trở nên phổ biến, thể hiện sự quan tâm của chủ
        nuôi cho “boss” yêu. Giữa cuộc sống hiện đại bận rộn, việc chăm sóc toàn
        diện cho thú cưng gặp nhiều khó khăn. Thấu hiểu điều đó, các spa thú
        cưng ra đời, mang đến giải pháp chăm sóc sức khỏe và làm đẹp toàn diện
        cho thú cưng. PAWLISH tự hào là địa chỉ tin cậy, đồng hành cùng bạn
        trong hành trình chăm sóc thú cưng.
      </p>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR05jXEidlpRjNkkWW3SgFtgG92KXWGil1eQ&s"
        alt="pet 5"
        className="w-full rounded-lg mb-4"
      />

      <header className="text-[35px] font-bold mb-4">
        Các dịch vụ spa thú cưng phổ biến tại PAWLISH
      </header>
      <div>
        Pet Service cung cấp 5 combo spa để giúp bạn dễ dàng chọn dịch vụ phù
        hợp cho thú cưng:
        <li>
          <a
            href="http://localhost:5173/services/Combo1"
            className="text-blue-500 underline hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Combo 1: Tắm sấy – vệ sinh
          </a>
        </li>
        <li>Combo 2: Cắt tỉa vệ sinh</li>
        <li>
          <a
            href="http://localhost:5173/services/Combo3"
            className="text-blue-500 underline hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Combo 3: Tắm sấy – vệ sinh – cắt tỉa
          </a>
        </li>
        <li>
          <a
            href="http://localhost:5173/services/Combo4"
            className="text-blue-500 underline hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Combo 4: Cạo – tắm sấy – vệ sinh
          </a>
        </li>
        <li>Combo 5: Cạo – vệ sinh</li>
      </div>
      <img
        src="https://www.petangel.com.au/wp-content/uploads/2022/06/Pet-Angel-Blog-2022-14-1080x648.png"
        alt="pet 5"
        className="w-full rounded-lg mb-4"
      />
      <div>
        Mỗi combo dịch vụ đều được thiết kế bài bản, sử dụng sản phẩm chuyên
        dụng, an toàn. Pet Service mong muốn mang đến cho thú cưng sự chăm sóc
        tốt nhất.
      </div>

      <header className="text-[35px] font-bold mb-4">
        Các dịch vụ spa cao cấp khác
      </header>
      <img
        src="/public/service-info.png"
        alt="Ưu đãi"
        className="w-full rounded-lg mb-4"
      />

      <div>
        <p className="mb-2">
          Bên cạnh các dịch vụ spa cơ bản, Pet Service còn mang đến những trải
          nghiệm spa cao cấp như:
        </p>
        <ul className="list-disc ml-5">
          <li className="mb-2">Dịch vụ thú cưng tại nhà hàng đầu tại TPHCM.</li>
          <li className="mb-2">
            Điều trị ve rận: Sử dụng thuốc đặc trị ve rận an toàn, hiệu quả,
            giúp thú cưng của bạn luôn khỏe mạnh.
          </li>
          <li className="mb-2">Tiêm vaccine cho thú cưng.</li>
          <li className="mb-2">Pet Hotel – Khách sạn thú cưng.</li>
          <li className="mb-2">
            Pet Shop – Cung cấp sản phẩm, phụ kiện dành cho thú cưng.
          </li>
          <li className="mb-2">
            Pet Service cam kết mang đến dịch vụ spa chuyên nghiệp, tận tâm cho
            thú cưng. Chúng tôi đảm bảo sự an toàn tuyệt đối trong từng dịch vụ.
          </li>
        </ul>
        <p className="mt-4">
          Pet Service cam kết mang đến dịch vụ spa chuyên nghiệp, tận tâm cho
          thú cưng. Chúng tôi đảm bảo sự an toàn tuyệt đối trong từng dịch vụ.
        </p>
      </div>

      <header className="text-[35px] font-bold mb-4">
        Lợi ích khi sử dụng dịch vụ spa thú cưng tại PAWLISH
      </header>

      <div>
        <p className="mb-2">
          Sử dụng dịch vụ spa thú cưng chuyên nghiệp tại Pet Service mang đến
          rất nhiều lợi ích thiết thực cho cả bạn và thú cưng:
        </p>
        <ul className="list-disc ml-5">
          <li className="mb-2">Đảm bảo vệ sinh, sức khỏe cho thú cưng</li>
          <li className="mb-2">
            Nâng cao tính thẩm mỹ, giúp thú cưng tự tin, thu hút
          </li>
          <li className="mb-2">Tiết kiệm thời gian, công sức cho chủ nuôi</li>
          <li className="mb-2">
            Môi trường chuyên nghiệp, trang thiết bị hiện đại
          </li>
          <li className="mb-2">
            Đội ngũ nhân viên giàu kinh nghiệm, yêu thương động vật
          </li>
          <li className="mb-2">
            Chế độ chăm sóc đặc biệt, cam kết an toàn cho thú cưng
          </li>
        </ul>
      </div>

      <header className="text-[35px] font-bold mb-4">
        Bảng giá dịch vụ spa thú cưng tại PAWLISH
      </header>
      <img
        src="/public/price-list.png"
        alt="Ưu đãi"
        className="w-full rounded-lg mb-4"
      />

      <div>
        <p className="mb-2">Lưu ý:</p>
        <ul className="list-disc ml-5">
          <li className="mb-2">
            Bảng giá mang tính chất tham khảo. Giá chính xác sẽ được thông báo
            sau khi nhân viên tư vấn và kiểm tra tình trạng thực tế của thú
            cưng.
          </li>
          <li className="mb-2">
            Giá dịch vụ có thể thay đổi tùy thuộc vào kích thước, giống loài và
            tình trạng lông của thú cưng.
          </li>
        </ul>
      </div>

      <h2 className="text-[25px] font-bold mt-4 mb-2">Chi Phí Phát Sinh:</h2>
      <ul className="list-disc ml-5">
        <li className="mb-2">
          Phụ phí gỡ rối lông: 100.000đ – 300.000đ (tùy mức độ)
        </li>
        <li className="mb-2">
          Phụ phí Tắm nấm, ve, rận: 50.000đ – 200.000đ (tùy mức độ)
        </li>
      </ul>

      <header className="text-[35px] font-bold mb-4">
        Giải đáp các câu hỏi thường gặp về dịch vụ spa thú cưng tại PAWLISH
      </header>
      <div>
        Pet Service hiểu rằng bạn luôn có nhiều băn khoăn khi lựa chọn dịch vụ
        spa cho thú cưng. Dưới đây là giải đáp cho các câu hỏi thường gặp, giúp
        bạn an tâm hơn khi sử dụng dịch vụ:
      </div>
      <h2 className="text-[25px] font-bold mt-4 mb-2">
        1. Spa cho chó mèo có tốt không?
      </h2>
      <div>
        Chắc chắn là có! Dịch vụ spa không chỉ giúp thú cưng sạch sẽ, thơm tho
        mà còn mang lại nhiều lợi ích cho sức khỏe như:
      </div>
      <ul className="list-disc ml-5">
        <li className="mb-2">
          Loại bỏ bụi bẩn, ký sinh trùng: Giúp ngăn ngừa các bệnh về da, lông,
          ve rận.
        </li>
        <li className="mb-2">
          Chăm sóc da, lông khỏe mạnh: Massage với sữa tắm chuyên dụng, tinh dầu
          dưỡng giúp lông bóng mượt, giảm rụng lông, kích thích mọc lông mới.
        </li>
        <li className="mb-2">
          Phát hiện sớm các vấn đề sức khỏe: Trong quá trình spa, kỹ thuật viên
          có thể phát hiện sớm các vấn đề về da, lông, tai, móng để có biện pháp
          xử lý kịp thời.
        </li>
        <li className="mb-2">
          Giúp thú cưng thư giãn, thoải mái: Âm thanh, mùi hương và sự chăm sóc
          nhẹ nhàng trong quá trình spa giúp thú cưng giảm stress, thoải mái
          hơn.
        </li>
        <img
          src="https://luckydawgsalongrooming.com/wp-content/uploads/2018/04/cat-grooming-services.jpeg"
          alt="Ưu đãi"
          className="w-full rounded-lg mb-4"
        />
      </ul>

      <h2 className="text-[25px] font-bold mt-4 mb-2">
        2. Nên chọn dịch vụ spa thú cưng như thế nào?
      </h2>
      <div>
        Để lựa chọn dịch vụ spa phù hợp, bạn nên cân nhắc các yếu tố sau:
      </div>
      <ul className="list-disc ml-5">
        <li className="mb-2">
          Nhu cầu của thú cưng: Loại lông, tình trạng da, sức khỏe, tính cách
          của thú cưng.
        </li>
        <li className="mb-2">
          Uy tín cơ sở spa: Chọn cơ sở spa uy tín, có đội ngũ kỹ thuật viên giàu
          kinh nghiệm, sử dụng sản phẩm chất lượng, an toàn.
        </li>
        <li className="mb-2">
          Chính sách giá cả, dịch vụ: So sánh bảng giá, ưu đãi, chính sách chăm
          sóc khách hàng của các cơ sở spa khác nhau.
        </li>
      </ul>

      <h2 className="text-[25px] font-bold mt-4 mb-2">
        3. Làm sao để đặt dịch vụ spa thú cưng tại PAWLISH?
      </h2>
      <ul className="list-disc ml-5">
        <li className="mb-2">
          Liên hệ trực tiếp: Gọi điện thoại đến số hotline 0898 520 760 để được
          tư vấn và đặt lịch nhanh nhất.
        </li>
        <li className="mb-2">
          Đặt lịch qua website: Truy cập website pawlish.com và điền đầy đủ
          thông tin vào form đăng ký.
        </li>
      </ul>

      <h2 className="text-[25px] font-bold mt-4 mb-2">
        4. PAWLISH có cung cấp dịch vụ lấy và trả thú cưng tận nhà không?
      </h2>
      <div>
        Có, PAWLISH cung cấp dịch vụ đưa đón tận nhà với mức phí hợp lý. Bạn có
        thể liên hệ trực tiếp để biết thêm chi tiết về khu vực áp dụng và chi
        phí dịch vụ.
      </div>

      <h2 className="text-[25px] font-bold mt-4 mb-2">
        5. Thú cưng của tôi rất sợ hãi khi đi spa, Pet Service có giải pháp nào
        cho vấn đề này?
      </h2>
      <div>
        PAWLISH hiểu tâm lý của thú cưng và luôn cố gắng tạo môi trường thoải
        mái nhất cho chúng. Đội ngũ kỹ thuật viên của chúng tôi được đào tạo bài
        bản, giàu kinh nghiệm trong việc tiếp xúc thú cưng. Ngoài ra, chúng tôi
        còn sử dụng các biện pháp hỗ trợ như âm nhạc, tinh dầu thư giãn để giúp
        thú cưng thoải mái hơn.
      </div>
      <img
        src="https://pawspace.in/wp-content/uploads/2023/12/Pawspace-why-choose-cat-grooming.png"
        alt="Ưu đãi"
        className="w-full rounded-lg mb-4"
      />

      <header className="text-[35px] font-bold mb-4">
        Tổng kết PAWLISH – Nâng niu Thú Cưng Bằng Tình Yêu Thương!
      </header>
      <div className="mb-3">
        Với đội ngũ kỹ thuật viên giàu kinh nghiệm, quy trình chuyên nghiệp, sản
        phẩm an toàn. Pet Service tự hào mang đến dịch vụ spa chất lượng, giúp
        thú cưng luôn sạch sẽ, khỏe mạnh và rạng rỡ.
      </div>
      <div className="mb-3">
        Hãy để PAWLISH đồng hành cùng bạn trong hành trình chăm sóc thú cưng!
      </div>
      <div className="mb-3">Liên hệ ngay:</div>
      <ul className="list-disc ml-5">
        <li className="mb-2">Hotline 24/7: 0898 520 760</li>
        <li className="mb-2">Email: pawlish@gmail.com</li>
      </ul>

      {/* Form đăng ký */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="name" className="block text-[25px] font-medium mb-2">
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

export default PetSpaServices;
