import React from "react";
import logo from "../assets/logo1.png";
import { SiFacebook, SiInstagram, SiX } from "@icons-pack/react-simple-icons";
import {
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  HelpCircle,
  AlertTriangle,
  Map,
  FileText,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="pt-20 pb-10  bg-emerald-950 text-white overflow-hidden relative">
      {/* افکت پس‌زمینه */}
      <div className="absolute top-0 right-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* بخش اول - لوگو و توضیحات */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <img src={logo} className="w-12 h-12 p-1" alt="VetCare Logo" />
              <span className="font-bold text-2xl text-green-400">
                Vet<span className="text-white">Care</span>
              </span>
            </div>
            <p className="text-emerald-100/60 max-w-sm leading-relaxed text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
              dignissimos commodi eaque.
            </p>
            <div className="flex gap-3">
              {[SiFacebook, SiInstagram, SiX].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full border border-emerald-800 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 hover:text-emerald-950 transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* بخش دوم - لینک‌ها (Navigation و Help) */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* ستون Navigation */}
              <div className="space-y-6">
                <h4 className="text-xs uppercase font-bold text-emerald-400 tracking-[0.2rem]">
                  NAVIGATION
                </h4>
                <ul className="space-y-4">
                  {["About Us", "Services", "Our Vets", "Booking"].map(
                    (link) => (
                      <li key={link}>
                        <a
                          className="group flex items-center gap-1 text-sm text-emerald-100/50 hover:text-white transition-colors"
                          href="#">
                          {link}
                          <ArrowUpRight
                            size={12}
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          />
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {/* ستون Help */}
              <div className="space-y-6">
                <h4 className="text-xs uppercase font-bold text-emerald-400 tracking-[0.2rem]">
                  HELP
                </h4>
                <ul className="space-y-4">
                  {[
                    { name: "Emergency", icon: AlertTriangle },
                    { name: "FAQs", icon: HelpCircle },
                    { name: "Location", icon: Map },
                    { name: "Terms", icon: FileText },
                  ].map((item) => (
                    <li key={item.name}>
                      <a
                        className="group flex items-center gap-2 text-sm text-emerald-100/50 hover:text-white transition-colors"
                        href="#">
                        <item.icon
                          size={14}
                          className="opacity-60 group-hover:opacity-100"
                        />
                        {item.name}
                        <ArrowUpRight
                          size={12}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* بخش سوم - Quick Contact */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-bold uppercase text-xs tracking-[0.2rem] text-emerald-400">
              QUICK CONTACT
            </h4>
            <div className="space-y-3">
              <div className="p-3 gap-3 flex items-center bg-emerald-900/30 rounded-xl border border-emerald-800/50 hover:bg-emerald-900/50 transition-colors group">
                <Phone
                  size={16}
                  className="text-emerald-400 group-hover:scale-110 transition-transform"
                />
                <div>
                  <p className="text-xs text-emerald-400/70">Phone</p>
                  <span className="text-sm font-medium">+1 (555) 900-PAWS</span>
                </div>
              </div>
              <div className="p-3 gap-3 flex items-center bg-emerald-900/30 rounded-xl border border-emerald-800/50 hover:bg-emerald-900/50 transition-colors group">
                <Mail
                  size={16}
                  className="text-emerald-400 group-hover:scale-110 transition-transform"
                />
                <div>
                  <p className="text-xs text-emerald-400/70">Email</p>
                  <span className="text-sm font-medium">care@happy.com</span>
                </div>
              </div>
              <div className="p-3 gap-3 flex items-center bg-emerald-900/30 rounded-xl border border-emerald-800/50 hover:bg-emerald-900/50 transition-colors group">
                <MapPin
                  size={16}
                  className="text-emerald-400 group-hover:scale-110 transition-transform"
                />
                <div>
                  <p className="text-xs text-emerald-400/70">Address</p>
                  <span className="text-sm font-medium">
                    123 Pet Street, Animal City
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* خط جداکننده و کپی‌رایت */}
        <div className="border-t border-emerald-800 pt-8 text-center text-emerald-100/40 text-sm">
          <p>&copy; {currentYear} VetCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
