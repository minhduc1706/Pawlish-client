const PetBathPage = () => {
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
          href="http://localhost:5174/services/PetHomeCare"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Dịch vụ
        </a>{" "}
        / Dịch vụ tắm thú cưng tại nhà
      </nav>

      {/* Header */}
      <header className="mb-6">
        <h1 className="text-[37px] font-bold mb-2">
          <strong>Dịch vụ tắm thú cưng tại nhà</strong>
        </h1>
        <p className="text-[21px] font-semibold mt-2">
          Đơn vị cung cấp dịch vụ tắm thú cưng tại nhà hàng đầu TPHCM
        </p>
      </header>

      {/* Giới thiệu */}
      <section className="mb-6">
        <p className="text-[21px] text-gray-700">
          Chào mừng các bạn đến với <strong>PAWLISH</strong> – dịch vụ tắm thú
          cưng tại nhà TP HCM, với sứ mệnh đưa ra những giải pháp tốt nhất cho
          thú cưng của bạn được sạch sẽ tối ưu nhất.
        </p>
        <p className="text-[21px] text-gray-700 mt-2">
          Bạn không có thời gian để đưa thú cưng đến trung tâm, hay việc di
          chuyển sẽ rất khó khăn? Đây là vấn đề mà chúng tôi đặt ra! Hãy để{" "}
          <strong>PAWLISH</strong> mang đến những dịch vụ tại nhà bạn, nhưng vẫn
          đảm bảo chất lượng dịch vụ tốt nhất, chuyên nghiệp nhất, uy tín nhất.
        </p>
        <img
          src="https://www.metlifepetinsurance.com/content/dam/metlifecom/us/metlifepetinsurance/images/how-to-bathe-a-dog-properly-why-it-s-important-min.webp"
          alt="Ảnh minh họa"
          className="w-full rounded-lg mt-4"
        />
        <img
          src="https://blog.homesalive.ca/hubfs/Blog/2023/Cat%20grooming%20Tips/cat-getting-a-bath.webp"
          alt="Ảnh minh họa"
          className="w-full rounded-lg mt-4"
        />
      </section>

      {/* Dịch vụ cụ thể */}

      <header className="text-[37px] font-bold mb-2"></header>
      <p className="text-[21px] text-gray-700 mb-6">
        <strong>PAWLISH</strong> với các trang thiết bị chuyên nghiệp cùng với
        đội ngũ nhân viên được đào tạo bài bản và có nhiều năm kinh nghiệm, sẽ
        đáp ứng nhu cầu sạch sẽ của thú cưng bao gồm: tắm, sấy, vệ sinh.
      </p>
      <p className="text-[21px] text-gray-700 mb-4">Dịch vụ gồm có:</p>
      <ul className="list-disc ml-5 text-[21px] text-gray-700">
        <li className="text-[17px] mb-2">
          Cắt móng, mài móng, cạo lông đệm/bàn chân;
        </li>
        <li className="text-[17px] mb-2">
          Cạo lông tai, nhổ lông tai, vệ sinh tai;
        </li>
        <li className="text-[17px] mb-2">Làm sạch tuyến hôi;</li>
        <li className="text-[17px] mb-2">
          Tắm sữa tắm khử mùi và sữa tắm nước hoa;
        </li>
        <li className="text-[17px] mb-2">Sấy khô, chải lông tơ, lông rối;</li>
        <li className="text-[17px] mb-2">Vệ sinh tai lần 2;</li>
        <li className="text-[17px] mb-2">
          Xịt thơm – dưỡng lông, vệ sinh răng.
        </li>
      </ul>
      {/* Chỗ để thêm ảnh */}
      <img
        src="https://cf-s3.petcoach.co/thumbnails/article/uploads/articles/8912/320e459cd9a3548268ed7c14626ab1b90ff9fb47.jpeg"
        alt="Dịch vụ tắm thú cưng tại nhà"
        className="w-full rounded-lg mt-4"
      />

      {/* Tại sao chọn PET SERVICE */}
      <section className="mb-6">
        <h1 className="text-[37px] font-bold mb-2">
          <strong>Tại sao lại chọn PAWLISH?</strong>
        </h1>
        <ul className="list-disc ml-5 text-[21px] text-gray-700">
          <li className="text-[17px] mb-2">
            Bạn không có thời gian hay việc di chuyển khó khăn, đừng lo PAWLISH
            sẽ thay bạn chăm sóc cún yêu ngay tại nhà;
          </li>
          <li className="text-[17px] mb-2">
            Đội ngũ nhân viên chuyên nghiệp, trách nhiệm, có nhiều kinh nghiệm
            về thú cưng;
          </li>
          <li className="text-[17px] mb-2">
            Đảm bảo trang thiết bị hiện tại, tiên tiến đáp ứng đầy đủ cho quá
            trình thực hiện dịch vụ;
          </li>
          <li className="text-[17px] mb-2">
            Giá cả hợp lý, thường xuyên có chương trình khuyến mãi;
          </li>
          <li className="text-[17px] mb-2">
            Cập nhật xu hướng để phục vụ thú cưng của bạn được chỉn chu nhất;
          </li>
          <li className="text-[17px] mb-2">Có nhân viên tư vấn 24/24;</li>
          <li className="text-[17px] mb-2">
            Tất cả đội ngũ nhân viên PAWLISH đều được training và đào tạo về tác
            phong, thái độ phục vụ khách hàng cũng như Pet yêu của bạn.
          </li>
        </ul>
        {/* Chỗ để thêm ảnh */}
        <img
          src="https://vinpet.vn/files/tin/69/jpg/dich-vu-tam-cho-meo-tai-nha.jpg"
          alt="Tại sao chọn PET SERVICE"
          className="w-full rounded-lg mt-4"
        />
      </section>

      <img
        src="https://www.petsecure.com.au/wp-content/uploads/2019/05/Dog-grooming.jpg"
        alt="Thành tựu và khách hàng"
        className="w-full rounded-lg mt-4"
      />

      {/* Liên hệ */}
      <section className="mb-6">
        <h2 className="text-[30px] font-bold mb-2">Hãy liên hệ ngay</h2>
        <p className="text-[20px] text-gray-700">
          Hotline 24/7:<strong> 0898 520 760</strong>
        </p>

        <p className="text-[20px] text-gray-700">
          Email: <strong> pawlish@gmail.com</strong>
        </p>
      </section>

      {/* Cam kết */}
      <section className="mb-6">
        <h2 className="text-[25px] font-bold mb-2">TRỌN VẸN TRẢI NGHIỆM</h2>
        <p className="text-[21px] text-gray-700">
          Những dịch vụ mà PAWLISH đáp ứng: Dịch vụ Grooming tại Spa, Dịch vụ
          thú Y tại nhà, Dịch vụ cắt tỉa lông tại nhà, Dịch vụ tắm thú cưng tại
          nhà, Spa thú cưng…
        </p>
        <p className="text-[21px] text-gray-700 mt-2">
          <strong>PAWLISH CAM KẾT</strong>
        </p>
        <ul className="list-disc ml-5 text-[21px] text-gray-700">
          <li>ĐEM LẠI DỊCH VỤ TỐT NHẤT VỚI GIÁ TỐT NHẤT</li>
          <li>ĐỘI NGŨ CHĂM SÓC KHÁCH HÀNG CHUYÊN NGHIỆP</li>
          <li>NHÂN VIÊN ĐẾN TẠI NHÀ</li>
        </ul>
      </section>
    </div>
  );
};
export default PetBathPage;
