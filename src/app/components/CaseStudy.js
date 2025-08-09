'use client';

import React, { useState } from 'react';
import DroneCaseStudy from './case_study/DroneCaseStudy';
import Drone2CaseStudy from './case_study/Drone2CaseStudy';
import SolarCaseStudy from './case_study/SolarCaseStudy';
import TankCaseStudy from './case_study/TankCaseStudy';

const CaseStudy = ({ imageSrc, caseType }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Map caseType to components
  const caseStudyComponents = {
    drone1: <DroneCaseStudy />,
    drone2: <Drone2CaseStudy />,
    solar: <SolarCaseStudy />,
    tank: <TankCaseStudy />,
  };

  return (
    <>
      {/* Thumbnail */}
      <div className="w-full p-2">
        <div className="relative rounded- overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 h-[180px] md:h-[250px]">
          <img
            src={imageSrc}
            alt="Case Study"
            className="w-full h-full object-cover"
          />

          {/* Button */}
          <div
            onClick={() => setIsOpen(true)}
            className="absolute bottom-3 left-3 md:bottom-4 md:left-4 px-4 py-1.5 md:px-6 md:py-2 border border-white bg-[#838383]/30 text-white rounded-full text-xs md:text-sm text-center backdrop-blur-md transition-all hover:bg-[#838383]/60 cursor-pointer"
          >
            View Discription ▲
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          {/* Prevent click on modal content from closing */}
          <div
            className="relative bg-white rounded-2xl shadow-lg w-[90%] md:w-[70%] lg:w-[60%] max-h-[80%] overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
            >
              ×
            </button>

            {/* Case study content */}
            {caseStudyComponents[caseType] || <p>No case study found.</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default CaseStudy;
