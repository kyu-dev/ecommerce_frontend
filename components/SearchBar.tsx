import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Cross, Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex justify-center gap-2">
      <form action="" className="flex ">
        <Input type="search" className="w-xl" />
        <Button>
          <Search />
        </Button>
      </form>
      <Button variant="ghost">
        <Cross />
      </Button>
    </div>
  );
};

export default SearchBar;
