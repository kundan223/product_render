'use client';

import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  return (
    <nav className="w-full overlay py-4 absolute left-0 top-0 z-50">
      <div className="mx-auto flex items-center justify-between gap-3 px-4 md:px-6">
        {/* Left: Services (stacked vertically on md+) */}
        <div className="hidden md:block md:w-3/12">
          <div className="pl-2 space-y-1">
            <a href="#product-video" className="block hover:underline">
              PRODUCT VIDEO
            </a>
            <a href="#product-renders" className="block hover:underline">
              PRODUCT RENDERS
            </a>
          </div>
        </div>

        {/* Mobile: hamburger (left side) */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="side-menu"
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex items-center justify-center rounded-md border border-white/60 text-white/90 px-3 py-2 backdrop-blur-sm bg-white/10 hover:bg-white/20 transition"
        >
          {/* Hamburger icon */}
          <span className="sr-only">Open menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"/>
          </svg>
        </button>

        {/* Spacer on mobile so hamburger sits left; hide on md where left column shows */}
        <div className="md:hidden flex-1" />

        {/* Right: Navigation (desktop) */}
        <div className="hidden md:block md:w-7/12">
          <div className="flex flex-wrap justify-end gap-x-3 gap-y-1">
            <a href="#work" className="hover:underline">Work</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#blogs" className="hover:underline">Blogs</a>
          </div>
        </div>
      </div>

      {/* ----- Mobile Side Menu (Left Drawer) ----- */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px] transition-opacity ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
      />
      {/* Drawer */}
      <aside
        id="side-menu"
        className={`fixed left-0 top-0 z-50 h-full w-72 max-w-[85%] bg-neutral-950/95 text-white border-r border-white/10 
          transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 flex items-center justify-between border-b border-white/10">
          <span className="text-sm tracking-wider opacity-80">MENU</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={close}
            className="rounded-md p-2 hover:bg-white/10 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <nav className="p-4 space-y-2">
          <a href="#work" onClick={close}
             className="block rounded-lg px-3 py-2 hover:bg-white/10 transition">
            Work
          </a>
          <a href="#about" onClick={close}
             className="block rounded-lg px-3 py-2 hover:bg-white/10 transition">
            About
          </a>
          <a href="#blogs" onClick={close}
             className="block rounded-lg px-3 py-2 hover:bg-white/10 transition">
            Blogs
          </a>

          {/* Internal page example */}
          <Link href="/drone2" className="block rounded-lg px-3 py-2 hover:bg-white/10 transition" onClick={close}>
            Drone2
          </Link>
        </nav>

        {/* Bottom section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <Link
            href="/#contact"
            onClick={close}
            className="block text-center rounded-full border border-white/60 bg-white/10 px-4 py-2 hover:bg-white/20 transition"
          >
            Contact
          </Link>
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
