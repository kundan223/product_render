import React from 'react';
import Link from 'next/link';


const Navbar = () => {
  return (
    <main className="w-full overlay py-4 absolute">
      <div className="flex items-center">
        {/* Services - 3/12 from the left */}
        <div className="w-3/12 pl-4">
          <a href="#product-video" className="block hover:underline">
            PRODUCT VIDEO
          </a>
          <a href="#product-renders" className="block hover:underline">
            PRODUCT RENDERS
          </a>
        </div>

        {/* Navigation Links - 7/12 from the left */}
        <div className="w-7/12 flex justify-end pr-6 space-x-2">
          <a href="#work" className="hover:underline">Work,</a>
          <a href="#about" className="hover:underline">About,</a>
          <a href="#blogs" className="hover:underline">Blogs,</a>

          {/* New Drone Navigation Link */}
          <Link href="/drone2" className="hover:underline">
            Drone2
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
