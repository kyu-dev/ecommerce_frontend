import React from "react";
import ProductCard from "@/components/ProductCard";
import FilterSidebar from "@/components/FilterSidebar";
import Link from "next/link";

type PageProps = {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

type Product = {
  id: string;
  name: string;
  price: number;
  img: string;
  description: string;
  rating: number;
  category?: { name: string };
  alcoholDegree?: number | null;
  volumeId?: string | number;
};

type Filters = {
  category: string;
  minPrice: string;
  maxPrice: string;
  minAlcohol: string;
  maxAlcohol: string;
  volume: string;
  sort: string;
};

const getFilters = (searchParams?: { [key: string]: string | string[] | undefined }) => {
  const getFirstValue = (value: string | string[] | undefined): string => {
    if (Array.isArray(value)) {
      return value[0] || "";
    }
    return value || "";
  };

  return {
    category: getFirstValue(searchParams?.category),
    minPrice: getFirstValue(searchParams?.minPrice),
    maxPrice: getFirstValue(searchParams?.maxPrice),
    minAlcohol: getFirstValue(searchParams?.minAlcohol),
    maxAlcohol: getFirstValue(searchParams?.maxAlcohol),
    volume: getFirstValue(searchParams?.volume),
    sort: getFirstValue(searchParams?.sort),
  };
};

const applyFiltersAndSort = (products: Product[], filters: Filters) => {
  let filtered = [...products];
  if (filters.category) {
    filtered = filtered.filter(
      (p: Product) => p.category?.name === filters.category
    );
  }
  if (filters.minPrice) {
    filtered = filtered.filter(
      (p: Product) => p.price >= Number(filters.minPrice)
    );
  }
  if (filters.maxPrice) {
    filtered = filtered.filter(
      (p: Product) => p.price <= Number(filters.maxPrice)
    );
  }
  if (filters.minAlcohol) {
    filtered = filtered.filter(
      (p: Product) =>
        typeof p.alcoholDegree === "number" &&
        p.alcoholDegree >= Number(filters.minAlcohol)
    );
  }
  if (filters.maxAlcohol) {
    filtered = filtered.filter(
      (p: Product) =>
        typeof p.alcoholDegree === "number" &&
        p.alcoholDegree <= Number(filters.maxAlcohol)
    );
  }
  if (filters.volume) {
    filtered = filtered.filter(
      (p: Product) => String(p.volumeId) === String(filters.volume)
    );
  }
  if (filters.sort === "price_asc") {
    filtered = filtered.sort((a: Product, b: Product) => a.price - b.price);
  }
  if (filters.sort === "price_desc") {
    filtered = filtered.sort((a: Product, b: Product) => b.price - a.price);
  }
  if (filters.sort === "name_asc") {
    filtered = filtered.sort((a: Product, b: Product) =>
      a.name.localeCompare(b.name)
    );
  }
  if (filters.sort === "name_desc") {
    filtered = filtered.sort((a: Product, b: Product) =>
      b.name.localeCompare(a.name)
    );
  }
  return filtered;
};

const CataloguePage = async ({ searchParams }: PageProps) => {
  // On récupère tous les produits (sans filtre côté backend)
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/get`);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Erreur API: ${res.status} - ${text}`);
  }
  const result = await res.json();
  const products = result.data;

  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const filters = getFilters(resolvedSearchParams);
  const filteredProducts = applyFiltersAndSort(products, filters);

  return (
    <div className="flex gap-8 p-8 min-h-screen ">
      <aside className="w-64 shrink-0">
        <FilterSidebar />
      </aside>
      <main className="flex-1">
        <h1 className="text-3xl font-bold mb-6">
          Catalogue
          {filters.category
            ? ` — ${
                filters.category.charAt(0).toUpperCase() +
                filters.category.slice(1)
              }`
            : ""}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {(filteredProducts ?? []).map((product: Product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <ProductCard
                productId={Number(product.id)}
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
