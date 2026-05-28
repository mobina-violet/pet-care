import React, { useState } from "react";
import cati2 from "../assets/cati2.jfif";
import cati1 from "../assets/cati1.jfif";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

function Testimonals() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonals = [
    {
      id: 1,
      name: "Sophia Martines",
      pet: "Pashmak (short hair)",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptas nihil, qui modi ipsam quas!",
      image: cati1,
    },
    {
      id: 2,
      name: "Sophia Martines",
      pet: "panbe (short hair)",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptas nihil, qui modi ipsam quas!",
      image: cati2,
    },
  ];
  const next = () => setActiveIndex((prev) => (prev + 1) % testimonals.length);
  const prev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + testimonals.length) % testimonals.length,
    );
  return (
    <section
      id="Testimonials "
      className="bg-emerald-950 py-20 text-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-8">
        <div className="flex flex-col gap-10 items-center md:flex-row">
          <div className="w-full relative md:w-5/12" data-aos="fade-right">
            <div className="w-full absolute -top-3 -left-3 border  border-emerald-500/50 h-full "></div>
            <div className=" relative rounded-xl shadow-xl z-10 overflow-hidden aspect-square">
              <img
                src={testimonals[activeIndex].image}
                alt="pet"
                className="w-full h-full  object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div
              className="absolute -bottom-4 px-4 py-2 text-white bg-emerald-500 -right-4 z-20 rounded-lg shadow-lg hidden sm:block "
              data-aos="zoom-in"
              data-aos-delay="300">
              <p className="text-lg font-bold leading-none">100%</p>
              <p className="text-xs opacity-90 uppercase">Recovery</p>
            </div>
          </div>
          <div
            className="w-full md:w-7/12 space-y-5"
            data-aos="fade-left "
            data-aos-delay="100">
            <div
              className="inline-flex text-center gap-1.5 border rounded-full py-3 border-white/10 bg-white/5"
              data-aos="fade-up"
              data-aos-delay="200">
              <Star size={12} className="text-yellow-400 fill-yellow-400" />
              <span className=" font-bold tracking-widest opacity-80 uppercase">
                Trusted care
              </span>
            </div>
            <Quote
              size={32}
              className="mb-5 text-emerald-500 opacity-40"
              data-aos="fade-up"
              data-aos-delay="250"
            />
            <h2
              className=" md:font-serif italic text-xl leading-snug text-emerald-50"
              data-aos="fade-up"
              data-aos-delay="300">
              {testimonals[activeIndex].text}
            </h2>
            <div
              className="pt-4 border-t border-white/10"
              data-aos="fade-up"
              data-aos-delay="350">
              <h4 className="text-lg font-bold">
                {testimonals[activeIndex].name}
              </h4>
              <p className=" text-emerald-400 text-sm">
                {testimonals[activeIndex].pet}
              </p>
            </div>
            <div
              className="flex items-center pt-2 gap-4"
              data-aos="fade-up"
              data-aos-delay="400">
              <button
                onClick={prev}
                className="border-white/20 rounded-full p-2.5 hover:bg-emerald-500 hover:border-emerald-500 transition-all">
                <ChevronLeft size={18} />
              </button>
              <div className="h-px w-8 bg-white/10"></div>
              <button
                onClick={next}
                className="border-white/20 rounded-full p-2.5 hover:bg-emerald-500 hover:border-emerald-500 transition-all">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonals;
