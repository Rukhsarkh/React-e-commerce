import { StarIcon } from "lucide-react";

const StarIconRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStars = rating % 1 !== 0;
  const emptyStars = 5 - (fullStars + (hasHalfStars ? 1 : 0));
  return (
    <div className="flex items-center gap-1">
      {/* FullStars */}
      {[...Array(fullStars)].map((_, index) => (
        <StarIcon
          key={`empty-${index}`}
          size={18}
          className="fill-yellow-400 text-yellow-400"
        />
      ))}

      {/* HalfStars */}
      <div className="relative w-[18px] h-[18px]">
        {/* Full star (gray background) */}
        <StarIcon className="absolute text-gray-200 fill-gray-200" size={18} />

        {/* Half-filled star (clipped yellow) */}
        <StarIcon
          className=" text-yellow-400 fill-yellow-400"
          size={18}
          // style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0% 100%)" }}
          style={{
            maskImage: "linear-gradient(to right, yellow 50%, transparent 50%)",
            WebkitMaskImage:
              "linear-gradient(to right, yellow 50%, transparent 50%)",
          }}
        />
      </div>

      {/* EmptyStars */}
      {[...Array(emptyStars)].map((_, index) => (
        <StarIcon
          key={`empty-${index}`}
          size={18}
          className="fill-gray-200 text-gray-200"
        />
      ))}
    </div>
  );
};

export default StarIconRating;
