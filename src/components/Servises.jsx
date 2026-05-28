import React, { useState } from "react";
import {
  FaArrowRight,
  FaHeartbeat,
  FaHospitalSymbol,
  FaTools,
} from "react-icons/fa";
import { FaStethoscope, FaSyringe, FaXRay } from "react-icons/fa6";
import { Features } from "tailwindcss";

import icon from "../assets/icon.png";
export default function Servises() {
  const [activeServices, setActiveServices] = useState(1);
  const serviecs = [
    {
      id: 1,
      icon: <FaStethoscope />,
      title: "Geeral Ckeckup",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, molestiae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, molestiae.",
      features: [
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
      ],
      price: "$45",
      duration: "30-45 min",
    },
    {
      id: 2,
      icon: <FaSyringe />,
      title: "Vaccination",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, molestiae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, molestiae.",
      features: [
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
      ],
      price: "$120",
      duration: "1-2 hours",
    },
    {
      id: 3,
      icon: <FaXRay />,
      title: "Diagnostic Imaging",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, molestiae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, molestiae.",
      features: [
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
      ],
      price: "$120",
      duration: "1-2 hours",
    },
    {
      id: 4,
      icon: <FaTools />,
      title: "Dental",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, molestiae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, molestiae.",
      features: [
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
      ],
      price: "$120",
      duration: "1-2 hours",
    },
    {
      id: 5,
      icon: <FaHeartbeat />,
      title: "Emergency care",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, molestiae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, molestiae.",
      features: [
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
      ],
      price: "$200",
      duration: "1-2 hours",
    },
    {
      id: 6,
      icon: <FaHospitalSymbol />,
      title: "Daycare",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, molestiae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, molestiae.",
      features: [
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
      ],
      price: "$200+",
      duration: "1-2 hours",
    },
  ];
  return (
    <div className="min-h-screen overflow-hidden">
      <div id="servises" className="py-20">
        <div className="px-4 mx-auto container">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="mb-4 text-3xl font-bold text-gray-950">
              Our
              <span className="text-green-500"> service</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              sed nisi cum suscipit, nobis voluptatem iusto dolore magni
              veritatis enim fugiat illum earum, quam nam tenetur porro, ex
              adipisci dolores?
            </p>
          </div>
          <div className="mb-12">
            <div
              className="flex flex-wrap gap-3 mb-10 justify-center"
              data-aos="fade-up"
              data-aos-delay="100">
              {serviecs.map((service) => (
                <button
                  className={`py-3 px-6 rounded-full font-medium transition-all duration-300 ${activeServices === service.id ? `bg-linear-to-r from-green-600 to-green-500 text-white shadow-lg ` : `text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 hover:border-green-200 hover:shadow-mb`}`}
                  key={service.id}
                  onClick={() => setActiveServices(service.id)}>
                  {service.title}
                </button>
              ))}
            </div>

            <div
              className="max-w-4xl mx-auto rounded-2xl shadow-xl bg-white p-8 border border-gray-100"
              data-aos="zoom-in"
              data-aos-delay="200">
              {serviecs
                .filter((s) => s.id === activeServices)
                .map((service) => (
                  <div
                    key={service.id}
                    className="md:flex md-0 items-start gap-8">
                    <div className="md:w-2/5 flex flex-col gap-4 border border-green-100 bg-linear-to-r from-green-50 to-emerald-100 p-8 rounded-xl">
                      <div className="text-green-400 text-5xl mb-6">
                        {service.icon}
                      </div>
                      <div className="text-2xl font-bold mb-2">
                        {service.title}
                      </div>
                      <div className="bg-linear-to-r from-green-400 text-3xl font-bold text-emerald-400 bg-clip-text mb-2">
                        {service.price}
                      </div>
                      <div className="text-gray-500">
                        {" "}
                        Duration: {service.duration}
                      </div>
                    </div>

                    <div className="md:w-3/5">
                      <p className="mb-6 text-gray-600 leading-relaxed">
                        {service.desc}
                      </p>
                      <div className="mb-8">
                        <h4 className="text-gray-900 mb-4 text-lg font-semibold">
                          Service include :
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {service.features.map((feature, index) => {
                            return (
                              <div
                                className="flex items-center gap-3"
                                data-aos="fade-left"
                                data-aos-delay={`${300 + index * 50}`}
                                key={index}>
                                <div className="bg-green-100 p-1 rounded-full">
                                  <img
                                    src={icon}
                                    alt="icon"
                                    className="w-4 h-4 text-green-400"
                                  />
                                </div>
                                <span className="text-gray-700">{feature}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <button
                        className="bg-emerald-950 px-8 py-3 rounded-full flex items-center transition font-semibold gap-3 text-white hover:bg-green-800"
                        data-aos="fade-up"
                        data-aos-delay="600">
                        Book this service
                        <FaArrowRight />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
