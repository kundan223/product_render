import React from 'react';
import Link from 'next/link';

const CaseStudy = ({ imageSrc, route }) => {
  return (
    <div className="w-full p-2 ">
      {/* Image Container */}
      <div className="relative rounded- overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 h-[180px] md:h-[250px]">
        <img
          src={imageSrc}
          alt="Case Study"
          className="w-full h-full object-cover"
        />

        {/* Button on top of image */}
        <Link href={route}>
          <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 px-4 py-1.5 md:px-6 md:py-2 border border-white bg-[#838383]/30 text-white rounded-full text-xs md:text-sm text-center backdrop-blur-md transition-all hover:bg-[#838383]/60 cursor-pointer">
            View CaseStudy ▲
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CaseStudy;
