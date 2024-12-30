import { useState } from "react";

export const Rating = ({ rating = 3, maxStars = 5 }) => {
  const [hovered, setHovered] = useState(0);
  const [selectedRating, setSelectedRating] = useState(rating);

  return (
    <div className="flex gap-1">
      {Array.from({ length: maxStars }, (_, index) => {
        const starIndex = index + 1;
        const isFilled = hovered >= starIndex || selectedRating >= starIndex;
        return (
          <svg
            key={starIndex}
            className={`w-6 h-6 cursor-pointer transition-colors ${
              isFilled ? "text-orange-500" : "text-gray-400"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill={isFilled ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        );
      })}
    </div>
  );
};