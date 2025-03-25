const FleaTreatment = () => {
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
          href="http://localhost:5174/services/Grooming"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Services
        </a>{" "}
        / Flea Treatment for Pets
      </nav>

      {/* Header */}
      <header className="mb-6">
        <h1 className="text-[37px] font-bold mb-2">
          <strong>Flea Treatment for Pets</strong>
        </h1>
        <p className="text-[21px] font-semibold mt-2">
          Effective and professional flea treatment services at PAWLISH
        </p>
      </header>

      {/* Introduction */}
      <section className="mb-6">
        <p className="text-[21px] text-gray-700">
          Welcome to <strong>PAWLISH</strong> – your trusted provider of flea
          treatment services, ensuring your pet stays healthy and free from
          parasites.
        </p>
        <p className="text-[21px] text-gray-700 mt-2">
          Fleas can cause severe irritation, itching, and skin infections in
          pets. PAWLISH offers professional flea treatment services that
          eliminate fleas while keeping your pet comfortable and happy.
        </p>
        <img
          src="https://www.totalveterinarycare.com/wp-content/uploads/2018/02/Flea-and-Tick-Blog-Image.jpg"
          alt="Illustration image"
          className="w-full rounded-lg mt-4"
        />
        <img
          src="https://bostonroadac.com/wp-content/uploads/2021/01/ticks.jpg"
          alt="Illustration image"
          className="w-full rounded-lg mt-4"
        />
      </section>

      {/* Flea Treatment Services */}
      <header className="text-[37px] font-bold mb-2"></header>
      <p className="text-[21px] text-gray-700 mb-6">
        <strong>PAWLISH</strong> provides expert flea treatment services using
        safe and effective methods to eliminate fleas and prevent
        re-infestation.
      </p>
      <p className="text-[21px] text-gray-700 mb-4">
        Our flea treatment services include:
      </p>
      <ul className="list-disc ml-5 text-[21px] text-gray-700">
        <li className="text-[17px] mb-2">Comprehensive flea removal baths</li>
        <li className="text-[17px] mb-2">
          Specialized anti-flea shampoo application
        </li>
        <li className="text-[17px] mb-2">Flea combing and fur inspection</li>
        <li className="text-[17px] mb-2">
          Skin treatment for flea-related irritation
        </li>
        <li className="text-[17px] mb-2">
          Preventive flea repellent application
        </li>
        <li className="text-[17px] mb-2">
          Post-treatment monitoring and follow-ups
        </li>
      </ul>
      <img
        src="https://uk.frontline.com/sites/default/files/2023-01/Cat-Pipette-Spoke-44-D-1440x668.jpg"
        alt="Flea treatment service"
        className="w-full rounded-lg mt-4"
      />

      {/* Why choose PAWLISH? */}
      <section className="mb-6">
        <h1 className="text-[37px] font-bold mb-2">
          <strong>Why Choose PAWLISH?</strong>
        </h1>
        <ul className="list-disc ml-5 text-[21px] text-gray-700">
          <li className="text-[17px] mb-2">
            Highly trained pet care professionals
          </li>
          <li className="text-[17px] mb-2">
            Safe and non-toxic flea treatment products
          </li>
          <li className="text-[17px] mb-2">
            Personalized treatment plans for each pet
          </li>
          <li className="text-[17px] mb-2">
            Competitive pricing with frequent promotions
          </li>
          <li className="text-[17px] mb-2">
            24/7 customer support and consultation
          </li>
          <li className="text-[17px] mb-2">
            Home service available for maximum convenience
          </li>
        </ul>
        <img
          src="https://www.shutterstock.com/image-vector/veterinary-treatment-care-pets-health-260nw-2443905863.jpg"
          alt="Why choose PAWLISH"
          className="w-full rounded-lg mt-4"
        />
      </section>

      <img
        src="https://media.istockphoto.com/id/1257497830/vector/illustration-of-a-dog-and-a-cat-repelling-pests-on-a-white-background.jpg?s=612x612&w=0&k=20&c=jDQsT0cGt0jAHmvVOJfOpp2sUE-_Rs92vjFAlEknQMA="
        alt="Achievements and customers"
        className="w-full rounded-lg mt-4"
      />

      {/* Contact */}
      <section className="mb-6">
        <h2 className="text-[30px] font-bold mb-2">Contact Us Now</h2>
        <p className="text-[20px] text-gray-700">
          24/7 Hotline:<strong> 0898 520 760</strong>
        </p>
        <p className="text-[20px] text-gray-700">
          Email: <strong> pawlish@gmail.com</strong>
        </p>
      </section>
    </div>
  );
};
export default FleaTreatment;
