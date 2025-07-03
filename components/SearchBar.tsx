import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <form action="" className="flex">
      <Input type="search" />
      <Button>
        <Search />
      </Button>
    </form>
  );
};

export default SearchBar;
