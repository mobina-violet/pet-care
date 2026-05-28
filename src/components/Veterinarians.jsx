import React from "react";

import vet1 from "../assets/vet1.png";
import vet2 from "../assets/vet2.png";
import vet3 from "../assets/vet3.png";
const cards = [
  {
    img: vet1,
    title: "surgery",
    desc: " In house labs allow rapid analysis of blood, urine, and tissue samples .",
  },

  {
    img: vet2,
    title: "surgery",
    desc: "Many practices offer 24/7 emergency services to handle traumas, poisonings, or sudden severe illnesses like gastric torsion in dogs.",
  },
  {
    img: vet3,
    title: "surgery",
    desc: "In‑house labs allow rapid analysis of blood, urine, and tissue samples, enabling quick diagnosis and timely treatment.",
  },
];

export default function veterinarians() {
  return (
    <section id="veterinarians" className="w-full py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-green-400 mb-4">
            Veterinary<span className="text-gray-900"> Services</span>
          </h2>
          <p className="text-gray-600 max-w-5xl mx-auto">
            Diagnostics and Treatment: Veterinary clinics use advanced tools
            such as digital X‑rays, ultrasound, blood analyzers, and even MRI
            machines to diagnose diseases, infections, or injuries. Treatments
            range from medications to complex surgeries (e.g., fracture repair,
            tumor removal).
          </p>
        </div>
        <div className=" grid grid-col-1 md:grid-cols-3 gap-6 justify-item-center max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <div
              className="bg-white rounded-4xl w-80 flex flex-col items-center shadow-lg transform transition duration-300 hover:translate-y-3 hover:shadow-2xl "
              data-aos="fade-up"
              date-aos-delay={`${index * 100}`}>
              <img
                src={card.img}
                alt={card.title}
                className="w-80 h-72 object-cover shadow-2lg rounded-4xl mb-6 transition-transform duration-200 hover:scale-105"
              />
              <button className="bg-linear-to-r from-green-600 to-green-500 text-white px-6 py-3 rounded-2xl font-medium flex items-center gap-2 relative -top-10 transform transition duration-300 hover:scale-105 hover:translate-y-1">
                Click Here
              </button>
              <h3 className="font-semibold text-2xl mb-3 text-gray-800">
                {card.title}
              </h3>
              <p className=" mr-4 text-sm text-gray-600 mb-6">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
