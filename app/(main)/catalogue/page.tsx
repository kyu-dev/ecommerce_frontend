import React from "react";
import ProductCard from "@/components/ProductCard";
import FilterSidebar from "@/components/FilterSidebar";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  description: string;
  rating: number;
  category?: { name: string };
  alcoholDegree?: number;
  volumeId: number;
}

interface Filters {
  category: string;
  minPrice: string;
  maxPrice: string;
  minAlcohol: string;
  maxAlcohol: string;
  volume: string;
  sort: string;
}

const getFilters = (searchParams: Record<string, string> = {}): Filters => {
  return {
    category: searchParams.category || "",
    minPrice: searchParams.minPrice || "",
    maxPrice: searchParams.maxPrice || "",
    minAlcohol: searchParams.minAlcohol || "",
    maxAlcohol: searchParams.maxAlcohol || "",
    volume: searchParams.volume || "",
    sort: searchParams.sort || "",
  };
};

const applyFiltersAndSort = (
  products: Product[],
  filters: Filters
): Product[] => {
  let filtered = [...products];
  if (filters.category) {
    filtered = filtered.filter((p) => p.category?.name === filters.category);
  }
  if (filters.minPrice) {
    filtered = filtered.filter((p) => p.price >= Number(filters.minPrice));
  }
  if (filters.maxPrice) {
    filtered = filtered.filter((p) => p.price <= Number(filters.maxPrice));
  }
  if (filters.minAlcohol) {
    filtered = filtered.filter(
      (p) =>
        p.alcoholDegree !== undefined &&
        p.alcoholDegree !== null &&
        p.alcoholDegree >= Number(filters.minAlcohol)
    );
  }
  if (filters.maxAlcohol) {
    filtered = filtered.filter(
      (p) =>
        p.alcoholDegree !== undefined &&
        p.alcoholDegree !== null &&
        p.alcoholDegree <= Number(filters.maxAlcohol)
    );
  }
  if (filters.volume) {
    filtered = filtered.filter(
      (p) => String(p.volumeId) === String(filters.volume)
    );
  }
  if (filters.sort === "price_asc") {
    filtered = filtered.sort((a, b) => a.price - b.price);
  }
  if (filters.sort === "price_desc") {
    filtered = filtered.sort((a, b) => b.price - a.price);
  }
  if (filters.sort === "name_asc") {
    filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (filters.sort === "name_desc") {
    filtered = filtered.sort((a, b) => b.name.localeCompare(a.name));
  }
  return filtered;
};

interface CataloguePageProps {
  searchParams?: Promise<Record<string, string>>;
}

const CataloguePage = async ({ searchParams }: CataloguePageProps) => {
  // On attend les searchParams car ils sont maintenant asynchrones dans Next.js 15
  const resolvedSearchParams = await searchParams;

  // On récupère tous les produits (sans filtre côté backend)
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/get`, {
    next: { revalidate: 1800 }, // 30 minutes
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Erreur API: ${res.status} - ${text}`);
  }
  const result = await res.json();
  const products = result.data;

  const filters = getFilters(resolvedSearchParams);
  const filteredProducts = applyFiltersAndSort(products, filters);

  return (
    <div className="flex flex-col lg:flex-row gap-4 md:gap-8 p-4 md:p-8 min-h-screen">
      <aside className="w-full lg:w-64 lg:shrink-0">
        <FilterSidebar />
      </aside>
      <main className="flex-1">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
          Catalogue
          {filters.category
            ? ` — ${
                filters.category.charAt(0).toUpperCase() +
                filters.category.slice(1)
              }`
            : ""}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6">
          {(filteredProducts ?? []).map((product: Product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <ProductCard
                productId={product.id}
                title={product.name}
                price={product.price}
                img={product.img}
                description={product.description}
                rating={product.rating}
              />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CataloguePage;
