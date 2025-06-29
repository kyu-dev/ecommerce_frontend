import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <form className="border border-black w-full flex mx-30 px-4 py-3 gap-2 rounded-sm">
      <button type="submit">
        <Search className="text-neutral-500 w-4 h-4" />
      </button>
      <input
        type="text"
        placeholder="recherchez"
        className="outline-none font-normal w-full"
      />
    </form>
  );
};

export default SearchBar;
