import { User } from "@/interfaces/User";
import { useState } from "react";

const Haircut = () => {
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
          href="http://localhost:5173/services/Health Check"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Pet Spa Services HCM
        </a>{" "}
        / HairCut
      </nav>

      <h1 className="text-[35px] font-bold mb-4">HairCut</h1>

      <p className="text-[21px] mb-6">
        Is your pet in need of a professional and stylish haircut? PAWLISH
        offers expert grooming services with a team of experienced staff
        dedicated to keeping your pet looking and feeling its best. Our Haircut
        & Styling Package ensures a well-groomed, healthy coat with a precise
        and gentle grooming process.
      </p>

      <h2 className="text-[33px] font-bold mt-4 mb-2">
        5-STEP HAIRCUT & STYLING PACKAGE
        <img
          src="https://img.freepik.com/premium-vector/professional-groomer-styling-dogs-haircut-perfectly-pet-salon_1322560-1166.jpg"
          alt="Price List"
          className="w-full rounded-lg mb-4"
        />
      </h2>
      <ul className="list-disc ml-5">
        <div className="text-[20px]">
          <strong>Step 1:</strong> Consultation & Coat Assessment
        </div>
        <div className="text-[20px]">
          <strong>Step 2:</strong> Gentle Brushing & Detangling
        </div>
        <div className="text-[20px]">
          <strong>Step 3:</strong> Precision Haircut & Styling
        </div>
        <div className="text-[20px]">
          <strong>Step 4:</strong> Nail Trimming & Paw Care
        </div>
        <div className="text-[20px]">
          <strong>Step 5:</strong> Final Touches & Fragrance Spray
        </div>
      </ul>

      <h2 className="text-[35px] font-bold mt-4 mb-2">
        Benefits of Regular Pet Haircuts
      </h2>
      <ul className="list-disc ml-5">
        <li className="text-[20px]">
          Helps maintain a clean and stylish appearance for your pet.
        </li>
        <li className="text-[20px]">
          Prevents fur matting and skin irritation.
        </li>
        <li className="text-[20px]">
          Reduces excessive shedding and keeps fur manageable.
        </li>
        <li className="text-[20px]">
          Promotes better hygiene and overall health.
        </li>
        <li className="text-[20px]">
          Enhances comfort, especially in warm weather.
        </li>
      </ul>

      <h2 className="text-[35px] font-bold mt-4 mb-2">
        PAWLISH's Bath & Hygiene Price List
      </h2>
      <ul className="list-disc ml-5">
        <li className="text-[17px] mb-2">
          Ear Cleaning: 70,000 - 150,000 VND (30-45 minutes)
        </li>
        <li className="text-[17px] mb-2">
          Nail Trimming: 50,000 - 100,000 VND (30 minutes)
        </li>
        <li className="text-[17px] mb-2">
          Teeth Cleaning: 150,000 - 200,000 VND (45-60 minutes)
        </li>

        <li className="text-[17px] mb-2">
          Haircut: 350,000 - 500,000 VND (30-60 minutes)
        </li>
      </ul>

      <h2 className="text-[35px] font-bold mt-4 mb-2">
        Reference Images from Pet Service
      </h2>
      <img
        src="https://images.keizai.biz/fukushima_keizai/photonews/1652934581_b.jpg"
        alt="Reference Image"
        className="w-full rounded-lg mb-4"
      />
      <img
        src="https://luckydawgsalongrooming.com/wp-content/uploads/2017/10/Mobile-Dog-Grooming-___.jpg"
        alt="Reference Image"
        className="w-full rounded-lg mb-4"
      />
      <img
        src="https://www.poshpoochperth.com.au/wp-content/uploads/2017/01/Image-3-1.jpg"
        alt="Reference Image"
        className="w-full rounded-lg mb-4"
      />

      <p className="text-[35px] font-bold">Explore Some Services:</p>
      <ul className="list-disc ml-5">
        <li className="text-[21px]">
          1:{" "}
          <a
          // href=""
          // className="text-blue-500 underline hover:text-blue-700"
          // target="_blank"
          // rel="noopener noreferrer"
          >
            Teeth Cleaning
          </a>
        </li>
        <li className="text-[21px]">
          2.{" "}
          <a
            href="http://localhost:5173/services/FleaTreatment"
            className="text-blue-500 underline hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Flea Treatment
          </a>
        </li>
        <li className="text-[21px]">
          3.{" "}
          <a
            href="http://localhost:5173/services/HealthCheck"
            className="text-blue-500 underline hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Health Checkup
          </a>
        </li>
        <li className="text-[21px]">
          4.{" "}
          <a
          // // href=""
          // className="text-blue-500 underline hover:text-blue-700"
          // target="_blank"
          // rel="noopener noreferrer"
          >
            Nail Trimming
          </a>
        </li>
      </ul>

      {/* Registration Form */}
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

export default Haircut;
