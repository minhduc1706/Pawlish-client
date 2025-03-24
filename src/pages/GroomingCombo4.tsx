import { useState } from "react";

const GroomingCombo4 = () => {
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
      ).toLocaleDateString("en-US", {
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
        throw new Error(`Error: ${response.status}`);
      }

      alert("Request sent successfully!");
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
      console.error("Error sending request:", error);
      alert("Request failed! Please try again.");
    }
  };

  return (
    <div className="max-w-[66vw] w-2/3 mx-auto p-6 bg-white rounded-xl shadow-md">
      <nav className="text-sm mb-4 text-gray-500">
        <a
          href="http://localhost:5173/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Home /
        </a>{" "}
        <a
          href="http://localhost:5173/services/PromotionServicePage"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Pet Spa Services HCM
        </a>{" "}
        / Combo 4 – Shaving, Bathing & Hygiene
      </nav>

      <h1 className="text-[35px] font-bold mb-4">
        Combo 4 – Shaving, Bathing & Hygiene
      </h1>
      <p className="text-[20px] mb-6">
        PAWLISH introduces you to a professional pet care center with an
        experienced staff team. We provide a Shaving, Bathing & Hygiene Combo to
        keep your pet clean and fresh with our 8-step process.
      </p>
      <img
        src="https://images.contentstack.io/v3/assets/blt6f84e20c72a89efa/bltd622a4c1793a651e/6261d5aebbaf302a0a0d7199/img-professional-grooming-appointment-og.jpg"
        alt="Pet"
        className="w-full h-auto block object-cover mx-auto"
      />

      <h2 className="text-[33px] font-bold mt-4 mb-2">
        8-STEP SHAVING, BATHING & HYGIENE COMBO
      </h2>
      <img
        src="/public/combo-4.png"
        alt="Combo 4"
        className="w-full rounded-lg mb-4"
      />

      <h2 className="text-[35px] font-bold mt-4 mb-2">
        PAWLISH's Shaving, Bathing & Hygiene Price List
      </h2>
      <img
        src="/public/price-list.png"
        alt="Price List"
        className="w-full rounded-lg mb-4"
      />

      <h2 className="text-[35px] font-bold mt-4 mb-2">
        Special Offers for Loyal Customers
      </h2>
      <img
        src="/public/service-info.png"
        alt="Special Offers"
        className="w-full rounded-lg mb-4"
      />

      <h2 className="text-[35px] font-bold mt-4 mb-2">
        Round-trip Pet Transportation to Spa
      </h2>
      <p className="text-[21px] mb-4">
        Pet Pick Up – Our pet transportation service offers super convenient,
        fast, safe, and time-saving services to bring your pet to the Spa.
      </p>
      <img
        src="https://clownvietnam.com/wp-content/uploads/2025/02/van-chuyen-thu-cung.jpg"
        alt="Transportation Service"
        className="w-full rounded-lg mb-4"
      />
      <p className="text-[35px] font-bold">Explore More Combos:</p>
      <ul className="list-disc ml-5">
        <li className="text-[21px]">
          Combo 1:{" "}
          <a
            href="http://localhost:5173/services/Combo1"
            className="text-blue-500 underline hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bath & Hygiene
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
            Grooming & Hygiene
          </a>
        </li>
        <li className="text-[21px]">
          Combo 3:{" "}
          <a
            href="http://localhost:5173/services/Combo3"
            className="text-blue-500 underline hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bath, Hygiene & Grooming
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
            Shaving & Hygiene
          </a>
        </li>
      </ul>

      {/* Registration Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="name" className="block text-[35px] font-medium mb-2">
          Service Request <span className="text-red-500">*</span>
        </label>
        <div>
          Please select a service you need so PawLish can prepare and provide
          the most attentive care for your pets!
        </div>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded-md"
        >
          <option value="Tắm vệ sinh tại nhà">Home Bath & Hygiene</option>
          <option value="Cắt tỉa lông tại nhà">Home Grooming</option>
          <option value="Thú y tại nhà">Home Veterinary Services</option>
          <option value="Khách sạn thú cưng">Pet Hotel</option>
          <option value="Combo tắm tháng 4 lần">
            Monthly Bath Combo (4 times)
          </option>
          <option value="Combo tắm tháng 8 lần">
            Monthly Bath Combo (8 times)
          </option>
          <option value="Combo 1: Tắm  sấy + Vệ sinh">
            Combo 1: Bath & Dry + Hygiene
          </option>
          <option value="Combo 2: Cắt tỉa + Vệ sinh">
            Combo 2: Grooming + Hygiene
          </option>
          <option value="Combo 3: Tắm  sấy + Vệ sinh + Cắt tỉa lông">
            Combo 3: Bath & Dry + Hygiene + Grooming
          </option>
          <option value="Combo 4: Tắm Sấy + Vệ Sinh + Cạo lông">
            Combo 4: Bath & Dry + Hygiene + Shaving
          </option>
        </select>
        <label htmlFor="name" className="block text-[21px] font-medium mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text" // Changed to text for full name
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded-md"
          placeholder=""
        />
        <label htmlFor="name" className="block text-[21px] font-medium mb-2">
          Phone Number <span className="text-red-500">*</span>
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
          {/* Address */}
          <div className="w-1/2">
            <label
              htmlFor="address"
              className="block text-[21px] font-medium mb-2 whitespace-nowrap"
            >
              Address <span className="text-red-500">*</span>
            </label>
            <input
              id="address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded-md"
              placeholder="Enter address"
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
              placeholder="Enter email"
            />
          </div>
        </div>

        <label htmlFor="name" className="block text-[21px] font-medium mb-2">
          Appointment Date<span className="text-red-500">*</span>
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
          Pet Name<span className="text-red-500">*</span>
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
          Species<span className="text-red-500">*</span>
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
          Breed<span className="text-red-500">*</span>
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
          {/* Pet Age */}
          <div className="w-1/2">
            <label htmlFor="age" className="block text-[21px] font-medium mb-2">
              Pet Age<span className="text-red-500">*</span>
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

          {/* Weight */}
          <div className="w-1/2">
            <label
              htmlFor="weight"
              className="block text-[21px] font-medium mb-2"
            >
              Weight (kg)<span className="text-red-500">*</span>
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
          Notes<span className="text-red-500">*</span>
        </label>
        <textarea
          name="note"
          value={formData.note}
          onChange={handleChange}
          rows={3}
          className="w-full border p-2 rounded-md"
          placeholder="Enter a description about your pet's condition so our specialists can provide the best support."
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Register Service
        </button>
      </form>
    </div>
  );
};

export default GroomingCombo4;
