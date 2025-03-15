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
      ).toLocaleDateString("en-GB", {
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
        throw new Error(`Error: ${response.status}`);
      }

      alert("Request submitted successfully!");
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
      console.error("Error submitting request:", error);
      alert("Failed to submit request! Please try again.");
    }
  };

  return (
    <div className="max-w-[66vw] w-2/3 mx-auto p-6 bg-white rounded-xl shadow-md">
      {/* Breadcrumb */}
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
          Pet Spa Services HCM – Comprehensive Care for Your Pets
        </a>{" "}
        / PAWLISH Promotion
      </nav>

      {/* Header */}
      <h1 className="text-[35px] font-bold mb-2">PAWLISH Promotion</h1>

      {/* Service Introduction */}
      <h2 className="text-[35px] font-bold mb-2">
        Service Introduction – PAWLISH Promotion
      </h2>

      <div>
        <p className="mb-2">PAWLISH offers the following services:</p>
        <ul className="list-disc ml-5">
          <li className="mb-2">Pet grooming at spa and home</li>
          <li className="mb-2">Pet hotel services</li>
          <li className="mb-2">Pet shop: Providing pet products</li>
          <li className="mb-2">Vaccination at spa and home</li>
          <li className="mb-2">Dog walking service</li>
        </ul>
      </div>

      <img
        src="/public/service-info.png"
        alt="Service Introduction"
        className="w-full rounded-lg mt-4"
      />

      <div>
        <p className="mb-2">With attractive PAWLISH promotions such as:</p>
        <ul className="list-disc ml-5">
          <li className="mb-2">
            Loyalty program for spa services – get 1 free combo after 6 ticks.
          </li>
          <li className="mb-2">
            Product discounts of 3%, 5%, and 10% based on loyalty points at
            PAWLISH shop.
          </li>
          <li className="mb-2">
            Discounts for pet hotel services – up to 50% off for stays over 5
            days, free bath after 7 days.
          </li>
          <li className="mb-2">Monthly sales at PAWLISH.</li>
          <li className="mb-2">Free pet pickup and drop-off service.</li>
        </ul>
      </div>

      <h2 className="text-[35px] font-bold mb-2">
        PAWLISH Monthly Client Benefits
      </h2>
      <ul className="list-disc ml-5 text-[20px] text-gray-700">
        <li>Up to 10% discount on services</li>
        <li>Free pet pickup and drop-off within HCM</li>
        <li>Free grooming</li>
        <li>50% off pet hotel services</li>
        <li>5% off products at PAWLISH shop</li>
        <li>Free deworming, vaccination, and health consultations</li>
      </ul>

      <section className="mb-6">
        <h2 className="text-[35px] font-bold mb-2">
          PAWLISH – Contact Information
        </h2>
        <div className="text-[20px]">
          Contact PAWLISH using the information below:
        </div>
        <p className="text-[17px] text-gray-700">24/7 Hotline: 0898 520 760</p>
        <p className="text-[17px] text-gray-700">Email: pawlish@gmail.com</p>
      </section>
      {/* Form đăng ký */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="name" className="block text-[35px] font-medium mb-2">
          Service Request <span className="text-red-500">*</span>
        </label>
        <div>
          Please select 1 service you need so that PawLish can prepare and serve
          the children in the most thoughtful way!
        </div>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded-md"
        >
          <option value="Home grooming">Home grooming</option>
          <option value="Home grooming">Home grooming</option>
          <option value="Home veterinary">Home veterinary</option>
          <option value="Pet hotel">Pet hotel</option>
          <option value="4 times monthly bathing combo">
            4 times monthly bathing combo
          </option>
          <option value="8 times monthly bathing combo">
            8 times monthly bathing combo
          </option>
          <option value="Combo 1: Bathing + Drying + Cleaning">
            Combo 1: Bathing + Drying + Cleaning
          </option>
          <option value="Combo 2: Trimming + Cleaning">
            Combo 2: Trimming + Cleaning
          </option>

          <option value="Combo 3: Bathing + Drying + Cleaning + Fur Trimming">
            Combo 3: Bathing + Drying + Cleaning + Fur Trimming
          </option>
          <option value="Combo 4: Bathing + Drying + Cleaning + Fur Shaving">
            Combo 4: Bathing + Drying + Cleaning + Fur Shaving
          </option>
        </select>

        <label htmlFor="name" className="block text-[20px] font-medium mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded-md"
          placeholder=""
        />

        <label htmlFor="phone" className="block text-[20px] font-medium mb-2">
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
              className="block text-[20px] font-medium mb-2 whitespace-nowrap"
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
              placeholder="Enter your address"
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
              placeholder="Enter your email"
            />
          </div>
        </div>

        <label
          htmlFor="appointmentDate"
          className="block text-[20px] font-medium mb-2"
        >
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

        <label htmlFor="petName" className="block text-[20px] font-medium mb-2">
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

        <label htmlFor="petType" className="block text-[20px] font-medium mb-2">
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

        <label
          htmlFor="petBreed"
          className="block text-[20px] font-medium mb-2"
        >
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
            <label htmlFor="age" className="block text-[20px] font-medium mb-2">
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
              className="block text-[20px] font-medium mb-2"
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

        <label htmlFor="note" className="block text-[20px] font-medium mb-2">
          Notes<span className="text-red-500">*</span>
        </label>
        <textarea
          name="note"
          value={formData.note}
          onChange={handleChange}
          rows={3}
          className="w-full border p-2 rounded-md"
          placeholder="Enter a brief description of your pet's condition so the specialists can better assist you."
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

export default PromotionServicePage;
