import React from "react";

import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "C:/Users/lenovo/login/src/assets/img4.webp";

import { FaBolt, FaMicrochip } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
import { GiDiamondHard } from "react-icons/gi";
import { FiCloud } from "react-icons/fi";
import { FiUsers } from "react-icons/fi"; // react-icons users icon
import { AiOutlineLineChart } from "react-icons/ai";

const Bootstrap = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const yOffset = 80;
    const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
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
              <p className="text-lg">Excepteur sint occaecat cupidatat non proident.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Expert Team</h2>
              <p className="text-lg">Ut enim ad minim veniam quis nostrud exercitation.</p>
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

        {/* SECTIONS */}
        {["development", "marketing", "support"].map((section) => {
          const items =
            section === "development"
              ? ["Web Development", "Mobile Development", "API Development"]
              : section === "marketing"
              ? ["Digital Campaigns", "SEO Optimization", "Social Media"]
              : ["24/7 Support", "System Maintenance", "Training"];

          const description =
            section === "development"
              ? "High quality solutions built with modern technologies."
              : section === "marketing"
              ? "Strategic marketing services to grow your business."
              : "Reliable support services to keep systems running smoothly.";

          return (
            <div
              key={section}
              id={`${section}-section`}
              className="bg-blue-200 mt-24 p-10 rounded-2xl"
            >
              <h1 className="text-4xl font-bold text-center mb-10">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </h1>

              <div className="flex gap-8 justify-center flex-wrap">
                {items.map((title) => (
                  <div
                    key={title}
                    className="bg-white w-80 p-6 rounded-2xl border hover:shadow-2xl transition"
                  >
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p className="text-lg mt-2">{description}</p>
                    <button className="mt-4 border px-4 py-2 rounded-lg">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Features Section */}
        <div className="flex flex-col items-center p-4 mt-24">
          <h2 className="text-2xl text-blue-600 font-semibold mb-4 underline">
            Features
          </h2>

          <p className="text-xl text-black text-center max-w-3xl mb-8">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium totam rem aperiam
          </p>

          {/* Image + Text */}
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
            <div className="flex-1">
              <h3 className="text-2xl text-black font-semibold mb-2">
                Voluptatum deleniti atque corrupti quos dolores
              </h3>
              <p className="text-xl text-black">
                Et harum quidem rerum facilis est et expedita distinctio.
                Nam libero tempore, cum soluta nobis est eligendi optio
                cumque nihil impedit quo minus.
              </p>
            </div>
            <img src={img4} alt="img4" className="w-64 h-64 object-cover rounded-lg" />
          </div>

          {/* Icon Features */}
          <div className="flex flex-col md:flex-row gap-10 justify-center">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl">
                <FaBolt className="text-white text-3xl" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl text-black font-bold">Expedita Voluptas</h3>
                <p className="text-xl text-black">
                  Sed ut perspiciatis <br />
                  unde omnis iste natus <br />
                  error sit voluptatem <br />
                  accusantium doloremque <br />
                  laudantium
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl">
                <MdVerifiedUser className="text-white text-3xl" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl text-black font-bold">Nemo Quisquam</h3>
                <p className="text-xl text-black">
                  Totam rem aperiam, <br />
                  eaque ipsa quae ab illo <br />
                  inventore veritatis et <br />
                  quasi architecto beatae
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl">
                <GiDiamondHard className="text-white text-3xl" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl text-black font-bold">Beatae Vitae</h3>
                <p className="text-xl text-black">
                  Neque porro quisquam est, <br />
                  qui dolorem ipsum quia dolor <br />
                  sit amet consectetur adipisci veli t
                </p>
              </div>
            </div>
          </div>

          {/* AI-Powered Automation */}
        <div className="flex flex-row">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-12">
            <div className="flex flex-col items-start gap-4 p-6 border rounded-2xl bg-blue-100">
              {/* <div className="w-16 h-16 flex items-center justify-center rounded-xl border border-blue-300 hover:bg-blue-50 transition"> */}

              <FaMicrochip className="text-blue-600 text-2xl" />
              <h3 className="text-2xl text-black font-bold">AI-Powered Automation</h3>
              <p className="text-lg text-black">
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
              <div className="flex flex-row gap-4">
              <button className="bg-blue-950 text-white px-4 py-2 hover:bg-fuchsia-700 transition">
                Smart
              </button>
               <button className="bg-blue-950 text-white px-4 py-2 hover:bg-fuchsia-700 transition">
                Automated
              </button>
              </div>
              </div>
          </div>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-12">
            <div className="flex flex-col items-start gap-4 p-6 border rounded-2xl bg-blue-100">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl border border-blue-300 hover:bg-blue-50 transition">
              <FiCloud className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-2xl text-black font-bold">Cloud Integration</h3>
              <p className="text-lg text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Pellentesque habitant morbi tristique senectus et netus.
              </p>
              <div className="flex flex-row gap-4">
              <button className="bg-blue-950 text-white px-4 py-2 hover:bg-fuchsia-700 transition">
                Scalable
              </button>
               <button className="bg-blue-950 text-white px-4 py-2 hover:bg-fuchsia-700 transition">
                Reliable
              </button>
              </div>
            </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-12">
            <div className="flex flex-col items-start gap-4 p-6 border rounded-2xl bg-blue-100">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl border border-blue-300 hover:bg-blue-50 transition">
               <FiUsers className="text-blue-600 text-2xl" />
              </div>
               
              
              <h3 className="text-2xl text-black font-bold">Team Collaboration</h3>
              <p className="text-lg text-black">
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. 
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              </p>
              <div className="flex flex-row gap-4">
              <button className="bg-blue-950 text-white px-4 py-2 hover:bg-fuchsia-700 transition">
                Collaborative
              </button>
               <button className="bg-blue-950 text-white px-4 py-2 hover:bg-fuchsia-700 transition">
                Efficient
              </button>
              </div>
            </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-12">
            <div className="flex flex-col items-start gap-4 p-6 border rounded-2xl bg-blue-100">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl border border-blue-300 hover:bg-blue-50 transition">
                <AiOutlineLineChart className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-2xl text-black font-bold">Advanced Analytics</h3>
              <p className="text-lg text-black">
                Proin eget tortor risus. Donec rutrum congue leo eget malesuada. 
                Vivamus suscipit tortor eget felis porttitor volutpat.
              </p>
              <div className="flex flex-row gap-4">
              <button className="bg-blue-950 text-white px-4 py-2 hover:bg-fuchsia-700 transition">
                Insights
              </button>
               <button className="bg-blue-950 text-white px-4 py-2 hover:bg-fuchsia-700 transition">
                Data Driven
              </button>
              </div>
            </div>
            </div>
          </div>



        
        </div>
      </div>
    </div>
  );
};

export default Bootstrap;
