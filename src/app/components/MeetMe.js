"use client";

import React, { useEffect, useRef } from "react";
import PortfolioImage from "./PortfolioImage";

const MeetMe = () => {
  const playerRef = useRef(null);

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new YT.Player("yt-player", {
        events: {
          onReady: (event) => {
            event.target.playVideo(); // Starts muted
          },
        },
      });
    };
  }, []);

  const handleUnmute = () => {
    if (playerRef.current) {
      playerRef.current.unMute();
    }
  };

  return (
    <main className="px-6 py-10 bg-black">
      <div className="flex flex-col md:flex-row items-center justify-between container mx-auto gap-10">
        {/* Left text section */}
        <div className="left text flex-1">
          <h1 className="text-5xl md:text-6xl tracking-tight font-light mb-6">
            MEET KUNDAN
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            I help brands stand out with photorealistic product renders and
            custom-built websites. From concept to code, I handle everything —
            design, development, and 3D visuals. One person, full service —
            built for startups, crafted for impact.
          </p>

          {/* Line */}
          <div className="h-[2px] w-full bg-white/20 my-6" />

          {/* Tags */}
          <div className="flex flex-wrap gap-4 mt-4">
            {[
              "Product Animation",
              "Web Developer",
              "Web Designer",
              "Product Render",
            ].map((tag, i) => (
              <div
                key={i}
                className="rounded-sm px-4 py-2 bg-white/10 text-white text-sm border border-white/20 backdrop-blur-sm"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Image + Video (Centered) */}
        <div className="relative flex items-center justify-center flex-1 group cursor-pointer">
          {/* Thumbnail image */}
          <img
            src="/Images/kundan_2.png"
            alt="Kundan"
            className="max-w-[300px] h-auto transition-opacity duration-300 group-hover:opacity-0"
          />

          {/* YouTube iframe on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <iframe
              id="yt-player"
              width="300"
              height="auto"
              src="https://www.youtube.com/embed/NZuUrNirO8M?autoplay=1&mute=1&controls=0&enablejsapi=1"
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="max-w-[300px] h-auto"
            ></iframe>

            {/* Click-to-unmute button */}
            <button
              onClick={handleUnmute}
              className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded hover:bg-opacity-75"
            >
              🔊 Unmute
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MeetMe;
