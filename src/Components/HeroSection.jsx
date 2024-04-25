import React from "react";

const HeroSection = () => {
  return (
    <div className="herosection relative">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/Images/herosection_bg.jpg')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

      {/* Content */}
      <div className="h-screen flex flex-col justify-center items-center mx-auto w-2/3 max-md:w-5/6 text-center leading-large text-white relative z-20">
        <h2 className="animate-fade-in-center text-2xl md:text-6xl">
          Communicate With Deaf And Hard Of Hearing People
        </h2>
        <p className="animate-fade-in-center text-sm md:text-xl mt-4">
          Studying ASL promotes better awareness about sensitivity to the deaf
          and hard of hearing community. Sign2Text is all you need to
          communicate with deaf and hard of hearing people.
        </p>
        <p className="animate-fade-in-center text-sm md:text-xl mt-4">
          Sign2Text - Where Silence Speaks Volumes
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
