import { useEffect, useState } from "react";
import axios from "axios";
import { ProductCard, Services, ProductModal } from "../components/index";
import { ChevronDown } from "lucide-react";

const Explore = ({ setCartCount }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async (category = "") => {
    try {
      const url = category
        ? `https://fakestoreapi.com/products/category/${category}`
        : "https://fakestoreapi.com/products";
      const response = await axios.get(url);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchSingleProduct = async (productId) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      setSelectedProduct(response.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    fetchProducts(category !== "All" ? category : "");
    setIsDropdownOpen(false);
    setIsSearchDropdownOpen(false);
  };

  return (
    <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
      <div className="my-8 sm:my-12 md:my-16 lg:m-20 flex flex-col gap-6 sm:gap-8 lg:gap-10">
        <div className="text-orange-500 font-bold text-lg sm:text-xl flex items-center gap-2 sm:gap-4 mx-2 sm:ml-8">
          <div className="h-8 sm:h-9 w-4 sm:w-5 bg-orange-500 rounded-sm"></div>
          <p className="lg:text-2xl">Our Products</p>
        </div>
        <div className="text-2xl sm:text-3xl lg:text-4xl font-medium mx-2 sm:ml-8 pb-4 sm:pb-6 lg:pb-10">
          Explore our Products
        </div>

        <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4 mx-2 sm:ml-8 mb-6">
          <input
            type="text"
            placeholder="Search category..."
            className="p-2 border border-gray-300 rounded-md w-full sm:w-auto mb-2 sm:mb-0"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setIsSearchDropdownOpen(true);
            }}
          />
          {isSearchDropdownOpen && searchTerm && (
            <div className="absolute top-10 sm:top-full left-0 mt-2 bg-white border border-gray-300 shadow-md rounded-md w-full sm:w-40 z-10 p-2">
              <ul>
                {categories.filter((category) =>
                  category.toLowerCase().includes(searchTerm.toLowerCase())
                ).length > 0 ? (
                  categories
                    .filter((category) =>
                      category.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((category) => (
                      <li
                        key={category}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleCategorySelect(category)}
                      >
                        {category}
                      </li>
                    ))
                ) : (
                  <li className="px-4 py-2 text-gray-500">
                    No categories found
                  </li>
                )}
              </ul>
            </div>
          )}

          <button
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-100 w-full sm:w-auto justify-between sm:justify-start"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="truncate max-w-xs">{selectedCategory}</span>
            <ChevronDown size={20} />
          </button>
          {isDropdownOpen && (
            <div className="absolute top-24 sm:top-full left-0 sm:left-40 mt-2 bg-white border border-gray-300 shadow-md rounded-md w-full sm:w-40 z-10 p-2">
              <ul>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleCategorySelect("All")}
                >
                  All
                </li>
                {categories.map((category) => (
                  <li
                    key={category}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleCategorySelect(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <ProductCard product={products} onProductClick={fetchSingleProduct} />
        <hr className="mt-4 sm:mt-6 lg:mt-8" />
        <Services />
      </div>
      {isModalOpen && selectedProduct && (
        <ProductModal
          product={selectedProduct}
          closeModal={() => setIsModalOpen(false)}
          setCartCount={setCartCount}
        />
      )}
    </section>
  );
};

export default Explore;
