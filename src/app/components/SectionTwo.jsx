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
      // Center image animation
      gsap.fromTo(
        centerRef.current,
        { y: 150, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: centerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reset',
            once: false,
          },
        }
      );

      // Left and right CaseStudy blocks
      gsap.fromTo(
        [leftRef.current, rightRef.current],
        { y: 150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reset',
            once: false,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <section ref={sectionRef} className="flex flex-col md:flex-row justify-center items-start gap-4 py-20">
      {/* Left Side */}
      <div ref={leftRef} className="flex flex-col justify-between w-full md:w-[22%]">
        <CaseStudy imageSrc="/Images/caseStudy1.png" route="/case-study/project1" />
        <CaseStudy imageSrc="/Images/caseStudy2.png" route="/case-study/project2" />
      </div>

      {/* Center Portfolio Image */}
      <div ref={centerRef} className="w-full md:w-[50%] flex justify-center">
        <PortfolioImage />
      </div>

      {/* Right Side */}
      <div ref={rightRef} className="flex flex-col justify-between w-full md:w-[22%]">
        <CaseStudy imageSrc="/Images/caseStudy3.png" route="/case-study/project3" />
        <CaseStudy imageSrc="/Images/caseStudy4.png" route="/case-study/project4" />
      </div>
    </section>
  );
};

export default SectionTwo;
