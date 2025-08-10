import React from "react";

const Website = () => {
  return (
    <main>
      {/* Hero: black, bottom-aligned */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="flex min-h-[280px] sm:min-h-[360px] md:min-h-[420px] lg:min-h-[480px] flex-col justify-end">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4">
              <h1
                className="
                  font-thin leading-[0.9]
                  text-[clamp(2.25rem,10vw,6rem)]
                  tracking-tight
                "
              >
                PORTFOLIO
              </h1>

              <h2
                className="
                  mb-1 sm:mb-2 opacity-80 whitespace-nowrap
                  text-[clamp(0.95rem,2.5vw,1.5rem)]
                "
              >
                2024 – present
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-12 sm:h-16 md:h-24" />
    </main>
  );
};

export default Website;
