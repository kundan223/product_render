import React from 'react';

const PortfolioImage = () => {
  return (
    <div className="relative w-fit group cursor-pointer">
      {/* Image with grayscale and hover effect */}
      <img
        src="/Images/Portfolio.jpg"
        alt="Portfolio"
        className="rounded-sm grayscale group-hover:grayscale-0 transition-all duration-500 w-full h-auto"
      />

      {/* Button centered at bottom as cursor mimic */}
      <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 rounded-full opacity-90 group-hover:scale-105 transition-all duration-300 pointer-events-none">
        About Me
      </button>
    </div>
  );
};

export default PortfolioImage;
