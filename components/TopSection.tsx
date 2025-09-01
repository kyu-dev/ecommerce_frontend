import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  description: string;
  rating: number;
}

const TopSection = async () => {
  //
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/top/12`);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Erreur API: ${res.status} - ${text}`);
  }
  let result;
  try {
    result = await res.json();
  } catch {
    throw new Error("Réponse JSON invalide pour les produits top");
  }
  const products = result.data;
  return (
    <div>
      <h3 className="p-6 text-5xl font-bold">Top Produit</h3>
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-6">
          {(products ?? []).map((product: Product, index: number) => (
            <Link key={index} href={`/product/${product.id}`}>
              <div>
                <ProductCard
                  productId={product.id}
                  title={product.name}
                  price={product.price}
                  img={product.img}
                  description={product.description}
                  rating={product.rating}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
  //
};

export default TopSection;
