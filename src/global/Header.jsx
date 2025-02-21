import { ChevronDown, ShoppingCart, UserCircle, Menu } from "lucide-react";
import { useState } from "react";
import { SearchItems } from "../components/index";

const Header = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-amber-300 fixed top-0 right-0 left-0 z-10">
      <div className="max-container flex justify-between items-center h-[60px] px-4 md:px-10">
        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={30} />
          </button>
          <p className="font-medium text-lg">Harmoni</p>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 lg:gap-10 font-normal">
          <div className="cursor-pointer hover:text-gray-700">Home Page</div>
          <div className="cursor-pointer hover:text-gray-700">Categories</div>
          <div className="cursor-pointer hover:text-gray-700">Contact Us</div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700">
            <p>More Options</p>
            <ChevronDown size={20} className="relative top-[1.5px]" />
          </div>
        </nav>

        {/* Medium & Large Screens Search bar */}
        <div className="hidden md:block">
          <SearchItems />
        </div>

        <div className="flex items-center gap-5">
          <div className="relative">
            <ShoppingCart size={30} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {cartCount}
              </span>
            )}
          </div>
          <UserCircle size={30} />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-amber-300 p-5 flex flex-col items-center gap-4 md:hidden z-10">
          <div className="cursor-pointer hover:text-gray-700">Home Page</div>
          <div className="cursor-pointer hover:text-gray-700">Categories</div>
          <div className="cursor-pointer hover:text-gray-700">Contact Us</div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700">
            <p>More Options</p>
            <ChevronDown size={20} className="relative top-[1.5px]" />
          </div>
        </div>
      )}

      {/* Mobile Search Bar */}
      <div className="block md:hidden px-4 py-2">
        <SearchItems />
      </div>
    </header>
  );
};

export default Header;
