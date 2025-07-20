import React from 'react';
import CarousalCard from './CarousalCard';

const testimonials = [
  {
    imageSrc: "/Images/user.png",
    name: "June Lee",
    title: "CEO of GreenRoots",
    review: `"Meily's strategic approach to design brought our brand vision to life. The packaging and brand elements she developed elevated our aesthetic and aligned perfectly with our sustainability values."`,
    rating: 5.0,
  },
  {
    imageSrc: "/Images/user.png",
    name: "Sam Carter",
    title: "Product Head, BloomTech",
    review: `"The UI/UX we got was stunning. Our users loved the experience and we saw increased engagement across our platform within weeks."`,
    rating: 4.8,
  },
  {
    imageSrc: "/Images/user.png",
    name: "Ava Martinez",
    title: "Founder, Lush&Co",
    review: `"A phenomenal designer who just gets it. Our brand feels premium and personal, just how we wanted."`,
    rating: 5.0,
  },
];

const CarousalWrapper = () => {
  return (
    <section className="w-full bg-black py-12 px-4 relative">
      <div className="mb-8">
        <h2 className="text-white text-2xl font-normal text-left">Testimonials ▼</h2>
        <div className="w-full h-[1px] bg-white/30 mt-2" />
      </div>

      {/* Fade face left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-16 h-16 rounded-full bg-black/50">
        <img src="/Images/user.png" alt="fade face" className="w-full h-full object-cover rounded-full opacity-20" />
      </div>

      {/* Carousel scroll */}
      <div className="flex overflow-x-auto space-x-6 no-scrollbar px-4 relative z-20">
        {testimonials.map((item, index) => (
          <CarousalCard key={index} {...item} />
        ))}
      </div>

      {/* Fade face right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-16 h-16 rounded-full bg-black/50">
        <img src="/Images/user.png" alt="fade face" className="w-full h-full object-cover rounded-full opacity-20" />
      </div>
    </section>
  );
};

export default CarousalWrapper;
