import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div>
      <form className="bg-white/10 p-2 backdrop-blur-xl w-fit border rounded-4xl flex gap-4 border-white/30">
        <input
          type="text"
          className="text-white w-60 px-4 bg-transparent border-none focus:outline-none focus:ring-0"
          placeholder="Rechercher..."
        />
        <button
          type="submit"
          className="bg-orange-400 rounded-full p-2.5 hover:bg-orange-500 transition-colors"
        >
          <Search className="h-5 text-white" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
