import React from "react";
import hero from "../assets/hero.png";
import hero2 from "../assets/hero2.png";
import per1 from "../assets/per1.png";
import per2 from "../assets/per2.png";
import per3 from "../assets/per3.png";

export default function () {
  return (
    <div className="relative">
      <div className="absolute -top-32 left-0 right-0 bottom-0 -z-10">
        <img
          src={hero}
          alt="background "
          className="w-full h-full object-cover"
        />
      </div>
      <section className="flex flex-col relative lg:min-h-screen px-6 items-center justify-center text-center overflow-hidden lg:pt-4">
        <div
          className="flex items-center px-4 p-2 rounded-full gap-2 shadow text-sm mb-6 mt-9 bg-white "
          data-aos="fade-down"
          data-aos-delay="100">
          <div className="flex space-x-2">
            <img
              src={per1}
              alt="uer1"
              className="w-6 h-6 rounded-full border-2 border-white object-cover"
            />
            <img
              src={per2}
              alt="uer1"
              className="w-6 h-6 rounded-full border-2 border-white object-cover"
            />
            <img
              src={per3}
              alt="uer1"
              className="w-6 h-6 rounded-full border-2 border-white object-cover"
            />
          </div>
          <span className="text-gray-500"> 5000+ Happy pet Owners </span>
        </div>
        <h1
          className="text:4xl md:text-6xl font-bold leading-tight"
          data-aos="fade-up"
          data-aos-delay="200">
          Caring your pets
          <br /> Like family
        </h1>
        <p
          className="mt-4 max-w-xl text-gray-600"
          data-aos="fade-up"
          data-aos-delay="300">
          Expert veterinary care with compassing and presicion for your pets.
        </p>
        <div
          className="flex flex-col mt-8 items-center gap-3"
          data-aos="fade-up"
          data-aos-delay="400">
          <button className="px-8 py-3 rounded-full text-white bg-emerald-950 shadow-2xl hover:bg-green-800 transition">
            Get Appointment
          </button>
        </div>
        <div
          className="mt-10 w-full max-w-4xl relative"
          data-aos="zoom-in"
          data-aos-delay="500">
          <img
            src={hero2}
            alt="hero"
            className="w-220 lg:h-120 rounded-2xl  shadow-2xl"
          />
        </div>
      </section>
    </div>
  );
}
