import { Search } from "lucide-react";

const SearchItems = () => {
  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="what are you looking for?"
        className="w-full pl-5 pr-16 py-2 border rounded-lg focus:outline-none text-sm"
      />
      <Search
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
        size={20}
      />
    </div>
  );
};

export default SearchItems;
