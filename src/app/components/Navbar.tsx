'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import Link from 'next/link';

// A local video preview link (hover shows centered floating preview)
type HoverPreviewProps = {
  href: string;
  label: string;
  videoSrc: string; // local video path e.g. "/videos/sample.mp4"
};

function HoverPreviewLink({ href, label, videoSrc }: HoverPreviewProps) {
  const [open, setOpen] = useState(false);
  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);

  const scheduleOpen = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    openTimer.current = window.setTimeout(() => setOpen(true), 80);
  };

  const scheduleClose = () => {
    if (openTimer.current) window.clearTimeout(openTimer.current);
    // small delay so you can move cursor from link to preview
    closeTimer.current = window.setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative block w-fit"
      onMouseEnter={scheduleOpen}
      onMouseLeave={scheduleClose}
      onFocus={scheduleOpen}
      onBlur={scheduleClose}
    >
      <a href={href} className="block hover:underline">{label}</a>

      {/* Centered floating preview */}
      {open && (
        <div className="fixed inset-0 z-[70] pointer-events-none flex items-center justify-center">
          <div
            className="pointer-events-auto rounded-xl overflow-hidden ring-1 ring-white/15 shadow-2xl shadow-black/50 bg-black"
            onMouseEnter={scheduleOpen}
            onMouseLeave={scheduleClose}
            style={{ width: 320 }}
          >
            <div className="aspect-video w-full">
              <video
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-3 py-1.5 text-[11px] text-white/70 bg-black/70">
              Preview: {label}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const openBtnRef = useRef<HTMLButtonElement | null>(null);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [close]);

  // Lock body scroll when menu is open + return focus to trigger
  useEffect(() => {
    if (open) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
        openBtnRef.current?.focus();
      };
    }
  }, [open]);

  return (
    <nav className="w-full overlay py-4 absolute left-0 top-0 z-50">
      <div className="mx-auto flex items-center justify-between gap-3 px-4 md:px-6">
        {/* Left: Services (stacked vertically on md+) */}
        <div className="hidden md:block md:w-3/12">
          <div className="pl-2 space-y-2">
            <HoverPreviewLink
              href="#product-video"
              label="PRODUCT VIDEO"
              videoSrc="/videos/Product_animation.mp4"
            />
            <HoverPreviewLink
              href="#product-renders"
              label="PRODUCT RENDERS"
              videoSrc="/videos/Product_render.mp4"
            />
          </div>
        </div>

        {/* Mobile: hamburger */}
        <button
          ref={openBtnRef}
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="side-menu"
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex items-center justify-center rounded-md border border-white/60 text-white/90 px-3 py-2 backdrop-blur-sm bg-white/10 hover:bg-white/20 transition"
        >
          <span className="sr-only">Open menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"/>
          </svg>
        </button>

        {/* Spacer on mobile */}
        <div className="md:hidden flex-1" />

        {/* Right: Navigation (desktop) */}
        <div className="hidden md:block md:w-7/12">
          <div className="flex flex-wrap justify-end gap-x-3 gap-y-1">
            <a href="/work" className="hover:underline">Work</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="/blogs" className="hover:underline">Blogs</a>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px] transition-opacity ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={close}
      />

      {/* Drawer */}
      <aside
        id="side-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
        className={`fixed left-0 top-0 z-50 h-full w-72 max-w-[85%] bg-neutral-950/95 text-white border-r border-white/10 
          transition-transform duration-300 ease-out
          ${open ? 'translate-x-0' : '-translate-x-full'}`}
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
          <Link
            href="/work"
            onClick={close}
            className="block rounded-lg px-3 py-2 hover:bg-white/10 transition"
          >
            Work
          </Link>
          <a
            href="#about"
            onClick={close}
            className="block rounded-lg px-3 py-2 hover:bg-white/10 transition"
          >
            About
          </a>
          <a
            href="/blogs"
            onClick={close}
            className="block rounded-lg px-3 py-2 hover:bg-white/10 transition"
          >
            Blogs
          </a>
        </nav>

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
