import React, { useState } from "react";

const PetHotelPage = () => {
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
      <h2 className="text-[20px] mb-2">
        Chiết khấu lên đến 20% cho Khách hàng gửi dài ngày. Bé cưng được thả ra
        chơi 1-2 lần/ngày (30-60 phút). Gửi trên 5 ngày giảm 50% phí tắm, trên 7
        ngày tặng suất tắm - sấy vệ sinh. Giữ 2 bé cùng lúc, bé thứ 2 giảm
        50.000đ.
      </h2>

      <h1 className="text-[35px] font-bold mb-4">
        Tại sao PAWLISH là Pet Hotel đáng tin cậy nhất?
      </h1>
      <div>
        <p className="text-[17px] mb-4">
          Nhu cầu gửi thú cưng tại các khách sạn dành cho thú cưng ngày càng
          tăng cao khi nhiều người phải đi công tác, du lịch hoặc bận rộn với
          công việc. PAWLISH là một trong những lựa chọn hàng đầu nhờ vào những
          ưu điểm vượt trội, mang đến sự chăm sóc tận tình và an toàn cho thú
          cưng của bạn.
        </p>
        <ul className="list-disc ml-5">
          <li className="mb-2">
            <strong> Không gian hiện đại:</strong> Phòng nghỉ thoáng mát, sạch
            sẽ, được thiết kế riêng cho thú cưng.
          </li>
          <li className="mb-2">
            <strong> Đội ngũ chuyên nghiệp:</strong> Nhân viên PAWLISH được đào
            tạo để chăm sóc từng thú cưng như chó Poodle, mèo Anh, hay Alaska.
          </li>
          <p className="text-[17px] mb-4">
            PAWLISH không chỉ là nơi gửi thú cưng mà còn là “ngôi nhà thứ hai”
            an toàn, thoải mái.
          </p>
        </ul>
      </div>

      <img
        src="https://www.woodlandscathotel.co.uk/images/2024/01/23/woodlands-cat-hotel-2.jpg"
        alt="Giới thiệu dịch vụ"
        className="w-full rounded-lg mt-4"
      />
      <h1 className="text-[35px] font-bold mb-4">
        Dịch vụ Pet Hotel tại PAWLISH có gì đặc biệt?
      </h1>
      <div>
        <p className="text-[33px] font-bold mb-2">
          1. Phòng nghỉ tiện nghi tại Pet Hotel
        </p>
        <p className=" text-[19px] mb-2">
          Chúng tôi cung cấp không gian lý tưởng cho thú cưng:
        </p>
        <ul className="list-disc ml-5">
          <li className="text-[18px] mb-2">
            <strong> Phòng riêng biệt:</strong> Mỗi thú cưng có không gian
            riêng, tránh căng thẳng khi ở chung.
          </li>
          <li className="text-[18px] mb-2">
            <strong> Thiết kế sạch sẽ:</strong>
            Sàn chống trượt, đệm êm ái, và hệ thống thông gió hiện đại.
          </li>
          <li className="text-[18px] mb-2">
            <strong> Kiểm soát nhiệt độ: </strong>
            Giữ nhiệt độ ổn định, phù hợp cho chó mèo.
          </li>
        </ul>
        <img
          src="https://thesnuggery.com.sg/wp-content/uploads/2023/10/Dog-hotel-Singapore-1-1024x575.jpeg"
          alt="Giới thiệu dịch vụ"
          className="w-full rounded-lg mt-4"
        />
      </div>

      <div>
        <p className="text-[33px] font-bold mb-2">
          2. Chăm sóc cá nhân hóa tại PAWLISH
        </p>
        <p className=" text-[19px] mb-2">
          PAWLISH chú trọng chăm sóc thú cưng :
        </p>
        <ul className="list-disc ml-5">
          <li className="text-[18px] mb-2">
            <strong> Chế độ ăn uống:</strong>Theo thói quen của thú cưng, dùng
            thức ăn từ chủ hoặc từ pet shop của chúng tôi.
          </li>
          <li className="text-[18px] mb-2">
            <strong> Vui chơi hàng ngày:</strong>
            Khu vực chơi riêng, giúp thú cưng vận động, giảm buồn chán.
          </li>
          <li className="text-[18px] mb-2">
            <strong> Cập nhật thường xuyên: </strong>
            Gửi video, hình ảnh qua Zalo để bạn yên tâm.
          </li>
        </ul>
        <img
          src="https://blog.petloverscentre.com/wp-content/uploads/2024/03/image-1024x682.png"
          alt="Giới thiệu dịch vụ"
          className="w-full rounded-lg mt-4"
        />
      </div>

      <div>
        <p className="text-[33px] font-bold mb-2">
          3. Dịch vụ bổ sung tại Pet Hotel
        </p>
        <p className="text-[19px]  mb-2">Ngoài trông giữ, PAWLISH còn:</p>
        <ul className="list-disc ml-5">
          <li className="text-[18px] mb-2">
            <strong> Grooming : </strong>Tắm sạch, cắt tỉa lông trước khi trả
            về.
          </li>
          <li className="text-[18px] mb-2">
            <strong> Kiểm tra sức khỏe: </strong>
            Phát hiện sớm dấu hiệu bất thường như mệt mỏi, rụng lông.
          </li>
        </ul>
        <img
          src="https://smallpaws.com.au/wp-content/uploads/2023/07/Small-Paws-Pet-Hotel-Small-Doggy-Daycare-5.jpg.webp"
          alt="Giới thiệu dịch vụ"
          className="w-full rounded-lg mt-4"
        />
      </div>
      <h1 className="text-[35px] font-bold mb-4">
        Lợi ích khi chọn Pet Hotel tại PAWLISH
      </h1>
      <div>
        <p className="text-[19px]  mb-2">
          Gửi thú cưng tại PAWLISH mang lại nhiều giá trị:
        </p>
        <ul className="list-disc ml-5">
          <li className="text-[18px] mb-2">
            <strong> An toàn tuyệt đối: </strong>Camera giám sát và nhân viên
            túc trực 24/7.
          </li>
          <li className="text-[18px] mb-2">
            <strong> Thư giãn tối đa: </strong>
            Thú cưng được vui chơi, nghỉ ngơi trong không gian thoải mái.
          </li>
          <li className="text-[18px] mb-2">
            <strong> Yên tâm cho chủ: </strong>
            Bạn có thể làm việc, du lịch mà không lo lắng.
          </li>
          <li className="text-[18px] mb-2">
            <strong> Sạch sẽ, khỏe mạnh: </strong>
            Thú cưng được chăm sóc lông, vệ sinh kỹ lưỡng.
          </li>
        </ul>
      </div>

      <h1 className="text-[35px] font-bold mb-4">
        PAWLISH – Địa chỉ khách sạn thú cưng uy tín và chất lượng hàng đầu.
      </h1>
      <div>
        <p className="text-[19px]  mb-2">
          PAWLISH được khách hàng tin tưởng nhờ:
        </p>
        <ul className="list-disc ml-5">
          <li className="text-[18px] mb-2">
            <strong>Chất lượng vượt trội: </strong>Từ phòng nghỉ đến dịch vụ,
            mọi thứ đều đạt chuẩn.
          </li>
          <li className="text-[18px] mb-2">
            <strong> Phản hồi tích cực: </strong>
            Nhiều khách quen chọn PAWLISH cho nhu cầu trông giữ.
          </li>
          <li className="text-[18px] mb-2">
            <strong> Giá cả hợp lý: </strong>
            Pet hotel từ 150.000-300.000 VND/ngày, minh bạch.
          </li>
          <li className="text-[18px] mb-2">
            Có chương trình ưu đãi chiết khấu lên đến 25% cho khách hàng gửi từ
            30 ngày và tặng Tắm vệ sinh 3 lần/tháng trị giá 1.000.000đ.
          </li>
        </ul>
        <img
          src="https://pethotelboarding.com/wp-content/uploads/2024/05/group-1024x768.jpg"
          alt="Giới thiệu dịch vụ"
          className="w-full rounded-lg mt-4"
        />
      </div>

      <h1 className="text-[35px] font-bold mb-4">
        Quy trình trông giữ tại Pet Hotel của PAWLISH
      </h1>
      <div>
        <p className="text-[19px]  mb-2">
          PAWLISH áp dụng quy trình chuyên nghiệp:
        </p>
        <ul className="list-disc ml-5">
          <li className="text-[18px] mb-2">
            <strong>Đón thú cưng: </strong>Kiểm tra sức khỏe ban đầu tại Pet
            Service.
          </li>
          <li className="text-[18px] mb-2">
            <strong>Sắp xếp phòng: </strong>
            Chọn không gian phù hợp với kích thước và giống loài.
          </li>
          <li className="text-[18px] mb-2">
            <strong> Chăm sóc hàng ngày: </strong>
            Ăn uống, vui chơi, vệ sinh theo lịch trình.
          </li>
          <li className="text-[18px] mb-2">
            <strong> Giám sát liên tục: </strong>
            Camera ghi hình, cập nhật video, hình ảnh, nhân viên theo dõi.
          </li>
          <li className="text-[18px] mb-2">
            <strong> Trả thú cưng: </strong>
            Tắm sạch, kiểm tra lần cuối trước khi giao lại.
          </li>
        </ul>
      </div>

      <h1 className="text-[35px] font-bold mb-4">
        Mẹo chọn Pet Hotel từ PAWLISH
      </h1>
      <div>
        <p className="text-[19px]  mb-2">
          PAWLISH chia sẻ mẹo để bạn chọn đúng:
        </p>
        <ul className="list-disc ml-5">
          <li className="text-[18px] mb-2">
            <strong>Kiểm tra không gian: </strong>Đảm bảo sạch sẽ, thoáng mát
            như tại PAWLISH.
          </li>
          <li className="text-[18px] mb-2">
            <strong>Hỏi về chăm sóc: </strong>
            Chọn nơi có lịch trình ăn uống, vui chơi rõ ràng.
          </li>
          <li className="text-[18px] mb-2">
            <strong> Chăm sóc hàng ngày: </strong>
            Ăn uống, vui chơi, vệ sinh theo lịch trình.
          </li>
          <li className="text-[18px] mb-2">
            <strong> Đội ngũ: </strong>
            Ưu tiên pet hotel có đội ngũ giàu kinh nghiệm chăm sóc.
          </li>
          <li className="text-[18px] mb-2">
            <strong> Trả thú cưng: </strong>
            Tắm sạch, kiểm tra lần cuối trước khi giao lại.
          </li>
        </ul>
      </div>

      <h1 className="text-[35px] font-bold mb-4">
        Quy trình trông giữ tại Pet Hotel của PAWLISH
      </h1>
      <div>
        <p className="text-[19px]  mb-2">
          PAWLISH áp dụng quy trình chuyên nghiệp:
        </p>
        <ul className="list-disc ml-5">
          <li className="text-[18px] mb-2">
            <strong>Đón thú cưng: </strong>Kiểm tra sức khỏe ban đầu tại Pet
            Service.
          </li>
          <li className="text-[18px] mb-2">
            <strong>Sắp xếp phòng: </strong>
            Chọn không gian phù hợp với kích thước và giống loài.
          </li>
          <li className="text-[18px] mb-2">
            <strong> Chăm sóc hàng ngày: </strong>
            Ăn uống, vui chơi, vệ sinh theo lịch trình.
          </li>
          <li className="text-[18px] mb-2">
            <strong> Giám sát liên tục: </strong>
            Camera ghi hình, cập nhật video, hình ảnh, nhân viên theo dõi.
          </li>
          <li className="text-[18px] mb-2">
            <strong> Trả thú cưng: </strong>
            Tắm sạch, kiểm tra lần cuối trước khi giao lại.
          </li>
        </ul>
      </div>

      <h1 className="text-[35px] font-bold mb-4">
        Xu hướng Pet Hotel 2025 tại PAWLISH
      </h1>
      <div>
        <p className="text-[19px]  mb-2">
          PAWLISH tiên phong trong dịch vụ trông giữ thú cưng năm 2025:
        </p>
        <ul className="list-disc ml-5">
          <li className="text-[18px] mb-2">
            <strong>Dịch vụ đưa đón: </strong> Đưa đón thú cưng tận nơi
          </li>
          <li className="text-[18px] mb-2">
            <strong>Công nghệ giám sát: </strong>
            Đội ngũ chăm sóc khách hàng, nhân viên hotel sẽ cập nhật báo cáo
            ngay trên nhóm Zalo.
          </li>
          <li className="text-[18px] mb-2">
            <strong> Gói nghỉ dưỡng cao cấp: </strong>
            Kết hợp grooming, tắm vệ sinh, điều trị nấm, ve cho thú cưng.
          </li>
        </ul>
        <img
          src="https://live.staticflickr.com/65535/49674721338_367533a444_z.jpg"
          alt="Giới thiệu dịch vụ"
          className="w-full rounded-lg mt-4"
        />
      </div>

      <h1 className="text-[35px] font-bold mb-4">
        Lý do chọn Pet Hotel tại PAWLISH ngay hôm nay
      </h1>
      <div>
        <ul className="list-disc ml-5">
          <li className="text-[18px] mb-2">
            <strong>Danh tiếng uy tín: </strong> PAWLISH là sự lựa chọn đáng tin
            cậy cho thú cưng của bạn.
          </li>
          <li className="text-[18px] mb-2">
            <strong>Dịch vụ đa dạng: </strong>
            Ngoài pet hotel, chúng tôi có pet grooming, pet shop.s
          </li>
          <li className="text-[18px] mb-2">
            <strong> Ưu đãi hấp dẫn: </strong>
            Giảm lên đến 25% khi gửi dài hạn.
          </li>
        </ul>
        <img
          src="https://cdn.shopify.com/s/files/1/0550/5853/0481/files/petsthing-how-to-choose-pet-hotel-2.jpg?v=1688973880"
          alt="Giới thiệu dịch vụ"
          className="w-full rounded-lg mt-4"
        />
      </div>

      <section className="mb-6">
        <h2 className="text-[35px] font-bold mb-2">
          Pawlish – Thông tin liên hệ
        </h2>
        <div className="text-[20px]">
          Hãy liên hệ ngay với PAWLISH qua thông tin bên dưới:{" "}
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

export default PetHotelPage;
