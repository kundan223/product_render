'use client';

import React, { useEffect, useRef } from 'react';
import PortfolioImage from './PortfolioImage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const CaseStudyInline = ({ imageSrc, route }) => {
  const getRoutePath = (r) => {
    if (r === 'project_1') return '/case-study/drone';
    return r;
  };

  return (
    <div className="w-full p-2 sm:p-3">
      {/* Image Card */}
      <div
        className="
          relative rounded-xl overflow-hidden
          grayscale hover:grayscale-0
          transition-all duration-500
          h-[52vw] sm:h-64 md:h-72 lg:h-64 xl:h-72
        "
      >
        <Image
          src={imageSrc}
          alt="Case Study"
          fill
          className="object-cover"
          sizes="(min-width:1280px) 22vw, (min-width:1024px) 28vw, (min-width:640px) 50vw, 100vw"
          priority={false}
        />
        <Link
          href={getRoutePath(route)}
          className="
            absolute bottom-3 left-3
            md:bottom-4 md:left-4
            px-4 py-1.5 md:px-6 md:py-2
            border border-white/80 bg-white/10 text-white
            rounded-full text-xs md:text-sm text-center
            backdrop-blur-md transition-all hover:bg-white/20
          "
        >
          View Case Study ▲
        </Link>
      </div>
    </div>
  );
};

const SectionTwo = () => {
  const sectionRef = useRef(null);
  const centerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const mm = gsap.matchMedia();

    // Only enable animations for md and larger
    mm.add('(min-width: 768px)', () => {
      const ctx = gsap.context(() => {
        const base = {
          ease: 'power1.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        };

        gsap.to(leftRef.current, { yPercent: -30, ...base });
        gsap.to(centerRef.current, { yPercent: -15, ...base });
        gsap.to(rightRef.current, { yPercent: -45, ...base });
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-12 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-10">
        {/* Grid: 1 col on mobile, 3 cols on lg+ */}
        <div
          className="
            grid gap-4 sm:gap-6
            grid-cols-1
            lg:grid-cols-[minmax(0,22%)_1fr_minmax(0,22%)]
          "
        >
          {/* Left column */}
          <div ref={leftRef} className="flex flex-col justify-between">
            <CaseStudyInline imageSrc="/Images/caseStudy1.png" route="/case-study/project1" />
            <CaseStudyInline imageSrc="/Images/caseStudy2.png" route="/case_study_1" />
          </div>

          {/* Center feature */}
          <div ref={centerRef} className="w-full flex justify-center">
            <div className="w-full">
              <PortfolioImage />
            </div>
          </div>

          {/* Right column */}
          <div ref={rightRef} className="flex flex-col justify-between">
            <CaseStudyInline imageSrc="/Images/caseStudy3.png" route="/case-study/project3" />
            <CaseStudyInline imageSrc="/Images/caseStudy4.png" route="/case-study/project4" />
          </div>
        </div>

        {/* CTA */}
        <div
          className="
            mt-6 flex justify-center px-4
            md:mt-0 md:absolute md:inset-x-0 md:bottom-6 md:px-0
          "
        >
          <Link
            href="/book-call"
            className="
              w-full sm:w-auto
              text-center
              rounded-full border border-white/80 bg-white/10 text-white
              px-6 sm:px-8 py-3
              text-base sm:text-lg font-semibold
              backdrop-blur-md
              transition-all duration-300
              hover:bg-white/20 hover:shadow-[0_0_8px_white]
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70
            "
          >
            Book a Free Call
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
