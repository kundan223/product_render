import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import SectionTwo from './SectionTwo';
import MeetMe from './MeetMe';
import Portfolio from './Portfolio';
import Carousal from './Carousal';
const Website = () => {
  return (
    <main>
      <Navbar />
      <HeroSection/>
      <SectionTwo/>
      <MeetMe/>
      <Portfolio/>
      <Carousal/>
      
    </main>
  );
};

export default Website;
