import { User } from "@/interfaces/User";
import { useState } from "react";

const Grooming = () => {
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
        Home / Pet Grooming Services – Professional Grooming for Your Pet
      </nav>
      <header className="text-[35px] font-bold mb-4">
        Pet Grooming Services – Professional Grooming for Your Pet
      </header>

      <p className="text-[21px] mb-6">
        Grooming services are essential for maintaining your pet's health,
        hygiene, and overall well-being. Regular grooming not only keeps your
        pet looking great but also prevents potential skin conditions and
        infections.
      </p>
      <p className="text-[21px] mb-6">
        With the hustle and bustle of modern life, pet owners often struggle to
        find time for proper pet grooming. Understanding this, PAWLISH offers
        professional pet grooming services, ensuring your furry friend receives
        top-tier care. From bathing and brushing to nail trimming and ear
        cleaning, our skilled groomers provide a stress-free and relaxing
        experience for your pet.
      </p>

      <img
        src="https://assets3.thrillist.com/v1/image/3059921/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70"
        alt="pet 5"
        className="w-full rounded-lg mb-4"
      />

      <header className="text-[35px] font-bold mb-4">
        Popular pet spa services at PAWLISH
      </header>
      <ul className="list-disc ml-5">
        <li className="text-[17px] mb-2">
          <strong>Ear Cleaning:</strong> Gently removes dirt and wax buildup to
          prevent infections and keep your pet's ears healthy.
        </li>
        <li className="text-[17px] mb-2">
          <strong>Basic Training:</strong> Teaches essential commands and good
          behavior to improve obedience and communication with your pet.
        </li>
        <li className="text-[17px] mb-2">
          <strong>Health Checkup:</strong> A comprehensive examination to detect
          potential health issues and ensure your pet's well-being.
        </li>
        <li className="text-[17px] mb-2">
          <strong>Overnight Boarding:</strong> A safe and comfortable place for
          your pet to stay overnight with professional care.
        </li>
        <li className="text-[17px] mb-2">
          <strong>Flea Treatment:</strong> Effectively eliminates fleas and
          prevents future infestations to keep your pet itch-free and happy.
        </li>
      </ul>
      <img
        src="https://www.petangel.com.au/wp-content/uploads/2022/06/Pet-Angel-Blog-2022-14-1080x648.png"
        alt="pet 5"
        className="w-full rounded-lg mb-4"
      />
      <div>
        Each service package is meticulously designed using specialized, safe
        products. Pet Service aims to provide the best care for your pets.
      </div>

      <header className="text-[35px] font-bold mb-4">
        Other premium spa services
      </header>
      <img
        src="https://www.shutterstock.com/image-vector/dog-spa-grooming-service-concept-600nw-2147151405.jpg"
        alt="Promotions"
        className="w-full rounded-lg mb-4"
      />

      <div>
        <p className="mb-2">
          In addition to basic spa services, PAWLISH also offers premium pet
          care experiences such as:
        </p>
        <ul className="list-disc ml-5">
          <li className="mb-2">
            <strong>Pet Boarding:</strong> A safe, comfortable, and
            well-supervised space for your pet while you're away, ensuring they
            feel at home.
          </li>
          <li className="mb-2">
            <strong>Pet Massage:</strong> A relaxing and therapeutic massage to
            improve blood circulation, reduce stress, and enhance your pet’s
            well-being.
          </li>
          <li className="mb-2">
            <strong>Training Pet:</strong> Professional training programs to
            teach obedience, socialization, and essential commands for better
            behavior.
          </li>
          <li className="mb-2">
            <strong>Treatment Pet:</strong> Specialized care for pets with skin
            conditions, allergies, or minor health issues, ensuring their
            comfort and recovery.
          </li>
          <li className="mb-2">
            Pet Shop – Providing products and accessories for pets.
          </li>
          <li className="mb-2">
            <strong>Health Check:</strong> A thorough health examination to
            detect any underlying health concerns and keep your pet in top
            condition.
          </li>
        </ul>
        <p className="mt-4">
          PAWLISH is committed to delivering top-tier, professional pet care
          services. We prioritize the health, safety, and happiness of every
          pet, ensuring they receive the best care possible.
        </p>
      </div>

      <header className="text-[35px] font-bold mb-4">
        Benefits of using pet spa services at PAWLISH
      </header>

      <div>
        <p className="mb-2">
          Using professional pet spa services at Pet Service brings many
          practical benefits for both you and your pet:
        </p>
        <ul className="list-disc ml-5">
          <li className="mb-2">Ensuring hygiene and health for pets</li>
          <li className="mb-2">
            Enhancing aesthetics, helping pets feel confident and attractive
          </li>
          <li className="mb-2">Saving time and effort for pet owners</li>
          <li className="mb-2">Professional environment, modern equipment</li>
          <li className="mb-2">Experienced staff who love animals</li>
          <li className="mb-2">
            Special care regimen, commitment to pet safety
          </li>
        </ul>
      </div>

      <header className="text-[35px] font-bold mb-4">
        Price list for pet spa services at PAWLISH
      </header>
      <h2 className="text-[27px] font-bold mb-4">Addition Cost:</h2>
      <ul className="list-disc ml-5">
        <li className="text-[17px] mb-2">
          Ear Cleaning: 70,000 - 150,000 VND (30-45 minutes)
        </li>
        <li className="text-[17px] mb-2">
          Basic Training: 500,000 - 600,000 VND (60-90 minutes)
        </li>
        <li className="text-[17px] mb-2">
          Health Checkup: 350,000 - 500,000 VND (45-60 minutes, depending on
          severity)
        </li>
        <li className="text-[17px] mb-2">
          Overnight Boarding: 700,000 VND (depending on days)
        </li>
        <li className="text-[17px] mb-2">
          Flea Treatment: 250,000 VND (30-60 minutes)
        </li>
      </ul>
      <div>
        <p className="mb-2">Note:</p>
        <ul className="list-disc ml-5">
          <li className="mb-2">
            The price list is for reference only. The exact price will be
            advised after staff consultation and assessment of the pet's actual
            condition.
          </li>
          <li className="mb-2">
            Service prices may vary depending on the size, breed, and fur
            condition of the pet.
          </li>
        </ul>
      </div>

      <header className="text-[40px] font-extrabold mb-6 ">
        Frequently Asked Questions About Pet Grooming Services at PAWLISH
      </header>
      <div className="text-[20px] text-gray-700 leading-relaxed mb-6">
        PAWLISH understands that you may have concerns when choosing grooming
        services for your pet. Below are answers to frequently asked questions
        to help you feel more confident when using our services:
      </div>

      <h2 className="text-[28px] font-bold mt-6 mb-3 ">
        1. Why is grooming important for dogs and cats?
      </h2>
      <div className="text-[18px] text-gray-700 leading-relaxed">
        Regular grooming is essential for keeping pets healthy and comfortable.
        Grooming offers multiple benefits such as:
      </div>
      <ul className="list-disc ml-6 mt-3 text-[18px] text-gray-700 leading-relaxed">
        <li className="mb-2 font-medium">
          Prevents matting and tangles: Regular brushing helps remove dead hair
          and prevents painful matting.
        </li>
        <li className="mb-2 font-medium">
          Maintains healthy skin and coat: Proper grooming stimulates natural
          oil production, keeping fur shiny and reducing shedding.
        </li>
        <li className="mb-2 font-medium">
          Early detection of health issues: Groomers can identify potential skin
          conditions, infections, or parasites early.
        </li>
        <li className="mb-2 font-medium">
          Improves hygiene and comfort: Grooming includes ear cleaning, nail
          trimming, and sanitary trims to maintain overall cleanliness.
        </li>
      </ul>
      <img
        src="https://luckydawgsalongrooming.com/wp-content/uploads/2018/04/cat-grooming-services.jpeg"
        alt="Grooming Services"
        className="w-full rounded-lg mt-6 shadow-lg"
      />

      <h2 className="text-[28px] font-bold mt-6 mb-3">
        2. How do I choose the right grooming service for my pet?
      </h2>
      <div className="text-[18px] text-gray-700 leading-relaxed">
        To choose the best grooming service, consider the following factors:
      </div>
      <ul className="list-disc ml-6 mt-3 text-[18px] text-gray-700 leading-relaxed">
        <li className="mb-2 font-medium">
          Your pet's coat type and grooming needs: Some pets require frequent
          grooming, while others need only occasional trims.
        </li>
        <li className="mb-2 font-medium">
          Experience and reputation: Choose a grooming service with trained
          professionals who use safe, high-quality products.
        </li>
        <li className="mb-2 font-medium">
          Service options and pricing: Look for services that fit your pet’s
          needs and compare pricing and policies.
        </li>
      </ul>

      <header className="text-[35px] font-bold mb-4">
        Summary: PAWLISH – Caring for Your Pet with Love!
      </header>
      <div className="mb-3">
        With experienced technicians, professional procedures, and safe
        products, Pet Service proudly offers quality spa services to keep your
        pet clean, healthy, and radiant.
      </div>
      <div className="mb-3">
        Let PAWLISH accompany you on your pet care journey!
      </div>
      <div className="mb-3">Contact us now:</div>
      <ul className="list-disc ml-5">
        <li className="mb-2">24/7 Hotline: 0898 520 760</li>
        <li className="mb-2">Email: pawlish@gmail.com</li>
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

export default Grooming;
