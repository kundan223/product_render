'use client';

import React from 'react';
import Image from 'next/image';

export default function CaseStudyPage() {
  return (
    <div className="w-full text-white selection:bg-white/10 selection:text-white">
      {/* HERO */}
      <section className="relative w-full bg-black">
        <div className="relative h-[54vh] sm:h-[62vh] md:h-[70vh] min-h-[340px] sm:min-h-[460px] md:min-h-[520px]">
          <Image
            src="/CaseStudy/1/hero.png"
            alt="Hero background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/40" />
        </div>
      </section>

      {/* wrapper holds the center white line so it starts right under hero */}
      <div className="relative">
        {/* center spine (visible from sm and up) */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-white/10 sm:block" />

        {/* BLACK BODY */}
        <section className="relative bg-black">
          {/* desktop-only background lines */}
          <div className="pointer-events-none absolute inset-0 hidden md:block">
            <div className="relative h-full w-full">
              <Image
                src="/CaseStudy/1/bg_lines.png"
                alt="background lines"
                fill
                className="object-cover opacity-70"
                sizes="(min-width: 1024px) 100vw, 0px"
              />
            </div>
          </div>

          {/* content */}
          <div className="relative mx-auto w-[92%] max-w-[1200px] py-10 sm:py-14 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14">
            {/* LEFT */}
            <div className="relative">
              <p className="text-pretty text-[13px] sm:text-[13.5px] md:text-[14px] leading-6 sm:leading-7 text-white/85 max-w-prose">
                The startup was struggling to visually communicate how their system works — including its sensors,
                storage mechanism, and deployment strategy. They needed 3D renders that could walk investors through
                the product without needing lengthy explanations.
              </p>

              <div className="mt-6 sm:mt-8 flex items-center gap-3">
                <div className="h-px w-12 sm:w-16 bg-white/70" />
                <p className="text-[10px] sm:text-[11px] tracking-[0.25em] text-white/80">
                  ISOMETRIC RENDERS FOR PROPOSAL
                </p>
              </div>

              {/* stacked panels */}
              <div className="mt-5 sm:mt-8 space-y-4 sm:space-y-6">
                <div className="rounded-sm border border-white/10 bg-white/5 p-2.5 sm:p-4">
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src="/CaseStudy/1/2_2.png"
                      alt="Isometric render 1"
                      fill
                      className="object-contain"
                      sizes="(min-width: 1024px) 44vw, 92vw"
                    />
                  </div>
                </div>
                <div className="rounded-sm border border-white/10 bg-white/5 p-2.5 sm:p-4">
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src="/CaseStudy/1/1_4.png"
                      alt="Isometric render 2"
                      fill
                      className="object-contain"
                      sizes="(min-width: 1024px) 44vw, 92vw"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="h-px w-12 sm:w-16 bg-white/70" />
                <p className="text-[10px] sm:text-[11px] tracking-[0.25em] text-white/80">
                  COVER PAGE RENDER OF THE PROPOSAL
                </p>
              </div>

              <div className="mt-6 sm:mt-8 flex items-center gap-3">
                <div className="h-px w-12 sm:w-16 bg-white/70" />
                <p className="text-[10px] sm:text-[11px] tracking-[0.25em] text-white/80">
                  CREATIVE PROCESS
                </p>
              </div>

              <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-5 text-[13px] sm:text-[13.5px] md:text-[14px] leading-6 sm:leading-7 text-white/85 text-balance">
                <p>
                  <span className="font-medium text-white">Research &amp; Understanding: </span>
                  I began by discussing the product&apos;s functionality with the founder to deeply understand how the
                  landmine drone and its storage unit worked.
                </p>
                <p>
                  <span className="font-medium text-white">Concept &amp; Composition: </span>
                  We collaboratively decided on camera angles that would make the renders intuitive and impactful. I
                  focused on isometric views for clarity and professionalism.
                </p>
                <div>
                  <p className="font-medium text-white">Execution:</p>
                  <ul className="mt-2 list-disc space-y-2 pl-5">
                    <li>
                      <span className="font-medium">Cover Render:</span> Drone mid-flight, deploying landmines over a battlefield
                    </li>
                    <li>
                      <span className="font-medium">Isometric Overview:</span> Full drone model with key labels
                    </li>
                    <li>
                      <span className="font-medium">Component Breakdown:</span> Isometric view of the throwing mechanism with landmines
                    </li>
                    <li>
                      <span className="font-medium">Translucent Cutaway:</span> Revealing internal storage and stacking of landmines
                    </li>
                    <li>
                      <span className="font-medium">Deployment Scene:</span> Mines being dropped over a small area with terrain context
                    </li>
                  </ul>
                </div>

                <div className="flex items-center gap-3 pt-2 sm:pt-3">
                  <div className="h-px w-12 sm:w-16 bg-white/70" />
                  <p className="text-[10px] sm:text-[11px] tracking-[0.25em] text-white/80">DETAIL VIEW</p>
                </div>
              </div>

              <div className="relative mt-5 sm:mt-6">
                <div className="relative w-full max-w-[640px] md:max-w-[520px] rounded-sm border border-white/10 bg-white/5">
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src="/CaseStudy/1/3_1.png"
                      alt="Detail"
                      fill
                      className="object-contain"
                      sizes="(min-width: 1024px) 44vw, 92vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* divider */}
          <div className="relative mx-auto w-[92%] max-w-[1200px] pb-6">
            <div className="mx-auto h-px w-full bg-white/10" />
          </div>
        </section>

        {/* BOTTOM TERRAIN */}
        <section className="relative bg-black pb-16 sm:pb-20">
          <div className="relative mx-auto w-[92%] max-w-[1200px]">
            <div className="relative mx-auto mt-4 sm:mt-6 w-full">
              <div className="relative mx-auto w-[96%] sm:w-full max-w-[980px]">
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src="/CaseStudy/1/4_1.png"
                    alt="Terrain"
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 60vw, 92vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
