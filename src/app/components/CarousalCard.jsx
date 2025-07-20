import React from 'react';
import { Star } from 'lucide-react';

const CarousalCard = ({ imageSrc, name, title, review, rating }) => {
  return (
    <div className="bg-[#1a1a1a] text-white p-6 rounded-xl shadow-lg w-[300px] flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <img src={imageSrc} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-sm text-gray-400">{title}</p>
        </div>
      </div>

      <hr className="border-gray-700" />

      <p className="text-sm text-gray-300 leading-relaxed">{review}</p>

      <div className="flex items-center gap-1">
        <span className="text-white font-bold">{rating.toFixed(1)}</span>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"} />
        ))}
      </div>
    </div>
  );
};

export default CarousalCard;
