import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Veterinarians from "../components/Veterinarians";
import Aos from "aos";
import "aos/dist/aos.css";
import About from "../components/About";
import Servises from "../components/Servises";
import Testimonals from "../components/Testimonals";
import Appointment from "../components/Appointment";
import Questions from "../components/Questions";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    });
  }, []);
  
  return (
    <div>
      <Navbar />
      <Hero />
      <Veterinarians />
      <About />
      <Servises />
      <Testimonals />
      <Appointment />
      <Questions />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}