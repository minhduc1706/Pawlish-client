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
      <h2 className="text-[20px] mb-2">
        Up to 20% discount for long-term stays. Pets are allowed to play 1-2
        times per day (30-60 minutes). Stays over 5 days get a 50% discount on
        bathing fees; stays over 7 days get a free bath and grooming session. If
        you board two pets at once, the second pet gets a 50,000 VND discount.
      </h2>

      <h1 className="text-[35px] font-bold mb-4">
        Why is PAWLISH the most trusted Pet Hotel?
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
        What makes PAWLISH's Pet Hotel services special?
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
        Benefits of Choosing PAWLISH’s Pet Hotel
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
        PAWLISH – The Most Trusted and High-Quality Pet Hotel Address
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
            Pet hotel from 150,000-300,000 VND/day, completely transparent.
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
        Tips for Choosing a Pet Hotel from PAWLISH
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
        Tips for Choosing a Pet Hotel from PAWLISH
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
        Pet Care Process at PAWLISH's Pet Hotel
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
        Pet Hotel Trends 2025 at PAWLISH
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
        Reasons to Choose Pet Hotel at PAWLISH Today
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
      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="name" className="block text-[35px] font-medium mb-2">
          Service Request <span className="text-red-500">*</span>
        </label>
        <div>
          Please select a service you need so PawLish can prepare and serve your
          pets in the most attentive way!
        </div>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded-md"
        >
          <option value="Home Pet Grooming">Home Pet Grooming</option>
          <option value="Home Pet Trimming">Home Pet Trimming</option>
          <option value="Home Vet Service">Home Vet Service</option>
          <option value="Pet Hotel">Pet Hotel</option>
          <option value="Bath Combo 4 times/month">
            Bath Combo 4 times/month
          </option>
          <option value="Bath Combo 8 times/month">
            Bath Combo 8 times/month
          </option>
          <option value="Combo 1: Bath + Dry + Hygiene">
            Combo 1: Bath + Dry + Hygiene
          </option>
          <option value="Combo 2: Trimming + Hygiene">
            Combo 2: Trimming + Hygiene
          </option>
          <option value="Combo 3: Bath + Dry + Hygiene + Trimming">
            Combo 3: Bath + Dry + Hygiene + Trimming
          </option>
          <option value="Combo 4: Bath + Dry + Hygiene + Shaving">
            Combo 4: Bath + Dry + Hygiene + Shaving
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
        <label htmlFor="name" className="block text-[20px] font-medium mb-2">
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
              placeholder="Enter address"
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
              placeholder="Enter email"
            />
          </div>
        </div>

        <label htmlFor="name" className="block text-[20px] font-medium mb-2">
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
        <label htmlFor="name" className="block text-[20px] font-medium mb-2">
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
        <label htmlFor="name" className="block text-[20px] font-medium mb-2">
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
        <label htmlFor="name" className="block text-[20px] font-medium mb-2">
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

        <label htmlFor="name" className="block text-[20px] font-medium mb-2">
          Notes<span className="text-red-500">*</span>
        </label>
        <textarea
          name="note"
          value={formData.note}
          onChange={handleChange}
          rows={3}
          className="w-full border p-2 rounded-md"
          placeholder="Enter a description of your pet's condition so our specialists can assist you better."
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

export default PetHotelPage;
