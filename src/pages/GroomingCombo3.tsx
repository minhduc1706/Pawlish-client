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
      console.error("Error when sending request:", error);
      alert("Failed to send request! Please try again.");
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
        / Combo 3 – Bath & Grooming
      </nav>

      <h1 className="text-[35px] font-bold mb-4">Combo 3 – Bath & Grooming</h1>

      <p className="text-[21px] mb-6">
        PAWLISH will introduce you to a professional pet care center with a team
        of experienced staff. We provide Combo 3 – Bath & Grooming to keep your
        pet clean and fragrant through our 10-step process.
      </p>

      <h2 className="text-[33px] font-bold mt-4 mb-2">
        10-STEP BATH & GROOMING COMBO
      </h2>
      <img
        src="/public/combo-3.png"
        alt="Combo 3"
        className="w-full rounded-lg mb-4"
      />

      <h2 className="text-[35px] font-bold mt-4 mb-2">
        Grooming Price List at PAWLISH
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
        src="/public/special-service.png"
        alt="Special Offers"
        className="w-full rounded-lg mb-4"
      />

      <h2 className="text-[35px] font-bold mt-4 mb-2">
        Round-trip Transport to Spa
      </h2>
      <p className="text-[21px] mb-4">
        Pet Pick Up – Our pet transportation service delivers super convenient,
        fast, safe, and time-saving transport of your pet to the Spa.
      </p>
      <img
        src="https://clownvietnam.com/wp-content/uploads/2025/02/van-chuyen-thu-cung.jpg"
        alt="Transportation"
        className="w-full rounded-lg mb-4"
      />
      <p className="text-[35px] font-bold">Learn More About Our Combos:</p>
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
          Combo 4:{" "}
          <a
            href="http://localhost:5173/services/Combo4"
            className="text-blue-500 underline hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shaving, Bath & Hygiene
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
          Please select 1 service you need so PawLish can prepare and serve your
          pets in the most thorough way!
        </div>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded-md"
        >
          <option value="Home pet bathing">Home pet bathing</option>
          <option value="Home pet grooming">Home pet grooming</option>
          <option value="Home veterinary service">
            Home veterinary service
          </option>
          <option value="Pet hotel">Pet hotel</option>
          <option value="Monthly bath combo - 4 times">
            Monthly bath combo - 4 times
          </option>
          <option value="Monthly bath combo - 8 times">
            Monthly bath combo - 8 times
          </option>
          <option value="Combo 1: Bath + Dry + Hygiene">
            Combo 1: Bath + Dry + Hygiene
          </option>
          <option value="Combo 2: Grooming + Hygiene">
            Combo 2: Grooming + Hygiene
          </option>
          <option value="Combo 3: Bath + Dry + Hygiene + Grooming">
            Combo 3: Bath + Dry + Hygiene + Grooming
          </option>
          <option value="Combo 4: Bath + Dry + Hygiene + Shaving">
            Combo 4: Bath + Dry + Hygiene + Shaving
          </option>
        </select>
        <label htmlFor="name" className="block text-[21px] font-medium mb-2">
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
          placeholder="Enter some descriptions about your pet's condition so our specialists can provide the best support."
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

export default GroomingCombo3;
