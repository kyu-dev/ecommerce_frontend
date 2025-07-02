"use client";
import Filter from "@/components/Filter";
import ProductCarousel from "@/components/ProductCarousel";

function page() {
  return (
    <div>
      <section className="px-20">
        <h2 className="py-6 text-3xl">Top products</h2>
        <ProductCarousel />
      </section>
      <section className="px-20">
        <h2 className="py-6 text-3xl">See All</h2>
        <div className="flex">
          <Filter />
        </div>
      </section>
    </div>
  );
}

export default page;
