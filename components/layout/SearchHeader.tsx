import React from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import Link from "../ui/Link";

function SearchHeader() {
  return (
    <div className="border-b-2 border-black bg-indigo-300">
      <div className="flex justify-between p-4 gap-10">
        <h1 className="text-4xl font-bold">GUMROAD</h1>
        <form action="" className="flex w-full">
          <Button type="submit">
            <Search /> Search
          </Button>
          <Input type="search" placeholder="Rechercher..." />
        </form>
        <div className="flex gap-2">
          <Button>Register</Button>
          <Button variant={"outline"}>Login</Button>
        </div>
      </div>
      <div className="flex p-4 gap-6">
        <Button variant="secondary">All</Button>
        <Link />
        <Link />
        <Link />
        <Link />
        <Link />
        <Link />
      </div>
    </div>
  );
}

export default SearchHeader;
