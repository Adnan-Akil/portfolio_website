import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 flex flex-col items-start justify-center gap-6 mt-4 md:mt-10 lg:mt-0">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white notable leading-tight tracking-wide">
        Hello, <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
          I'm Adnan Akil!
        </span>
      </h1>

      <div
        className="notable text-white/90 text-lg md:text-xl border border-white/20 bg-white/5 backdrop-blur-md px-8 py-3 rounded-full cursor-pointer hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]"
        onClick={() => window.open("https://docs.google.com/document/d/1IPi8XP3y3HRDvhk53APDmaLPIqBYFl2AI0-E5_ExS3E/edit?usp=sharing", "_blank")}
      >
        My CV!
      </div>
    </div>
  );
};

export default HeroSection;
