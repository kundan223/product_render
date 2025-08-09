"use client";
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
import CarousalCard from "./CarousalCard";

type Testimonial = {
  imageSrc: string;
  name: string;
  title: string;
  review: string;
  rating: number;
};

const testimonials: Testimonial[] = [
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

const CarousalWrapper: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isPointerDown, setIsPointerDown] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1); // 1 → right, -1 → left
  const speedRef = useRef<number>(0.35); // px per frame

  // Duplicate content to enable seamless looping
  const loopData = useMemo(
    () => [...testimonials, ...testimonials, ...testimonials],
    []
  );

  // Start animating only when visible
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => setIsInView(entries[0]?.isIntersecting ?? false),
      { root: null, threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // When we pass 1/3 or 2/3, snap back to the middle copy
  const normalizeScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const total = el.scrollWidth;
    const visible = el.clientWidth;
    if (total <= visible) return;

    const one = total / 3; // each block length (since duplicated 3x)
    if (el.scrollLeft <= one * 0.2) {
      el.scrollLeft += one; // jump forward one block
    } else if (el.scrollLeft >= one * 1.8) {
      el.scrollLeft -= one; // jump back one block
    }
  }, []);

  // Animation loop with requestAnimationFrame
  const tick = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    if (isHovering || isPointerDown || !isInView) return;

    el.scrollLeft += speedRef.current * direction;
    normalizeScroll();
    frameRef.current = requestAnimationFrame(tick);
  }, [direction, isHovering, isPointerDown, isInView, normalizeScroll]);

  // Start/stop RAF on visibility/interaction changes
  useEffect(() => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    if (isInView && !isHovering && !isPointerDown) {
      frameRef.current = requestAnimationFrame(tick);
    }
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [isInView, isHovering, isPointerDown, tick]);

  // Drag-to-scroll
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let startX = 0;
    let startScroll = 0;

    const onPointerDown = (e: PointerEvent) => {
      setIsPointerDown(true);
      startX = e.clientX;
      startScroll = el.scrollLeft;
      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!isPointerDown) return;
      const dx = e.clientX - startX;
      el.scrollLeft = startScroll - dx;
    };
    const onPointerUp = (e: PointerEvent) => {
      setIsPointerDown(false);
      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    };

    el.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [isPointerDown]);

  // Wheel horizontal scroll (and prevent vertical-wheel showing scrollbar)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        el.scrollLeft += e.deltaX;
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // Keyboard arrows
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") el.scrollLeft += 120;
      if (e.key === "ArrowLeft") el.scrollLeft -= 120;
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, []);

  // Reverse direction when user scrolls page up/down
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const dir = window.scrollY > lastY ? 1 : -1;
      setDirection((dir === 0 ? 1 : dir) as 1 | -1);
      lastY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Arrow click handlers
  const nudge = (delta: number) => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollLeft += delta;
    normalizeScroll();
  };

  return (
    <section className="w-full bg-black py-12 px-4 relative">
      <div className="mb-8">
        <h2 className="text-white text-2xl sm:text-3xl font-normal text-left">
          Testimonials ▼
        </h2>
        <div className="w-full h-[1px] bg-white/30 mt-2" />
      </div>

      {/* side fades (subtle vignette) */}
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 z-10 w-16 h-16 rounded-full bg-black/50">
        <img
          src="/Images/user.png"
          alt="fade face"
          className="w-full h-full object-cover rounded-full opacity-20"
        />
      </div>
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 z-10 w-16 h-16 rounded-full bg-black/50">
        <img
          src="/Images/user.png"
          alt="fade face"
          className="w-full h-full object-cover rounded-full opacity-20"
        />
      </div>

      {/* arrows */}
      <button
        aria-label="Previous"
        onClick={() => nudge(-320)}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-30 hidden sm:flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white/80 backdrop-blur hover:bg-white/10"
      >
        ←
      </button>
      <button
        aria-label="Next"
        onClick={() => nudge(320)}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-30 hidden sm:flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white/80 backdrop-blur hover:bg-white/10"
      >
        →
      </button>

      {/* scroller */}
      <div
        ref={containerRef}
        tabIndex={0}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="
          relative z-20 flex overflow-x-auto no-scrollbar px-2 sm:px-4
          snap-x snap-mandatory gap-4 sm:gap-6
        "
        // Keep smooth behavior off CSS (we manually animate)
        style={{ scrollBehavior: "auto" }}
      >
        {loopData.map((item, idx) => (
          <div
            key={idx}
            className="
              snap-center shrink-0
              w-[85%] xs:w-[75%] sm:w-[320px] md:w-[380px] lg:w-[420px]
            "
          >
            <CarousalCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarousalWrapper;
