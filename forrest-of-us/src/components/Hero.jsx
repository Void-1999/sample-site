import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center text-white text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/forest-bg.jpg')" }}
      data-aos="fade-in"
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-5xl font-bold">Forrest of Us</h1>
        <p className="text-xl mt-4">Turning Waste into Opportunity, One Step at a Time</p>
      </div>
    </section>
  );
};

export default Hero;
