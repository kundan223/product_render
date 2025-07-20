import React from 'react';

const Portfolio = () => {
  return (
    <div className="px-6 py-10 bg-black text-white">
      <div className="container mx-auto">
        {/* Heading */}
        <h1 className="text-5xl md:text-2xl font-light mb-4">
          Services we Provide ▼
        </h1>

        {/* Full-width white line */}
        <div className="w-full h-[2px] bg-white/30 "></div>

        {/* Full-screen width image */}
        <div>
          <img
            src="/Images/Group 30.png"
            alt="Portfolio"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
