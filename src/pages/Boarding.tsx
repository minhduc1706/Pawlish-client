import { User } from "@/interfaces/User";
import React, { useState } from "react";

const Boarding = () => {
  const [formData, setFormData] = useState<
    Pick<User, "full_name" | "email" | "phone" | "address"> & {
      petName: string;
      petType: string;
      petBreed: string;
      age: string;
      weight: string;
      date: string;
      appointmentDate: string;
      service: string;
      staff: string;
      gender: string;
      note: string;
    }
  >({
    full_name: "",
    email: "",
    phone: "",
    address: "",
    petName: "",
    petType: "",
    petBreed: "",
    age: "",
    weight: "",
    date: "",
    appointmentDate: "",
    service: "",
    staff: "",
    gender: "",
    note: "",
  });
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Partial<typeof formData> = {};
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.email) newErrors.email = "Email address is required";
    if (!formData.full_name) newErrors.full_name = "Full name is required";
    if (!formData.address) newErrors.address = "Detailed address is required";
    if (!formData.petName) newErrors.petName = "Pet name is required";
    if (!formData.service) newErrors.service = "Service selection is required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

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

      //  Comment lại API để tránh lỗi khi chưa có backend
      // const response = await fetch("http://localhost:3000/groomingRequests", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(dataToSend),
      // });

      // if (!response.ok) {
      //   throw new Error(`Error: ${response.status}`);
      // }

      // ✅ Hiển thị dữ liệu nhập vào thay vì gửi API
      console.log("Mock API Data:", dataToSend);
      alert("Request sent successfully!");

      // Reset form
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        address: "",
        petName: "",
        petType: "",
        petBreed: "",
        age: "",
        weight: "",
        date: "",
        appointmentDate: "",
        staff: "",
        service: "",
        gender: "",
        note: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Error when sending request:", error);
      alert("Failed to send request! Please try again.");
    }
  };

  return (
    <div className="max-w-[66vw] w-2/3 mx-auto p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-[35px] font-bold mb-4">
        Why is PAWLISH the most trusted Boarding?
      </h1>
      <div>
        <p className="text-[17px] mb-4">
          The demand for pet hotels is increasing as more people travel for work
          or leisure. PAWLISH is a top choice thanks to its outstanding
          services, providing attentive and safe care for your pets.
        </p>
        <ul className="list-disc ml-5">
          <li className="mb-2">
            <strong>Modern Space:</strong> Clean, well-ventilated rooms
            specially designed for pets.
          </li>
          <li className="mb-2">
            <strong>Professional Staff:</strong> PAWLISH staff are trained to
            care for pets like Poodles, British Shorthairs, and Alaskans.
          </li>
          <p className="text-[17px] mb-4">
            PAWLISH is not just a place to leave your pet — it's their second
            home.
          </p>
        </ul>
      </div>

      <img
        src="https://www.woodlandscathotel.co.uk/images/2024/01/23/woodlands-cat-hotel-2.jpg"
        alt="Service Introduction"
        className="w-full rounded-lg mt-4"
      />

      <h1 className="text-[35px] font-bold mb-4">
        What makes PAWLISH's Boarding services special?
      </h1>
      <div>
        <p className="text-[33px] font-bold mb-2">1. Comfortable Rooms</p>
        <p className="text-[19px] mb-2">
          We provide an ideal environment for pets:
        </p>
        <ul className="list-disc ml-5">
          <li className="text-[18px] mb-2">
            <strong>Private Rooms:</strong> Each pet gets their own room to
            avoid stress.
          </li>
          <li className="text-[18px] mb-2">
            <strong>Clean Design:</strong>
            Non-slip flooring, soft bedding, and modern ventilation systems.
          </li>
          <li className="text-[18px] mb-2">
            <strong>Temperature Control:</strong>
            Stable, pet-friendly temperature settings.
          </li>
        </ul>
      </div>

      <div>
        <p className="text-[33px] font-bold mb-2">
          2. Personalized Care at PAWLISH
        </p>
        <p className="text-[19px] mb-2">
          PAWLISH focuses on providing tailored care:
        </p>
        <ul className="list-disc ml-5">
          <li className="text-[18px] mb-2">
            <strong>Diet:</strong> Meals based on your pet’s habits, using food
            from you or from our pet shop.
          </li>
          <li className="text-[18px] mb-2">
            <strong>Daily Play:</strong>
            Dedicated play areas to keep pets active and prevent boredom.
          </li>
          <li className="text-[18px] mb-2">
            <strong>Regular Updates:</strong>
            We’ll send you photos and videos via Zalo.
          </li>
        </ul>
      </div>

      <div>
        <p className="text-[33px] font-bold mb-2">3. Additional Services</p>
        <p className="text-[19px] mb-2">
          Besides boarding, PAWLISH also offers:
        </p>
        <ul className="list-disc ml-5">
          <li className="text-[18px] mb-2">
            <strong>Grooming:</strong> Bathing and trimming before returning
            home.
          </li>
          <li className="text-[18px] mb-2">
            <strong>Health Check:</strong>
            Early detection of issues like fatigue or hair loss.
          </li>
        </ul>
      </div>

      <h1 className="text-[35px] font-bold mb-4">
        Benefits of Choosing PAWLISH’s Boarding
      </h1>
      <div>
        <ul className="list-disc ml-5">
          <li className="text-[18px] mb-2">
            <strong>Safety:</strong> 24/7 surveillance and staff on site.
          </li>
          <li className="text-[18px] mb-2">
            <strong>Comfort:</strong> Relaxing environment for pets to rest and
            play.
          </li>
          <li className="text-[18px] mb-2">
            <strong>Peace of Mind:</strong> You can work or travel without
            worrying.
          </li>
          <li className="text-[18px] mb-2">
            <strong>Clean and Healthy:</strong> Regular grooming and hygiene
            care.
          </li>
        </ul>
      </div>

      <h1 className="text-[35px] font-bold mb-4">
        PAWLISH – The Most Trusted and High-Quality Boarding Address
      </h1>
      <div>
        <p className="text-[19px] mb-2">
          PAWLISH is trusted by customers because of:
        </p>
        <ul className="list-disc ml-5">
          <li className="text-[18px] mb-2">
            <strong>Superior Quality: </strong>From accommodation to services,
            everything meets the highest standards.
          </li>
          <li className="text-[18px] mb-2">
            <strong>Positive Feedback: </strong>
            Many regular customers choose PAWLISH for their pet boarding needs.
          </li>
          <li className="text-[18px] mb-2">
            <strong>Reasonable Prices: </strong>
            Boarding from 300,000-700,000 VND/day, completely transparent.
          </li>
          <li className="text-[18px] mb-2">
            Discount program offering up to 25% off for customers boarding for
            30 days or more, plus 3 free hygiene baths per month valued at
            1,000,000 VND.
          </li>
        </ul>
        <img
          src="https://pethotelboarding.com/wp-content/uploads/2024/05/group-1024x768.jpg"
          alt="Service Introduction"
          className="w-full rounded-lg mt-4"
        />
      </div>

      <h1 className="text-[35px] font-bold mb-4">
        Tips for Choosing a Boarding from PAWLISH
      </h1>
      <div>
        <p className="text-[19px] mb-2">
          PAWLISH shares tips to help you choose wisely:
        </p>
        <ul className="list-disc ml-5">
          <li className="text-[18px] mb-2">
            <strong>Check the Space: </strong>Ensure it's clean and
            well-ventilated like at PAWLISH.
          </li>
          <li className="text-[18px] mb-2">
            <strong>Ask About Care: </strong>
            Choose places with clear feeding and play schedules.
          </li>
          <li className="text-[18px] mb-2">
            <strong>Staff: </strong>
            Prioritize pet hotels with experienced care teams.
          </li>
        </ul>
      </div>

      <h1 className="text-[35px] font-bold mb-4">
        Tips for Choosing a Boarding from PAWLISH
      </h1>
      <div>
        <p className="text-[19px] mb-2">
          PAWLISH shares tips to help you choose wisely:
        </p>
        <ul className="list-disc ml-5">
          <li className="text-[18px] mb-2">
            <strong>Check the Space: </strong>Ensure it's clean and
            well-ventilated like at PAWLISH.
          </li>
          <li className="text-[18px] mb-2">
            <strong>Ask About Care: </strong>
            Choose places with clear feeding and play schedules.
          </li>
          <li className="text-[18px] mb-2">
            <strong>Staff: </strong>
            Prioritize pet hotels with experienced care teams.
          </li>
        </ul>
      </div>

      <h1 className="text-[35px] font-bold mb-4">
        Pet Care Process at PAWLISH's Boarding
      </h1>
      <div>
        <p className="text-[19px] mb-2">
          PAWLISH follows a professional process:
        </p>
        <ul className="list-disc ml-5">
          <li className="text-[18px] mb-2">
            <strong>Pet Reception: </strong>Initial health check at Pet Service.
          </li>
          <li className="text-[18px] mb-2">
            <strong>Room Arrangement: </strong>
            Selecting appropriate space based on size and species.
          </li>
          <li className="text-[18px] mb-2">
            <strong>Daily Care: </strong>
            Feeding, play time, and hygiene according to schedule.
          </li>
          <li className="text-[18px] mb-2">
            <strong>Continuous Monitoring: </strong>
            Camera recording, video and image updates, staff supervision.
          </li>
          <li className="text-[18px] mb-2">
            <strong>Pet Return: </strong>
            Bath and final check before handover.
          </li>
        </ul>
      </div>

      <h1 className="text-[35px] font-bold mb-4">
        Boarding Trends 2025 at PAWLISH
      </h1>
      <div>
        <p className="text-[19px] mb-2">
          PAWLISH pioneers in pet care services in 2025:
        </p>
        <ul className="list-disc ml-5">
          <li className="text-[18px] mb-2">
            <strong>Pick-up and Delivery Service: </strong> Door-to-door pet
            transportation
          </li>
          <li className="text-[18px] mb-2">
            <strong>Monitoring Technology: </strong>
            Customer care team and hotel staff will provide updates directly
            through Zalo groups.
          </li>
          <li className="text-[18px] mb-2">
            <strong>Premium Care Packages: </strong>
            Combining grooming, hygiene baths, fungal treatment, and tick
            treatment for pets.
          </li>
        </ul>
        <img
          src="https://live.staticflickr.com/65535/49674721338_367533a444_z.jpg"
          alt="Service Introduction"
          className="w-full rounded-lg mt-4"
        />
      </div>

      <h1 className="text-[35px] font-bold mb-4">
        Reasons to Choose Boarding at PAWLISH Today
      </h1>
      <div>
        <ul className="list-disc ml-5">
          <li className="text-[18px] mb-2">
            <strong>Trusted Reputation: </strong> PAWLISH is a reliable choice
            for your pet.
          </li>
          <li className="text-[18px] mb-2">
            <strong>Diverse Services: </strong>
            Besides pet hotel, we offer pet grooming and pet shop services.
          </li>
          <li className="text-[18px] mb-2">
            <strong>Attractive Offers: </strong>
            Up to 25% discount for long-term stays.
          </li>
        </ul>
        <img
          src="https://cdn.shopify.com/s/files/1/0550/5853/0481/files/petsthing-how-to-choose-pet-hotel-2.jpg?v=1688973880"
          alt="Service Introduction"
          className="w-full rounded-lg mt-4"
        />
      </div>

      <section className="mb-6">
        <h2 className="text-[35px] font-bold mb-2">
          Pawlish – Contact Information
        </h2>
        <div className="text-[20px]">
          Contact PAWLISH right away through the information below:{" "}
        </div>
        <p className="text-[17px] text-gray-700">Hotline 24/7: 0898 520 760</p>
        <p className="text-[17px] text-gray-700">Email: pawlish@gmail.com</p>
      </section>
      {/* Form đăng ký */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 rounded-lg shadow-md"
      >
        <label htmlFor="name" className="block text-[35px] font-medium mb-2">
          Service Request <span className="text-red-500">*</span>
        </label>
        <p className="text-gray-600 mb-6">
          Please select a service you need so PawLish can provide the most
          attentive care for your pets!
        </p>

        {/* Service & Staff Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">
              Select a Service <span className="text-red-500">*</span>
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded-md"
            >
              <option value="">Choose Service</option>
              <option value="Bathing">Bathing</option>
              <option value="Nail Trimming">Nail Trimming</option>
              <option value="Massage">Massage</option>
              <option value="Teeth Cleaning">Teeth Cleaning</option>
              <option value="Ear Cleaning">Ear Cleaning</option>
              <option value="Basic Training">Basic Training</option>
              <option value="Health Checkup">Health Checkup</option>
              <option value="Overnight Boarding">Overnight Boarding</option>
              <option value="Flea Treatment">Flea Treatment</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">
              Select Staff (Optional)
            </label>
            <select
              name="staff"
              value={formData.staff}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            >
              <option value="">Choose Staff</option>
              {[42, 43, 44, 45, 46, 47, 48, 49, 50].map((num) => (
                <option key={num} value={`Staff ${num}`}>
                  Staff {num}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Customer Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded-md"
            />
            {errors.full_name && (
              <p className="text-red-500">{errors.full_name}</p>
            )}
          </div>
          <div>
            <label className="block font-medium mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">
              Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded-md"
            />
          </div>
        </div>

        {/* Appointment & Pet Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">
              Appointment Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">
              Pet Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="petName"
              value={formData.petName}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">
              Species <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="petType"
              value={formData.petType}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">
              Breed <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="petBreed"
              value={formData.petBreed}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded-md"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">
              Age (Years) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">
              Weight (kg) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded-md"
            />
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block font-medium mb-1">
            Notes <span className="text-red-500">*</span>
          </label>
          <textarea
            name="note"
            value={formData.note}
            onChange={handleChange}
            rows={3}
            className="w-full border p-2 rounded-md"
            placeholder="Describe your pet's condition so our specialists can provide the best support."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md"
        >
          Register Service
        </button>
      </form>
    </div>
  );
};

export default Boarding;
