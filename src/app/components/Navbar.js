import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full overlay py-4 absolute left-0 top-0">
      <div className="mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3 px-4 md:px-6">
        {/* Left: Services (stacked vertically) */}
        <div className="w-full md:w-3/12">
          <div className="pl-0 md:pl-2 space-y-1">
            <a href="#product-video" className="block hover:underline">
              PRODUCT VIDEO
            </a>
            <a href="#product-renders" className="block hover:underline">
              PRODUCT RENDERS
            </a>
          </div>
        </div>

        {/* Right: Navigation */}
        <div className="w-full md:w-7/12">
          <div className="flex flex-wrap md:justify-end gap-x-3 gap-y-1">
            <a href="#work" className="hover:underline">
              Work,
            </a>
            <a href="#about" className="hover:underline">
              About,
            </a>
            <a href="#blogs" className="hover:underline">
              Blogs
            </a>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
