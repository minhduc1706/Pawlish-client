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
      alert("Failed to send request! Please try again.");
    }
  };

  return (
    <div className="max-w-[66vw] w-2/3 mx-auto p-6 bg-white rounded-xl shadow-md">
      <nav className="text-sm mb-4 text-gray-500">
        Home / Pet Spa Services HCM – Comprehensive care for your beloved pet
      </nav>
      <header className="text-[35px] font-bold mb-4">
        Pet Spa Services HCM – Comprehensive care for your beloved pet
      </header>

      <p className="text-[21px] mb-6">
        Pet spa services are becoming increasingly popular, showing pet owners'
        care for their beloved pets. In today's busy modern life, providing
        comprehensive care for pets faces many challenges. Understanding this,
        pet spas have emerged, offering comprehensive health and beauty care
        solutions for pets. PAWLISH is proud to be a trusted destination,
        accompanying you on your pet care journey.
      </p>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR05jXEidlpRjNkkWW3SgFtgG92KXWGil1eQ&s"
        alt="pet 5"
        className="w-full rounded-lg mb-4"
      />

      <header className="text-[35px] font-bold mb-4">
        Popular pet spa services at PAWLISH
      </header>
      <div>
        Pet Service offers 5 spa packages to help you easily choose the right
        service for your pet:
        <li>
          <a
            href="http://localhost:5173/services/Combo1"
            className="text-blue-500 underline hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Package 1: Bath & dry – hygiene
          </a>
        </li>
        <li>Package 2: Grooming and hygiene</li>
        <li>
          <a
            href="http://localhost:5173/services/Combo3"
            className="text-blue-500 underline hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Package 3: Bath & dry – hygiene – grooming
          </a>
        </li>
        <li>
          <a
            href="http://localhost:5173/services/Combo4"
            className="text-blue-500 underline hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Package 4: Shaving – bath & dry – hygiene
          </a>
        </li>
        <li>Package 5: Shaving – hygiene</li>
      </div>
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
        src="/public/service-info.png"
        alt="Promotions"
        className="w-full rounded-lg mb-4"
      />

      <div>
        <p className="mb-2">
          In addition to basic spa services, Pet Service also offers premium spa
          experiences such as:
        </p>
        <ul className="list-disc ml-5">
          <li className="mb-2">Leading at-home pet services in HCMC.</li>
          <li className="mb-2">
            Tick and flea treatment: Using safe, effective specialized
            medications to keep your pet healthy.
          </li>
          <li className="mb-2">Pet vaccination.</li>
          <li className="mb-2">Pet Hotel – Accommodation for pets.</li>
          <li className="mb-2">
            Pet Shop – Providing products and accessories for pets.
          </li>
          <li className="mb-2">
            Pet Service is committed to providing professional, dedicated spa
            services for pets. We ensure absolute safety in every service.
          </li>
        </ul>
        <p className="mt-4">
          Pet Service is committed to providing professional, dedicated spa
          services for pets. We ensure absolute safety in every service.
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
      <img
        src="/public/price-list.png"
        alt="Promotions"
        className="w-full rounded-lg mb-4"
      />

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

      <h2 className="text-[25px] font-bold mt-4 mb-2">Additional Costs:</h2>
      <ul className="list-disc ml-5">
        <li className="mb-2">
          Fur detangling surcharge: 100,000đ – 300,000đ (depending on severity)
        </li>
        <li className="mb-2">
          Fungal, tick, flea bath surcharge: 50,000đ – 200,000đ (depending on
          severity)
        </li>
      </ul>

      <header className="text-[35px] font-bold mb-4">
        Answering frequently asked questions about pet spa services at PAWLISH
      </header>
      <div>
        Pet Service understands that you may have many concerns when choosing
        spa services for your pet. Below are answers to frequently asked
        questions to help you feel more confident when using our services:
      </div>
      <h2 className="text-[25px] font-bold mt-4 mb-2">
        1. Are spas good for dogs and cats?
      </h2>
      <div>
        Absolutely! Spa services not only keep pets clean and fragrant but also
        offer many health benefits such as:
      </div>
      <ul className="list-disc ml-5">
        <li className="mb-2">
          Removing dirt and parasites: Helps prevent skin and fur diseases,
          ticks, and fleas.
        </li>
        <li className="mb-2">
          Maintaining healthy skin and fur: Massage with specialized shampoos
          and nourishing oils helps keep fur shiny, reduces shedding, and
          stimulates new fur growth.
        </li>
        <li className="mb-2">
          Early detection of health issues: During the spa process, technicians
          can detect early problems with skin, fur, ears, and nails for timely
          treatment.
        </li>
        <li className="mb-2">
          Helping pets relax and feel comfortable: Sounds, scents, and gentle
          care during the spa process help reduce stress and make pets more
          comfortable.
        </li>
        <img
          src="https://luckydawgsalongrooming.com/wp-content/uploads/2018/04/cat-grooming-services.jpeg"
          alt="Promotions"
          className="w-full rounded-lg mb-4"
        />
      </ul>

      <h2 className="text-[25px] font-bold mt-4 mb-2">
        2. How should I choose pet spa services?
      </h2>
      <div>
        To choose suitable spa services, you should consider the following
        factors:
      </div>
      <ul className="list-disc ml-5">
        <li className="mb-2">
          Pet needs: Fur type, skin condition, health, pet's temperament.
        </li>
        <li className="mb-2">
          Spa reputation: Choose reputable spas with experienced technicians
          using quality, safe products.
        </li>
        <li className="mb-2">
          Pricing and service policies: Compare price lists, promotions, and
          customer care policies at different spa facilities.
        </li>
      </ul>

      <h2 className="text-[25px] font-bold mt-4 mb-2">
        3. How do I book pet spa services at PAWLISH?
      </h2>
      <ul className="list-disc ml-5">
        <li className="mb-2">
          Direct contact: Call the hotline at 0898 520 760 for consultation and
          quick booking.
        </li>
        <li className="mb-2">
          Book via website: Visit pawlish.com and fill out the registration
          form.
        </li>
      </ul>

      <h2 className="text-[25px] font-bold mt-4 mb-2">
        4. Does PAWLISH provide pet pick-up and drop-off services?
      </h2>
      <div>
        Yes, PAWLISH provides home pick-up and drop-off services at reasonable
        rates. You can contact us directly for more details about service areas
        and costs.
      </div>

      <h2 className="text-[25px] font-bold mt-4 mb-2">
        5. My pet is very afraid of going to the spa. Does Pet Service have any
        solutions for this issue?
      </h2>
      <div>
        PAWLISH understands pet psychology and always tries to create the most
        comfortable environment for them. Our team of technicians is
        well-trained and experienced in handling pets. Additionally, we use
        support methods such as music and relaxing essential oils to help pets
        feel more comfortable.
      </div>
      <img
        src="https://pawspace.in/wp-content/uploads/2023/12/Pawspace-why-choose-cat-grooming.png"
        alt="Promotions"
        className="w-full rounded-lg mb-4"
      />

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
      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="name" className="block text-[25px] font-medium mb-2">
          Service Request <span className="text-red-500">*</span>
        </label>
        <div>
          Please select the service you need so PawLish can prepare and serve
          your pets in the most thorough way!
        </div>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded-md"
        >
          <option value="Tắm vệ sinh tại nhà">Home Bath and Hygiene</option>
          <option value="Cắt tỉa lông tại nhà">Home Grooming</option>
          <option value="Thú y tại nhà">Home Veterinary</option>
          <option value="Khách sạn thú cưng">Pet Hotel</option>
          <option value="Combo tắm tháng 4 lần">
            Monthly Package: 4 Baths
          </option>
          <option value="Combo tắm tháng 8 lần">
            Monthly Package: 8 Baths
          </option>
          <option value="Combo 1: Tắm  sấy + Vệ sinh">
            Package 1: Bath & Dry + Hygiene
          </option>
          <option value="Combo 2: Cắt tỉa + Vệ sinh">
            Package 2: Grooming + Hygiene
          </option>
          <option value="Combo 3: Tắm  sấy + Vệ sinh + Cắt tỉa lông">
            Package 3: Bath & Dry + Hygiene + Grooming
          </option>
          <option value="Combo 4: Tắm Sấy + Vệ Sinh + Cạo lông">
            Package 4: Bath & Dry + Hygiene + Shaving
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
          placeholder="Enter a description of your pet's condition so our specialists can help you best."
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Register for Service
        </button>
      </form>
    </div>
  );
};

export default PetSpaServices;
