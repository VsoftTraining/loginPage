import React from "react";

import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";

const Bootstrap = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const yOffset = +80;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="bg-blue-100 min-h-screen p-6">

      {/* MAIN CONTAINER */}
      <div className="bg-blue-300 rounded-2xl px-6 py-4 w-full max-w-7xl mx-auto">

        {/* NAVBAR */}
        <ul className="flex flex-wrap justify-center gap-6 border border-gray-300 rounded-lg px-6 py-3 bg-white">
          {["Home", "About", "Features", "Services", "Pricing", "Contact"].map(
            (item) => (
              <li
                key={item}
                className="text-xl font-bold text-black hover:bg-blue-300 px-3 py-1 rounded cursor-pointer"
              >

                {item}
              </li>
            )
          )}
        </ul>

        {/* HERO HEADING */}
        <h1 className="text-3xl font-serif text-center mt-8">
          Transforming Ideas Into <br /> Digital Reality
        </h1>

        {/* HERO BUTTONS */}
        <div className="flex gap-8 mt-8 justify-center">
          <button className="bg-white text-xl font-bold h-24 w-40 hover:bg-blue-400 rounded-lg">
            Get Started
          </button>
          <button className="bg-white text-xl font-bold h-24 w-40 hover:bg-blue-400 rounded-lg">
            View Work
          </button>
        </div>

        {/* IMAGES + TEXT */}
        <div className="flex flex-col lg:flex-row gap-10 mt-12">

          {/* IMAGES */}
          <div className="flex gap-4 w-full lg:w-1/2">
            <img
              src={img1}
              alt="img1"
              className="w-1/2 h-80 object-cover rounded-lg"
            />

            <div className="flex flex-col gap-4 w-1/2">
              <img
                src={img2}
                alt="img2"
                className="w-full h-36 object-cover rounded-lg"
              />
              <img
                src={img3}
                alt="img3"
                className="w-full h-36 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 text-right">
            <h1 className="text-3xl font-bold">
              Building tomorrow's solutions with proven expertise
            </h1>

            <p className="text-xl">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>

            <div>
              <h2 className="text-2xl font-bold">Strategic Growth</h2>
              <p className="text-lg">
                Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Expert Team</h2>
              <p className="text-lg">
                Ut enim ad minim veniam quis nostrud exercitation.
              </p>
            </div>

            <button className="bg-white px-6 py-3 rounded-lg font-bold hover:bg-blue-300 self-end">
              Learn More About Us
            </button>

            <p className="font-semibold">Call us: 64266848</p>
          </div>
        </div>

        {/* SERVICE BUTTONS */}
        <div className="flex justify-center gap-8 mt-16">
          {[
            { name: "Development", id: "development-section" },
            { name: "Marketing", id: "marketing-section" },
            { name: "Support", id: "support-section" },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="bg-blue-100 px-8 py-4 rounded-2xl text-2xl font-semibold hover:bg-blue-200"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* DEVELOPMENT SECTION */}
        <div
          id="development-section"
          className="min-h-screen bg-blue-200 mt-24 p-10 rounded-2xl"
        >
          <h1 className="text-4xl font-bold text-center mb-10">Development</h1>

          <div className="flex gap-8 justify-center flex-wrap">
            {["Web Development", "Mobile Development", "API Development"].map(
              (title) => (
                <div
                  key={title}
                  className="bg-white w-80 p-6 rounded-2xl border hover:shadow-2xl transition"
                >
                  <h2 className="text-2xl font-bold">{title}</h2>
                  <p className="text-lg mt-2">
                    High quality solutions built with modern technologies.
                  </p>
                  <button className="mt-4 border px-4 py-2 rounded-lg">
                    View Details
                  </button>
                </div>
              )
            )}
          </div>
        </div>

        {/* MARKETING SECTION */}
        <div
          id="marketing-section"
          className="min-h-screen bg-blue-200 mt-24 p-10 rounded-2xl"
        >
          <h1 className="text-4xl font-bold text-center mb-10">Marketing</h1>

          <div className="flex gap-8 justify-center flex-wrap">
            {["Digital Campaigns", "SEO Optimization", "Social Media"].map(
              (title) => (
                <div
                  key={title}
                  className="bg-white w-80 p-6 rounded-2xl border hover:shadow-2xl transition"
                >
                  <h2 className="text-2xl font-bold">{title}</h2>
                  <p className="text-lg mt-2">
                    Strategic marketing services to grow your business.
                  </p>
                  <button className="mt-4 border px-4 py-2 rounded-lg">
                    View Details
                  </button>
                </div>
              )
            )}
          </div>
        </div>

        {/* SUPPORT SECTION */}
        <div
          id="support-section"
          className="min-h-screen bg-blue-200 mt-24 p-10 rounded-2xl"
        >
          <h1 className="text-4xl font-bold text-center mb-10">Support</h1>

          <div className="flex gap-8 justify-center flex-wrap">
            {["24/7 Support", "System Maintenance", "Training"].map((title) => (
              <div
                key={title}
                className="bg-white w-80 p-6 rounded-2xl border hover:shadow-2xl transition"
              >
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-lg mt-2">
                  Reliable support services to keep systems running smoothly.
                </p>
                <button className="mt-4 border px-4 py-2 rounded-lg">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bootstrap;
