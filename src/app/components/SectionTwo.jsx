'use client';

import React, { useEffect, useRef } from 'react';
import CaseStudy from './CaseStudy';
import PortfolioImage from './PortfolioImage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SectionTwo = () => {
  const sectionRef = useRef();
  const centerRef = useRef();
  const leftRef = useRef();
  const rightRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Exaggerated parallax scroll effect
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
        <CaseStudy imageSrc="/Images/caseStudy1.png" route="/case-study/project1" />
        <CaseStudy imageSrc="/Images/caseStudy2.png" route="/case-study/project2" />
      </div>

      {/* Center Portfolio Image */}
      <div ref={centerRef} className="w-full md:w-[50%] flex justify-center">
        <PortfolioImage />
      </div>

      {/* Right Case Studies */}
      <div ref={rightRef} className="flex flex-col justify-between w-full md:w-[22%] gap-4">
        <CaseStudy imageSrc="/Images/caseStudy3.png" route="/case-study/project3" />
        <CaseStudy imageSrc="/Images/caseStudy4.png" route="/case-study/project4" />
      </div>

      {/* Button */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 ">
     <button className="relative px-8 py-3 text-white text-lg font-semibold rounded-md border border-white bg-transparent transition-all duration-500 hover:shadow-[0_0_5px_white]">
  Book A Free Call
</button>


      </div>
    </section>
  );
};

export default SectionTwo;
