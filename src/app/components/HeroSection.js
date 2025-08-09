import React from "react";

const Website = () => {
  return (
    <main>
      {/* Black section with bottom-aligned text */}
      <div className="bg-black text-white flex flex-col justify-end px-4 sm:px-8 md:px-12 lg:px-20 h-[300px] sm:h-[400px] md:h-[450px]">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between w-full">
          <h1 className="font-thin leading-none mb-2 sm:mb-4 text-[clamp(2rem,8vw,6rem)]">
            PORTFOLIO
          </h1>
          <h1 className="text-base sm:text-lg md:text-2xl mb-1 sm:mb-6 opacity-80">
            2024 – present
          </h1>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-16 sm:h-20 md:h-28" />
    </main>
  );
};

export default Website;
