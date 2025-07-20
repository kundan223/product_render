import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import SectionTwo from './SectionTwo';
import MeetMe from './MeetMe';
import Portfolio from './Portfolio';
import Carousal from './Carousal';
import End from './End';
const Website = () => {
  return (
    <main>
      <Navbar />
      <HeroSection/>
      <SectionTwo/>
      <MeetMe/>
      <Portfolio/>
      <Carousal/>
      <End/>
    </main>
  );
};

export default Website;
