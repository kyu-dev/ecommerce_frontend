// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

const NewSection = async () => {
  //
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/new/12`);
  const result = await res.json();
  console.log(result);
  const products = result.data;
  return (
    <div>
      <h3 className="p-6 text-5xl font-bold">New product</h3>
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-6">
          {(products ?? []).map((product: any, index: number) => (
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

export default NewSection;
