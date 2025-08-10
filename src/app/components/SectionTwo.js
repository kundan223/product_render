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
    <div className="w-full p-2">
      {/* Image Container */}
      <div className="relative rounded overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 h-[180px] md:h-[250px]">
        <Image
          src={imageSrc}
          alt="Case Study"
          fill
          className="object-cover"
          sizes="(min-width: 768px) 22vw, 100vw"
          priority={false}
        />
        {/* Button on top of image */}
        <Link
          href={getRoutePath(route)}
          className="absolute bottom-3 left-3 md:bottom-4 md:left-4 px-4 py-1.5 md:px-6 md:py-2 border border-white bg-[#838383]/30 text-white rounded-full text-xs md:text-sm text-center backdrop-blur-md transition-all hover:bg-[#838383]/60"
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
    const ctx = gsap.context(() => {
      gsap.to(leftRef.current, {
        yPercent: -30,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to(centerRef.current, {
        yPercent: -15,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to(rightRef.current, {
        yPercent: -45,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col md:flex-row justify-center items-start py-20 relative overflow-hidden gap-6"
    >
      {/* Left Case Studies */}
      <div ref={leftRef} className="flex flex-col justify-between w-full md:w-[22%] gap-4">
        <CaseStudyInline imageSrc="/Images/caseStudy1.png" route="/case-study/project1" />
        <CaseStudyInline imageSrc="/Images/caseStudy2.png" route="/case_study_1" />
      </div>

      {/* Center Portfolio Image */}
      <div ref={centerRef} className="w-full md:w-[50%] flex justify-center">
        <PortfolioImage />
      </div>

      {/* Right Case Studies */}
      <div ref={rightRef} className="flex flex-col justify-between w-full md:w-[22%] gap-4">
        <CaseStudyInline imageSrc="/Images/caseStudy3.png" route="/case-study/project3" />
        <CaseStudyInline imageSrc="/Images/caseStudy4.png" route="/case-study/project4" />
      </div>

      {/* Button */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <Link
          href="/book-call"
          className="relative px-8 py-3 text-white text-lg font-semibold rounded-md border border-white bg-transparent transition-all duration-500 hover:shadow-[0_0_5px_white]"
        >
          Book a Free Call
        </Link>
      </div>
    </section>
  );
};

export default SectionTwo;
