"use client";
import Filter from "@/components/Filter";
import ProductCarousel from "@/components/ProductCarousel";
import ProductGrid from "@/components/ProductGrid";

function page() {
  return (
    <div className="flex flex-col gap-16 pt-10">
      <section className="px-20">
        <h2 className="py-2 text-3xl">Top products</h2>
        <div className="py-4">
          <ProductCarousel />
        </div>
      </section>
      <section className="px-20  bg-white z-10">
        <h2 className="py-2 text-3xl">See All</h2>
        <div className="flex gap-4">
          <div className="h-screen sticky top-0 py-4">
            <Filter />
          </div>
          <ProductGrid />
        </div>
      </section>
    </div>
  );
}

export default page;
