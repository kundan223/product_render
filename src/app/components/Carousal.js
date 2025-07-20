import React from 'react';
import CarousalCard from './CarousalCard';

const testimonials = [
  {
    imageSrc: "/profile1.jpg",
    name: "June Lee",
    title: "CEO of GreenRoots",
    review: `"Meily's strategic approach to design brought our brand vision to life. The packaging and brand elements she developed elevated our aesthetic and aligned perfectly with our sustainability values."`,
    rating: 5.0,
  },
  {
    imageSrc: "/profile2.jpg",
    name: "Sam Carter",
    title: "Product Head, BloomTech",
    review: `"The UI/UX we got was stunning. Our users loved the experience and we saw increased engagement across our platform within weeks."`,
    rating: 4.8,
  },
  {
    imageSrc: "/profile3.jpg",
    name: "Ava Martinez",
    title: "Founder, Lush&Co",
    review: `"A phenomenal designer who just gets it. Our brand feels premium and personal, just how we wanted."`,
    rating: 5.0,
  },
];

const CarousalWrapper = () => {
  return (
    <section className="w-full bg-black py-12 px-4">
      <div className="mb-8">
        <h2 className="text-white text-2xl font-normal text-left">Testimonials ▼</h2>
        <div className="w-full h-[1px] bg-white/30 mt-2" />
      </div>

      <div className="flex overflow-x-auto space-x-6 no-scrollbar px-4">
        {testimonials.map((item, index) => (
          <CarousalCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default CarousalWrapper;
