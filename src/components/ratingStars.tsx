import { StarIcon } from "@heroicons/react/24/solid";

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
}

const RatingStars = ({ rating, maxRating = 5 }: RatingStarsProps) => {
  const roundedRating = Math.round(rating);
  
  return (
    <div className="flex items-center">
      <div className="flex">
        {Array.from({ length: maxRating }, (_, i) => (
          <StarIcon 
            key={i}
            className={`w-5 h-5 ${i < roundedRating ? 'text-black' : 'text-gray-300'}`}
          />
        ))}
      </div>
      <span className="text-sm text-gray-600 ml-2">({rating})</span>
    </div>
  );
};

export default RatingStars;
