const CutPetHairPage = () => {
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
          href="http://localhost:5174/services/PetHomeCare"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Services
        </a>{" "}
        / Pet Grooming At Home
      </nav>

      {/* Header */}
      <header className="mb-6">
        <h1 className="text-[37px] font-bold mb-2">
          <strong>Pet Grooming At Home</strong>
        </h1>
        <p className="text-[21px] text-gray-700 mt-2">
          Contact us now to have your pet looking neat and stylish right in your
          own home with our grooming and styling service... free consultation
          available 24 hours
        </p>
        <p className="text-[21px] text-gray-700 mt-2">
          Are you looking for <strong>pet grooming services at home </strong> to
          beautify your pet without going out? <strong>PAWLISH</strong> is the
          top choice. We bring professional grooming services to your home. With
          our experienced team, PAWLISH ensures your "boss" is always clean and
          tidy. Discover the best service today!
        </p>
        <img
          src="https://images.squarespace-cdn.com/content/v1/5a20427d90badee8e93f47e5/1585094959412-DFRQSA32PQ8ROOATBS99/IMG_1692.jpg"
          alt=""
          className="w-full rounded-lg mt-4"
        />
      </header>

      {/* Service Introduction */}
      <section className="mb-6">
        <h1 className="text-[35px] font-bold mb-2">
          <strong>Why Choose PAWLISH for At-Home Pet Grooming Services?</strong>
        </h1>
        <p className="text-[21px] text-gray-700">
          Ho Chi Minh City is a bustling city with millions of pet lovers. The
          demand for <strong>at-home pet grooming </strong> is constantly
          increasing, especially among busy people or those who want their pets
          cared for at home. PAWLISH stands out because of:
        </p>
        <ul className="list-disc ml-5 text-[21px] text-gray-700 mt-2">
          <li>
            Professional team: Staff are well-trained, with expertise in all
            breeds from Poodles, Pomeranians, Corgis, Samoyeds to British cats.
          </li>
          <li>
            Maximum convenience: At-home grooming saves time and reduces stress
            for your pets.
          </li>
          <li>
            Modern technology: Grooming and cleaning tools are sterilized,
            ensuring absolute safety.
          </li>
        </ul>
        <p className="text-[21px] text-gray-700 mt-2">
          PAWLISH is committed to providing high-quality service, helping your
          pet always stay in the best condition.
        </p>
        {/* Image placement */}
        <img
          src="https://kpethouse.com/wp-content/uploads/2021/07/7_orig.jpg"
          alt="Pet grooming service introduction"
          className="w-full rounded-lg mt-4"
        />
      </section>

      {/* Special Services */}
      <section className="mb-6">
        <h1 className="text-[35px] font-bold mb-2">
          <strong>
            What's Special About PAWLISH's At-Home Pet Grooming Service?
          </strong>
        </h1>
        <p className="text-[21px] text-gray-700">
          PAWLISH provides comprehensive{" "}
          <strong>at-home grooming services</strong>, meeting all beauty and
          hygiene needs for your pets:
        </p>

        {/* 1. Pet Grooming */}
        <h3 className="text-[25px] font-semibold mt-4 mb-2">
          <strong>1. At-Home Pet Grooming – Unique Styles</strong>
        </h3>
        <p className="text-[21px] text-gray-700 mb-2">
          We lead in at-home grooming with our styling services:
        </p>
        <ul className="list-disc ml-5 text-[21px] text-gray-700">
          <li>
            At-home pet grooming: Creating beautiful styles like Teddy Bear,
            Lion Cut, or according to personal requests.
          </li>
          <li>
            Professional techniques: Staff use modern scissors and clippers,
            ensuring even trimming without causing pain.
          </li>
          <li>
            Suitable for all pets: From Poodles, Alaskan Malamutes to Persian
            cats, Pet Service handles them all perfectly.
          </li>
        </ul>
        <img
          src="https://www.petprofessional.com.au/wp-content/uploads/2019/11/dog-groomer-king-charles-cavalier-being-brushed.jpg"
          alt="Stylish pet grooming"
          className="w-full rounded-lg mt-4"
        />

        {/* 2. Bath Services */}
        <h3 className="text-[25px] font-semibold mt-4 mb-2">
          <strong>2. At-Home Bathing – Cleanliness at Your Doorstep</strong>
        </h3>
        <p className="text-[21px] text-gray-700 mb-2">
          PAWLISH includes bathing in our at-home grooming services:
        </p>
        <ul className="list-disc ml-5 text-[21px] text-gray-700">
          <li>
            Organic products: Safe shampoos that don't irritate your pet's skin.
          </li>
          <li>Shed control: Reduces pet hair around your home.</li>
          <li>
            Effective odor elimination: Cleans scent glands, keeping your pet
            smelling fresh.
          </li>
        </ul>
        <img
          src="https://maxvets.com/wp-content/uploads/2019/07/ValeDogGrooming-DogBeingGroomed.gif"
          alt="At-home pet bathing"
          className="w-full rounded-lg mt-4"
        />

        {/* 3. Comprehensive Hygiene */}
        <h3 className="text-[25px] font-semibold mt-4 mb-2">
          <strong>3. Comprehensive At-Home Hygiene</strong>
        </h3>
        <p className="text-[21px] text-gray-700 mb-2">
          In addition to grooming, PAWLISH also offers:
        </p>
        <ul className="list-disc ml-5 text-[21px] text-gray-700">
          <li>Nail trimming: Gentle handling, painless, keeping nails neat.</li>
          <li>
            Ear cleaning: Removes dirt, reduces the risk of ear infections.
          </li>
          <li>
            Skin and coat inspection: Early detection of issues such as
            dermatitis or abnormal hair loss.
          </li>
        </ul>
        <img
          src="https://i.ytimg.com/vi/o-ftPI4MAkk/maxresdefault.jpg"
          alt=""
          className="w-full rounded-lg mt-4"
        />
      </section>

      {/* Benefits */}
      <section className="mb-6">
        <h1 className="text-[35px] font-bold mb-2">
          <strong>Benefits of Choosing PAWLISH's At-Home Pet Grooming</strong>
        </h1>
        <p className="text-[21px] text-gray-700 mb-2">
          PAWLISH's at-home services provide many advantages:
        </p>
        <ul className="list-disc ml-5 text-[21px] text-gray-700">
          <li>
            Convenience: No need to travel, PAWLISH comes to you anywhere from
            District 1 to Thu Duc.
          </li>
          <li>
            Pet health: Caring for your pet at home reduces the stress of
            traveling.
          </li>
          <li>
            Time-saving: You can do other things while your pet is being cared
            for.
          </li>
          <li>
            Safety: Clean tools and dedicated staff ensure service quality.
          </li>
        </ul>
        <p className="text-[21px] text-gray-700 mt-2">
          Customers throughout the area trust PAWLISH for our professionalism
          and superior convenience.
        </p>
      </section>

      {/* Reputation */}
      <section className="mb-6">
        <h1 className="text-[35px] font-bold mb-2">
          <strong>PAWLISH – Your Trusted At-Home Pet Grooming Service</strong>
        </h1>
        <p className="text-[21px] text-gray-700 mb-2">
          PAWLISH is beloved because of:
        </p>
        <ul className="list-disc ml-5 text-[21px] text-gray-700">
          <li>Years of experience: Over 4 years serving thousands of pets</li>
          <li>
            Positive feedback: Many customers, including influencers like Dino
            Vu, Minh Du, Quynh Anh Shyn, and Huy Tran choose PAWLISH.
          </li>
          <li>
            Expert staff: Employees are trained to groom pets accurately and
            safely.
          </li>
          <li>
            Reasonable pricing: At-home grooming from 200,000 VND, with
            transparent pricing.
          </li>
        </ul>
        <img
          src="https://th.bing.com/th/id/OIP.gUrNl8Ws9f5_l5iLLmn9PQHaE7?w=800&h=533&rs=1&pid=ImgDetMain"
          alt="PAWLISH reputation"
          className="w-full rounded-lg mt-4"
        />
      </section>

      {/* Process */}
      <section className="mb-6">
        <h1 className="text-[35px] font-bold mb-2">
          <strong>Home Pet Grooming Process from PAWLISH</strong>
        </h1>
        <p className="text-[21px] text-gray-700 mb-2">
          PAWLISH applies a professional process to ensure quality:
        </p>
        <ul className="list-disc ml-5 text-[21px] text-gray-700">
          <li>
            Contact for appointment: Call <strong>0898 520 760</strong> or book
            through PAWLISH Page.
          </li>
          <li>
            Requirement survey: Identify fur style, pet breed, and location at
          </li>

          <li>
            Service execution: Bathing, fur trimming, cleaning as required.
          </li>
          <li>Result delivery: Provide before/after images for your review.</li>
        </ul>
        <p className="text-[21px] text-gray-700 mt-2">
          This process helps PAWLISH serve effectively throughout the
        </p>
      </section>

      {/* Grooming Tips */}
      <section className="mb-6">
        <h1 className="text-[35px] font-bold mb-2">
          <strong>Home Pet Grooming Tips from PAWLISH</strong>
        </h1>
        <p className="text-[21px] text-gray-700 mb-2">
          PAWLISH shares tips to support you:
        </p>
        <ul className="list-disc ml-5 text-[21px] text-gray-700">
          <li>Prepare tools: Combs, specialized scissors from our pet shop.</li>
          <li>
            Brush fur beforehand: Reduce tangles before our staff arrives for
            grooming.
          </li>
          <li>
            Keep your pet comfortable: Create a quiet space for a smooth
            process.
          </li>
        </ul>
        <p className="text-[21px] text-gray-700 mt-2">
          These tips help increase efficiency when using our home grooming
          service
        </p>
        <p className="text-[21px] text-gray-700 mt-2">
          Discover:{" "}
          <a
            href=""
            className="text-blue-500 underline hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pet Services At Home
          </a>{" "}
          to learn more from PAWLISH!
        </p>
      </section>

      {/* 2035 Trends */}
      <section className="mb-6">
        <h1 className="text-[35px] font-bold mb-2">
          <strong>Home Pet Grooming Trends 2035</strong>
        </h1>
        <p className="text-[21px] text-gray-700 mb-2">
          PAWLISH pioneers in home pet grooming in 2035:
        </p>
        <ul className="list-disc ml-5 text-[21px] text-gray-700">
          <li>Hot fur styles: Teddy Bear, Summer Trim lead the trends.</li>
          <li>
            Supporting technology: AI application providing fur style
            consultation via Zalo.
          </li>
          <li>
            All-inclusive service: Combining bathing, trimming, and cleaning in
            one home visit.
          </li>
          <li>
            Wide coverage: From District 1, District 2 to Binh Thanh, Thu Duc,
            we meet all needs.
          </li>
        </ul>
        <p className="text-[21px] text-gray-700 mt-2">
          PAWLISH continuously innovates to serve pets throughout the region.
        </p>
      </section>

      {/* Reasons to Choose */}
      <section className="mb-6">
        <h1 className="text-[35px] font-bold mb-2">
          <strong>Reasons to Choose Home Pet Grooming from PAWLISH</strong>
        </h1>
        <ul className="list-disc ml-5 text-[21px] text-gray-700">
          <li>Top reputation: PAWLISH is a familiar address in.</li>
          <li>
            Diverse services: From home grooming to pet sitting, we do it all.
          </li>
          <li>
            Attractive offers: Discount programs including free cleaning baths,
            special offers for customers using monthly packages.
          </li>
          <li>Support throughout: Our team is ready to reach all areas.</li>
        </ul>
        <img
          src="https://petwow.com/wp-content/uploads/2019/07/Bath.jpg"
          alt="PAWLISH Team"
          className="w-full rounded-lg mt-4"
        />
        <p className="text-[21px] text-gray-700 mt-2">
          Trained by professional instructors
        </p>
        <p className="text-[21px] text-gray-700 mt-2">
          PAWLISH helps you care for your pets more easily and effectively than
          ever before.
        </p>
      </section>

      {/* Complete Experience */}
      <section className="mb-6">
        <h1 className="text-[35px] font-bold mb-2">
          <strong>PAWLISH – Complete Experience</strong>
        </h1>
        <p className="text-[21px] text-gray-700">
          PAWLISH is the best <strong>home pet grooming</strong> address in
          2035. With professional home grooming services, we bring beauty and
          health to your "boss" throughout the city. Call now at{" "}
          <strong>0898 520 760</strong> to make an appointment. PAWLISH – where
          your pets are loved like at home!
        </p>
        <p className="text-[21px] text-gray-700 mt-2">
          Contact <strong>0898 520 760</strong> to receive offers from PAWLISH!
        </p>
      </section>
    </div>
  );
};
export default CutPetHairPage;
