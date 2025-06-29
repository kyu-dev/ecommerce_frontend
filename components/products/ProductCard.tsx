import React from "react";

function ProductCard() {
  return (
    <div className="border rounded-sm">
      <img
        src="/one.webp"
        alt="photo du produit"
        className="w-[300px] h-[200px] object-cover"
      />
      <div className="p-9 gap-20 flex flex-col">
        <h3>ASICS Gel-Kayano 14 White Midnight</h3>
        <div className="flex w-full justify-between">
          <div className="border bg-pink-400 w-fit p-3">
            <p>99€</p>
          </div>
          <button className="border p-3">Add to cart </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
