import React from "react";
import serviceImg from "../../assets/servicebanner.gif"; // replace with your image

const Servicehero = () => {
  return (
    <section className="w-full relative overflow-hidden bg-white">
      {/* IMAGE */}
      <img
        src={serviceImg}
        alt="services"
        className="w-full h-auto object-contain"
      />

      {/* TITLE */}
      <div className="absolute top-4 sm:top-6 md:top-10 lg:top-14 left-1/2 -translate-x-1/2 z-20 px-2 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#005DA3] drop-shadow-sm">
          Services
        </h2>
      </div>
    </section>
  );
};

export default Servicehero;
