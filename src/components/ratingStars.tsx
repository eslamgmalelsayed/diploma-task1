import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
}

const RatingStars = ({ rating, maxRating = 5 }: RatingStarsProps) => {
  const roundedRating = Math.round(rating * 2) / 2;

  return (
    <div className="flex items-center gap-1">
      {[...Array(maxRating)].map((_, index) => {
        if (roundedRating >= index + 0.5) {
          return <StarSolid key={index} className="h-5 w-5 text-black" />;
        } else {
          return <StarOutline key={index} className="h-5 w-5 text-gray-300" />;
        }
      })}
      <span className="text-sm text-gray-600 ml-1">({rating})</span>
    </div>
  );
};

export default RatingStars;
