import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  price: number;
  img: string;
  description: string;
  rating: number;
};

const TopSection = async () => {
  //
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/top/12`);
  const result = await res.json();
  console.log(result);
  const products: Product[] = result.data;
  return (
    <div>
      <h3 className="p-6 text-5xl font-bold">Top Produit</h3>
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-6">
          {(products ?? []).map((product: Product, index: number) => (
            <Link key={index} href={`/product/${product.id}`}>
              <div>
                <ProductCard
                  productId={Number(product.id)}
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
