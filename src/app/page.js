// app/page.tsx (or page.jsx)
import Website from "./components/Website";

export default function Home() {
  return (
    <main className="relative min-h-[100svh]">
      {/* Background media */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Mobile / reduced motion: image poster */}
        <picture className="block h-full w-full sm:hidden motion-reduce:block">
          <source srcSet="/images/hero-mobile.webp" type="image/webp" />
          <img
            src="/images/hero-mobile.jpg"
            alt=""
            className="h-full w-full object-cover"
            loading="eager"
          />
        </picture>

        {/* ≥sm screens: autoplaying video (hidden if user prefers reduced motion) */}
        <video
          className="hidden h-full w-full object-cover sm:block motion-reduce:hidden"
          src="/videos/Hero-section-render.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/hero-poster.jpg"
        />

        {/* Contrast overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10">
        {/* Optional: top padding if your hero has nav overlapping on mobile */}
        <div className="px-4 sm:px-6 lg:px-8 pt-[env(safe-area-inset-top)]">
          <Website />
        </div>
      </div>
    </main>
  );
}
