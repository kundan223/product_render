import React from 'react';
import PortfolioImage from './PortfolioImage';

const MeetMe = () => {
  return (
    <main className="px-6 py-10 bg-black">
      <div className="flex flex-col md:flex-row items-center justify-between container mx-auto gap-10">
        <div className="left text flex-1">
          <h1 className="text-5xl md:text-6xl tracking-tight font-light mb-6">
            MEET KUNDAN
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            I help brands stand out with photorealistic product renders and custom-built websites.
            From concept to code, I handle everything — design, development, and 3D visuals.
            One person, full service — built for startups, crafted for impact.
          </p>

          {/* Line */}
          <div className="h-[2px] w-full bg-white/20 my-6" />

          {/* Tags */}
          <div className="flex flex-wrap gap-4 mt-4">
            {[
              'Product Animation',
              'Web Developer',
              'Web Designer',
              'Product Render',
            ].map((tag, i) => (
              <div
                key={i}
                className="rounded-sm px-4 py-2 bg-white/10 text-white text-sm border border-white/20 backdrop-blur-sm"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Image */}
        <div className="right flex-1">
          <PortfolioImage />
        </div>
      </div>
    </main>
  );
};

export default MeetMe;
