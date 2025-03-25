import { User } from "@/interfaces/User";
import React, { useState } from "react";

const HealthCheck = () => {
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
          Pet Health Check Services
        </a>{" "}
        / Comprehensive Pet Health Check
      </nav>

      <h1 className="text-[35px] font-bold mb-2">
        Comprehensive Pet Health Check
      </h1>

      <h2 className="text-[35px] font-bold mb-2">
        Why Regular Health Checks Are Important
      </h2>

      <div>
        <p className="mb-2">
          Regular health check-ups help ensure your pet stays healthy and
          detects potential issues early. PAWLISH provides professional health
          screening services, including:
        </p>
        <ul className="list-disc ml-5">
          <li className="mb-2">Full-body health examinations</li>
          <li className="mb-2">Vaccination and deworming services</li>
          <li className="mb-2">Nutritional and dietary consultation</li>
          <li className="mb-2">Early disease detection and preventive care</li>
          <li className="mb-2">Pet dental care and hygiene</li>
        </ul>
      </div>

      <img
        src="https://img.freepik.com/free-vector/vet-clinic-abstract-concept-vector-illustration-vet-hospital-surgery-vaccination-services-animal-clinic-pets-medical-care-veterinary-service-diagnostic-equipment-abstract-metaphor_335657-1362.jpg"
        alt="Pet Health Check Service"
        className="w-full rounded-lg mt-4"
      />

      <h2 className="text-[35px] font-bold mb-2">
        PAWLISH Pet Health Check Benefits
      </h2>
      <ul className="list-disc ml-5 text-[20px] text-gray-700">
        <li>Early detection of health issues</li>
        <li>Personalized care plans for pets</li>
        <li>Comprehensive diagnostic services</li>
        <li>Expert veterinary consultation</li>
        <li>Preventive health treatments</li>
        <li>Convenient home check-up options</li>
      </ul>

      <img
        src="https://us.123rf.com/450wm/vikarisovaka/vikarisovaka2308/vikarisovaka230800017/210704938-veterinary-doctor-examines-the-cat-pets-in-a-veterinary-clinic-flat-vector-illustration.jpg?ver=6"
        alt="Pet Health Check Service"
        className="w-full rounded-lg mt-4"
      />
      <section className="mb-6">
        <h2 className="text-[35px] font-bold mb-2">
          PAWLISH – Contact Information
        </h2>
        <div className="text-[20px]">Contact PAWLISH for more details:</div>
        <p className="text-[17px] text-gray-700">24/7 Hotline: 0898 520 760</p>
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

export default HealthCheck;
