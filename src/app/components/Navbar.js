import React from 'react';

const Navbar = () => {
  return (
    <main className="w-full overlay py-4 absolute ">
      <div className="flex items-center">
        {/* Brand - 1/12 from the left */}
        <div className="w-1/12 pl-4">
          <a href="/" className="text-lg font-bold hover:underline">
            BANI
          </a>
        </div>

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
        <div className="w-7/12 flex justify-end pr-6">
  <a href="#work" className="hover:underline">Work,</a>
  <a href="#about" className="hover:underline">About,</a>
  <a href="#blogs" className="hover:underline">Blogs,</a>
</div>

      </div>
    </main>
  );
};

export default Navbar;
