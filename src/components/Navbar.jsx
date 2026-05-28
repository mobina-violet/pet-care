import React, { useState } from "react";
import logo1 from "../assets/logo1.png";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const listNav = [
  { name: "Veterinarians", href: "veterinarians" },
  { name: "About", href: "about" },
  { name: "Service", href: "service" },
  { name: "Testimonials", href: "testimonials" },
  { name: "Appointment", href: "appoinment" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="w-full  px-6 md:px-10 py-5 flex items-center justify-between relative bg-white shadow-sm z-50">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo1} alt="logo" className="w-12 h-12 p-1" />
        <span className="font-bold text-green-400">
          Vet
          <span className="text-black">Care</span>
        </span>
      </Link>

      <ul className="hidden md:flex gap-8 text-sm text-gray-700">
        {listNav.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => scrollToSection(item.href)}
              className="hover:text-green-700 transition-colors cursor-pointer">
              {item.name}
            </button>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex items-center gap-2 bg-gray-200 rounded-full p-1">
        <button
          onClick={handleLogin}
          className="px-6 py-2 text-sm rounded-full font-medium text-gray-100 bg-emerald-950 hover:shadow-md transition">
          Login
        </button>
        <button
          onClick={handleSignup}
          className="px-6 py-2 text-sm rounded-full font-medium text-gray-900 hover:shadow-md hover:bg-white/50 transition">
          Sign
        </button>
      </div>

      {/* mobile button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-2xl text-gray-800">
        {open ? <FiX /> : <FiMenu />}
      </button>

      {/* mobile menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden z-50">
          <ul className="flex flex-col gap-4 p-6 text-gray-700">
            {listNav.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="block hover:text-green-700 transition w-full text-left">
                  {item.name}
                </button>
              </li>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <button
                onClick={() => {
                  handleLogin();
                  setOpen(false);
                }}
                className="py-2 rounded-full bg-emerald-950 text-white">
                Log In
              </button>
              <button
                onClick={() => {
                  handleSignup();
                  setOpen(false);
                }}
                className="py-2 rounded-full border">
                Sign In
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
