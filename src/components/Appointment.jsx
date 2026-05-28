import React from "react";
import { useState } from "react";
import app from "../assets/app.png";
import { Heart, MessageSquare, PawPrint, Phone, User } from "lucide-react";
const Appointment = () => {
  const [formData, setFormData] = useState({
    petName: "",
    petType: "",
    ownerName: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment booked sucsessfully");
  };
  return (
    <div
      id="appointment"
      className="min-h-screen flex items-center justify-center p-4 md:p-8 ">
      <div className="max-w-5xl bg-gray-50 w-full shadow-2lg  rounded-3xl overflow-hidden flex flex-col md:flex-row">
        <div
          className="md:w-5/12 relative overflow-hidden"
          data-aos="fade-right">
          <img
            src={app}
            alt="cute banda"
            className=" inset-0 w-full absolute h-full object-cover"
          />
          <div className="flex flex-col  relative justify-end h-full p-8 text-white bg-linear-to-t from-green-700/40 to-transparent">
            <h2 className="text-4xl font-bold mb-2"> Join our family</h2>
            <p className="text-green-100 italic">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
            </p>
            <div className="mt-6 flex gap-4 text-sm font-medium">
              <span
                className="bg-white/20 backdrop-blur-md px-3 rounded-full py-1 gap-1 flex items-center"
                data-aos="zoom-in "
                data-aos-delay="200">
                <Heart className="fill-white" size={14} />
                Professional care
              </span>
              <span
                className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1"
                data-aos="zoom-in "
                data-aos-delay="300">
                <PawPrint size={14} />
                24/7 Support
              </span>
            </div>
          </div>
        </div>
        <div
          className="md:w/7/12 p-8 lg:p-12"
          data-aos="fade-left "
          data-aos-delay="100">
          <header className="mb-8">
            <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
              Book an <span className="text-green-400">Appointment</span>
            </h1>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </header>
          <form action="" onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className="space-y-1"
                data-aos="fade-up"
                data-aos-delay="150">
                <label className="font-bold text-sm text-gray-700 flex items-center gap-2">
                  <PawPrint size={16} className="text-green-600"></PawPrint>
                  pet Name
                </label>
                <input
                  required
                  name="petName"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:bg-white outline-1 transition-all  "
                  placeholder="e.g. Max"
                  onchange={handleChange}
                />
              </div>
              <div
                className="space-y-1"
                data-aos="fade-up"
                data-aos-delay="200">
                <label className="text-sm font-bold text-gray-700">
                  Pet Type
                </label>
                <select
                  name="pet Type"
                  className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 w-full transition-all outline-none focus:bg-white"
                  onClick={handleChange}>
                  <option value="Cat">cat</option>
                  <option value="Dog">dog</option>
                  <option value="Bird">bird</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className="space-y-1"
                data-aos="fade-up"
                data-aos-delay="250">
                <label className="font-bold text-sm text-gray-700 flex items-center gap-2">
                  <User size={16} className="text-green-500" />
                  Owner Name
                </label>
                <input
                  placeholder="Your name "
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:bg-white outline-1 transition-all "
                  onchange={onchange}></input>
              </div>
              <div
                className="space-y-1"
                data-aos="fade-up"
                data-aos-delay="250">
                <label className="font-bold text-sm text-gray-700 flex items-center gap-2">
                  <Phone size={16} className="text-green-500" />
                  Phone
                </label>
                <input
                  required
                  name="phone"
                  type="tel"
                  onchange={handleChange}
                  placeholder="5555-0000"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:bg-white outline-1 transition-all "></input>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/*Date */}
              <div
                className="space-y-1"
                data-aos="fade-up"
                data-aos-delay="350">
                <label className="font-bold text-sm text-gray-700">Date</label>
                <input
                  required
                  type="date"
                  name="date"
                  onChange={handleChange}
                  className="w-full py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:bg-white outline-1 transition-all "></input>
              </div>
              {/*time */}
              <div
                className="space-y-1"
                data-aos="fade-up"
                data-aos-delay="350">
                <label className="font-bold text-sm text-gray-700">Time</label>
                <input
                  required
                  type="time"
                  name="time"
                  onChange={handleChange}
                  className="w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:bg-white outline-1 transition-all "></input>
              </div>
            </div>
            {/*Notes */}
            <div className="space-y-1" data-aos="fade-up" data-aos-delay="350">
              <label className=" flex gap-2 items-centerfont-bold text-sm text-gray-700">
                <MessageSquare size={16} className="text-green-500" />
                Reason for visit
              </label>
              <textarea
                name="notes"
                rows="2"
                onChange={handleChange}
                className="w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:bg-white outline-1 transition-all "></textarea>
            </div>
            <button
              className="w-full bg-emerald-950 py-4 hover:bg-green-800 text-white font-bold rounded-xl shadow-lg shadow-green-100 transition duration-300 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 "
              data-aos="fade-up"
              data-aos-delay="500">
              Confirm Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
