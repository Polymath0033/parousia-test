import React from 'react';
import { Star } from 'lucide-react';
import type { StarRatingProps } from '../../types';

const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  count, 
  size = 'w-4 h-4',
  showCount = true 
}) => {
  const stars: React.ReactElement[] = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(
        <Star 
          key={i} 
          className={`${size} fill-yellow-400 text-yellow-400`} 
        />
      );
    } else if (i === fullStars && hasHalfStar) {
      stars.push(
        <div key={i} className={`relative ${size}`}>
          <Star className={`${size} text-gray-300 absolute`} />
          <div className="overflow-hidden w-1/2">
            <Star className={`${size} fill-yellow-400 text-yellow-400`} />
          </div>
        </div>
      );
    } else {
      stars.push(
        <Star 
          key={i} 
          className={`${size} text-gray-300`} 
        />
      );
    }
  }

  return (
    <div className="flex items-center gap-1">
      <div 
        className="flex" 
        aria-label={`Rating: ${rating} out of 5 stars`}
        role="img"
      >
        {stars}
      </div>
      {showCount && (
        <span 
          className="text-sm text-gray-500" 
          aria-label={`${count} reviews`}
        >
          ({count})
        </span>
      )}
    </div>
  );
};

export default StarRating;