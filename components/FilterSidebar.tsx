// eslint-disable-next-line @typescript-eslint/no-unused-vars
"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const categories = ["Blonde", "Brune", "Ambrée", "IPA", "Sans alcool"];
const sortOptions = [
  { value: "price_asc", label: "Prix croissant" },
  { value: "price_desc", label: "Prix décroissant" },
  { value: "name_asc", label: "Nom A-Z" },
  { value: "name_desc", label: "Nom Z-A" },
];
const volumes = [25, 33, 50, 75, 100];

const volumeMap = {
  1: 33,
  2: 25,
  3: 50,
  4: 75,
  5: 100,
};

const FilterSidebar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [category, setCategory] = React.useState("");
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");
  const [sort, setSort] = useState(searchParams.get("sort") || "");
  const [volume, setVolume] = useState(searchParams.get("volume") || "");

  // Synchronise la valeur du filtre catégorie avec l'URL à chaque changement de searchParams
  React.useEffect(() => {
    setCategory(searchParams.get("category") || "");
  }, [searchParams]);

  const handleFilter = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);
    if (sort) params.set("sort", sort);
    if (volume) params.set("volume", volume);
    router.push(`/catalogue?${params.toString()}`);
  };

  return (
    <Card className="w-full ">
      <CardHeader>
        <h2 className="text-lg font-bold">Filtres & Tri</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleFilter} className="flex flex-col gap-6">
          <div>
            <Label htmlFor="category">Catégorie</Label>
            <select
              id="category"
              className="w-full border rounded px-2 py-1 mt-1"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Toutes</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-2">
            <div className="flex-1">
              <Label htmlFor="minPrice">Prix min</Label>
              <Input
                id="minPrice"
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                min={0}
                placeholder="0"
                className="mt-1"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="maxPrice">Prix max</Label>
              <Input
                id="maxPrice"
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                min={0}
                placeholder=""
                className="mt-1"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="sort">Trier par</Label>
            <select
              id="sort"
              className="w-full border rounded px-2 py-1 mt-1"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="">Par défaut</option>
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor="volume">Volume</Label>
            <select
              id="volume"
              className="w-full border rounded px-2 py-1 mt-1"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
            >
              <option value="">Tous</option>
              {Object.entries(volumeMap).map(([id, cl]) => (
                <option key={id} value={id}>
                  {cl} cL
                </option>
              ))}
            </select>
          </div>
          <Button type="submit" className="w-full mt-2">
            Filtrer
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default FilterSidebar;
