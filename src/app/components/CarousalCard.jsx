import React from "react";
import { Star } from "lucide-react";

const CarousalCard = ({ imageSrc, name, title, review, rating = 0 }) => {
  const safeRating = Math.max(0, Math.min(5, Number(rating) || 0));

  return (
    <article
      className="
        w-full
        max-w-[92vw] sm:max-w-[420px] md:max-w-[440px]
        h-[380px] sm:h-[400px] md:h-[420px]   /* Fixed height */
        bg-[#111] text-white
        rounded-2xl shadow-lg
        p-5 sm:p-6
        flex flex-col
      "
    >
      {/* Header */}
      <header className="flex items-center gap-3 sm:gap-4">
        <img
          src={imageSrc}
          alt={`${name} avatar`}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
          loading="lazy"
        />
        <div className="min-w-0">
          <h2 className="text-base sm:text-lg font-semibold leading-tight truncate">
            {name}
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 leading-snug truncate">
            {title}
          </p>
        </div>
      </header>

      <hr className="border-gray-800 my-3" />

      {/* Review (scrolls if too long) */}
      <p className="text-[0.9rem] sm:text-[0.95rem] text-gray-300 leading-relaxed flex-grow overflow-hidden">
        {review}
      </p>

      {/* Rating */}
      <div className="mt-4 flex items-center gap-2">
        <span className="text-white font-bold tabular-nums">
          {safeRating.toFixed(1)}
        </span>
        <div className="flex items-center gap-1" aria-label={`Rating ${safeRating} out of 5`}>
          {Array.from({ length: 5 }).map((_, i) => {
            const fill = Math.max(0, Math.min(1, safeRating - i));
            return (
              <span key={i} className="relative inline-block w-4 h-4 sm:w-5 sm:h-5">
                <Star className="w-full h-full text-gray-600" />
                {fill > 0 && (
                  <span
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${fill * 100}%` }}
                    aria-hidden="true"
                  >
                    <Star className="w-full h-full text-yellow-400 fill-yellow-400" />
                  </span>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default CarousalCard;
git 