import { useState } from "react";
import { StarIconRating } from "./index";

const ProductModal = ({ product, closeModal, setCartCount }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
    setCartCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      setCartCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4 py-6 overflow-y-auto pt-20">
      <div className="bg-white p-4 sm:p-6 rounded-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl relative flex flex-col md:flex-row gap-4 md:gap-6 mx-auto max-md:mt-28">
        <button
          className="absolute top-2 right-4 text-sm hover:scale-95 z-10"
          onClick={closeModal}
        >
          ✖
        </button>
        <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-100 rounded-md p-2 md:p-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain mix-blend-multiply"
          />
        </div>

        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <h2 className="text-lg sm:text-xl font-bold">
            {product.title.length > 50
              ? product.title.slice(0, 50) + "..."
              : product.title}
          </h2>
          <div className="flex items-center mt-2">
            <StarIconRating rating={product.rating.rate} />
            <span className="text-gray-400 text-sm ml-2">
              ({product.rating.count})
            </span>
            <span className="text-sm ml-2 border-l-4 border-gray-400">
              <p className="text-green-400 pl-2 text-sm">in stock</p>
            </span>
          </div>
          <p className="text-lg sm:text-xl font-medium mt-2">
            ${product.price}
          </p>
          <p className="text-gray-500 text-xs sm:text-sm mt-2 line-clamp-4 md:line-clamp-6">
            {product.description.length > 100
              ? product.description.slice(0, 100) + " ... See more ..."
              : product.description}
          </p>

          <div className="w-full h-0.5 bg-gray-300 my-3 sm:my-4"></div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <div className="flex items-center rounded lg:border lg:border-gray-300 w-full sm:w-auto">
              <button
                onClick={handleDecrement}
                className="px-3 py-1 bg-gray-300 rounded-l"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={handleIncrement}
                className="px-3 py-1 bg-yellow-400 rounded-r"
              >
                +
              </button>
            </div>

            <button className="bg-black text-white px-6 py-1 rounded w-full sm:w-auto mt-2 sm:mt-0">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
