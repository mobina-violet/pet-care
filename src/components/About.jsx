import about from "../assets/about.png";
export default function About() {
  return (
    <section id="about" className="w-ful bg-white overflow-hidden py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-14">
        <div
          className="flex relative justify-center"
          data-aos="fade-right"
          data-aos-delay="100">
          <div className="w-64 h-64 sm:w-80 md:w-96 md:h-96 lg:h-125 lg:w-120 overflow-hidden border-8 border-green-500 rounded-[60%_50%_30%_20%/60%_30%_50%_30%] relative z-0">
            <img
              src={about}
              alt="about"
              className="object-cover w-full h-full"
            />
          </div>
          <div
            className="absolute -top-6 -right-6 bg-green-500 px-5 py-3 text-white rounded-full shadow-lg font-semibold "
            data-aos="zoom-in"
            data-aos-delay="300">
            +15 years Experience
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="200">
          <p className="font-semibold text-green-600 mb-3">About us</p>
          <h2 className="text-4xl font-bold text-gray-800 leading-snug mb-6">
            15 Years Excellence in <br />
            veterinary Care
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint sed
            beatae error quod quidem dolor a ratione quibusdam quasi? Doloremque
            doloribus corporis praesentium. Quas id odio expedita. Accusamus,
            vel minima.
          </p>
          <ul className="space-y-4 mb-8">
            <li
              className="flex text-gray-700 items-center gap-3"
              data-aos="fade-left"
              data-aos-delay="200">
              <span className="bg-green-500 w-3 h-3 rounded-full"></span>
              Comprehesive pet health checkups
            </li>
            <li
              className="flex text-gray-700 items-center gap-3"
              data-aos="fade-left"
              data-aos-delay="300">
              <span className="bg-green-500 w-3 h-3 rounded-full"></span>
              advance surgical & Emergency care
            </li>
            <li
              className="flex text-gray-700 items-center gap-3"
              data-aos="fade-left"
              data-aos-delay="400">
              <span className="bg-green-500 w-3 h-3 rounded-full"></span>
              friendly and experienced veterinary team
            </li>
          </ul>
          <button
            className="text-white bg-emerald-950 hover:bg-green-800 px-8 py-3 transition font-medium  rounded-full"
            data-aos="fade-up"
            data-aos-delay="450">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}
