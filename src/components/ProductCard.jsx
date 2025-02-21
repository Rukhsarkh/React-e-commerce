import { StarIconRating } from "./index";

const ProductCard = ({ product, onProductClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 items-start">
      {product.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-between h-auto min-h-[380px] sm:h-[400px] mb-6 sm:mb-10 mx-auto w-full max-w-xs"
          onClick={() => onProductClick(item.id)}
        >
          <div className="w-full h-52 sm:h-56 md:h-60 lg:h-64 relative bg-gray-100 flex justify-center items-center rounded-sm">
            <img
              src={item.image}
              className="p-3 w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-52 lg:h-52 object-contain mix-blend-multiply"
              alt={item.title}
              aria-label={item.title}
            />
          </div>
          <div className="w-full flex flex-col items-center text-center mt-4">
            <p className="min-h-16 sm:min-h-20 font-medium px-2 text-sm sm:text-base">
              {item.title.length > 40
                ? item.title.slice(0, 40) + "..."
                : item.title}
            </p>
            <div className="flex gap-2 justify-center font-medium mt-2 items-center flex-wrap">
              <p className="text-orange-500">${item.price}</p>
              <StarIconRating rating={item.rating.rate} />
              <p className="text-gray-400 text-sm">({item.rating.count})</p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onProductClick(item.id);
              }}
              className="bg-black text-white p-2 w-full sm:w-56 md:w-60 lg:w-64 mt-4 hover:cursor-pointer hover:bg-black/30 hover:text-black active:translate-y-1 
              transition-all duration-300 ease-in-out"
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
