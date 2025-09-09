import React from "react";

const About = () => {
  return (
      <div>
        <div className="bg-[rgba(90,91,89,1)] h-screen w-screen relative flex">
          <img src='/front_view_bg.png' className="left-[50vh] scale-170 absolute justify-center items-center bottom-10 blur-sm object-cover"/>
          <div className="absolute bottom-0 left-0 w-full h-screen bg-gradient-to-t from-black/60 border-0 z-[-1]" />
        </div>
      </div>
  );
};

export default About;
