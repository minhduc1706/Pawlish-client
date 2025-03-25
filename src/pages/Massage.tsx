const Massage = () => {
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
        / Pet Massage Service
      </nav>

      {/* Header */}
      <header className="mb-6">
        <h1 className="text-[37px] font-bold mb-2">
          <strong>Pet Massage Service</strong>
        </h1>
        <p className="text-[21px] font-semibold mt-2">
          The best pet massage service to enhance relaxation and well-being
        </p>
      </header>

      {/* Introduction */}
      <section className="mb-6">
        <p className="text-[21px] text-gray-700">
          Welcome to <strong>PAWLISH</strong> – our professional pet massage
          service designed to provide ultimate relaxation and stress relief for
          your beloved pets.
        </p>
        <p className="text-[21px] text-gray-700 mt-2">
          Massage therapy is an excellent way to improve blood circulation,
          relieve muscle tension, and enhance your pet’s overall well-being.
          Whether your pet is active, elderly, or recovering from an injury, our
          trained staff ensures the best care.
        </p>
        <img
          src="https://www.rover.com/blog/wp-content/uploads/dog-massage.jpg"
          alt="Illustration image"
          className="w-full rounded-lg mt-4"
        />
        <img
          src="https://petwellbeing.com/cdn/shop/articles/iStock-1273269534-1_1100x.jpg?v=1706750578"
          alt="Illustration image"
          className="w-full rounded-lg mt-4"
        />
      </section>

      {/* Massage Services */}
      <header className="text-[37px] font-bold mb-2"></header>
      <p className="text-[21px] text-gray-700 mb-6">
        <strong>PAWLISH</strong> offers a variety of massage services tailored
        to meet your pet’s needs, including:
      </p>
      <ul className="list-disc ml-5 text-[21px] text-gray-700">
        <li className="text-[17px] mb-2">Full-body relaxation massage</li>
        <li className="text-[17px] mb-2">
          Joint and muscle pain relief massage
        </li>
        <li className="text-[17px] mb-2">
          Aromatherapy massage for stress reduction
        </li>
        <li className="text-[17px] mb-2">Gentle massage for senior pets</li>
        <li className="text-[17px] mb-2">
          Post-exercise muscle recovery massage
        </li>
        <li className="text-[17px] mb-2">
          Hydrotherapy massage for relaxation
        </li>
      </ul>
      <img
        src="https://spca.bc.ca/wp-content/uploads/2023/07/relaxed-small-white-dog-enjoying-a-massage.jpg"
        alt="Pet massage service"
        className="w-full rounded-lg mt-4"
      />

      {/* Why choose PET SERVICE */}
      <section className="mb-6">
        <h1 className="text-[37px] font-bold mb-2">
          <strong>Why Choose PAWLISH?</strong>
        </h1>
        <ul className="list-disc ml-5 text-[21px] text-gray-700">
          <li className="text-[17px] mb-2">
            Trained and certified pet massage therapists
          </li>
          <li className="text-[17px] mb-2">
            Customized massage techniques for different breeds and ages
          </li>
          <li className="text-[17px] mb-2">
            Use of high-quality essential oils for relaxation
          </li>
          <li className="text-[17px] mb-2">
            Safe and stress-free environment for your pet
          </li>
          <li className="text-[17px] mb-2">
            Flexible scheduling with home service options
          </li>
          <li className="text-[17px] mb-2">
            Affordable pricing with regular promotions
          </li>
          <li className="text-[17px] mb-2">24/7 support and consultation</li>
        </ul>
        <img
          src="https://thumbs.dreamstime.com/b/waiting-my-massage-29259026.jpg"
          alt="Why choose PET SERVICE"
          className="w-full rounded-lg mt-4"
        />
      </section>

      <img
        src="https://www.petsecure.com.au/wp-content/uploads/2019/05/Dog-grooming.jpg"
        alt="Achievements and customers"
        className="w-full rounded-lg mt-4"
      />

      {/* Contact */}
      <section className="mb-6">
        <h2 className="text-[30px] font-bold mb-2">Contact us now</h2>
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

export default Massage;
