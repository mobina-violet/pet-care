import Aos from "aos";
import React, { useEffect, useState } from "react";
import Dog from "../assets/dogg.jpg";
import { ChevronRight, HelpCircle, PawPrint, Phone } from "lucide-react";
const Questions = () => {
  const [openIndex, setOpenIndex] = useState();
  const faqs = [
    {
      question: "Clinacal services",
      answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    },
    {
      question: "How to reach us?",
      answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    },
    {
      question: "Pet safety",
      answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    },
    {
      question: "Emergency polices",
      answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    },
  ];
  useEffect(() => {
    Aos.refresh();
  }, [openIndex]);

  const handleQuestionClick = (index) => {
    setOpenIndex(index);
  };
  return (
    <div className="min-h-screen flex mt-10 bg-white items-center justify-center pt-6 overflow-hidden  w-full font-sans text-gray-900">
      <div className="w-full max-w-5xl">
        <h1
          className="text-3xl mb-10 tracking-tight font-bold text-center text-gray-800"
          data-aos="fade-up">
          Our question,<span className="text-green-400">Answered</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div
            className="relative group justify-self-center "
            data-aos="fade-up"
            data-aos-delay="100">
            <div className="absolute -inset-1 bg-green-500 rounded-4xl blur opacity-80 hover:opacity-95 transition duration-500"></div>
            <div className="relative apsect-4/5 w-72 p-10 md:w-80 bg-gray-100 rounded-4xl overflow-hidden border-2 border-green-400">
              <img
                src={Dog}
                alt="dog photo"
                className="w-full h-full object-cover rounded"
              />
              <div
                className="absolute bottom-4 bg-green-600 border border-white px-4 py-2 right-4  rounded-xl shadow-lg flex items-center gap-2 text-white "
                data-aos="zoom-in"
                data-aos-delay="400">
                <div className="text-right">
                  <p className="font-bold text-xs leading-none tracking-tighter uppercase">
                    Happy
                  </p>
                  <p className="font-black text-sm leading-none uppercase">
                    Paws
                  </p>
                </div>
                <PawPrint size={18} className="fill-white" />
              </div>
            </div>
          </div>
          <div
            className="bg-emerald-950 border-gray-100 rounded-[2.5rem] p-8 shadow-xl shadow-gray-200/50"
            data-aos="fade-left"
            data-aos-delay="200">
            <div
              className="flex items-center gap-2  bg-green-100 mb-8 w-fit px-4 py-1.5 rounded-full border border-green-200 "
              data-aos="fade-up"
              data-aos-delay="250">
              <HelpCircle size={16} className="text-green-600" />
              <span className="text-xs font-bold text-green-700 uppercase tracking-wider">
                FAQ Question ,Answered
              </span>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer rounded-xl  border transition-all duration-300
                 ${
                   openIndex === index
                     ? `bg-white border-green-500 shadow-md`
                     : `border-gray-200 hover:border-green-200 bg-white/60`
                 }`}
                  onClick={() => handleQuestionClick(index)}
                  data-aos="fade-up"
                  data-aos-delay={`${300 + index * 50}`}>
                  <div className="pt-4 px-4 pb-3 ">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`font-medium  ${openIndex === index ? `text-green-700` : `text-emerald-950`}`}>
                        {faq.question}
                      </span>
                      <div
                        className={`p-1 rounded-full border transition-all duration-300 ${openIndex === index ? `bg-green-500 border-green-500 rotate-90` : `border-emerald-950`}`}>
                        <ChevronRight
                          size={14}
                          className={`transition-colors duration-300 ${openIndex === index ? `text-white` : `text-emerald-950`}`}
                        />
                      </div>
                    </div>
                    {openIndex === index && (
                      <p className="mt-3 text-gray-300 text-[12px] leading-relaxed border-t border-gray-100 pt-3 ">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="flex mt-10 mb-20 justify-center"
          data-aos="fade-up"
          data-aos-delay="600">
          <button className="flex items-center gap-2 border-2  border-green-600 text-green-700 px-8 py-3  rounded-xl hover:bg-green-600 hover:text-white transition-all duration-300 font-bold  group shadow-md ">
            <Phone size={18} className="group-hover:animate-bounce" />
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
