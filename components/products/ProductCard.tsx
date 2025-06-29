import React from "react";

function ProductCard() {
  return (
    <div className="border rounded-sm">
      <img
        src="/one.webp"
        alt="photo du produit"
        className="w-[300px] h-[200px] object-cover"
      />
      <div className="gap-10 flex flex-col">
        <h3 className="py-4 text-center">ASICS Gel-Kayano 14 White Midnight</h3>
        <div className="flex w-full justify-between border-t p-3">
          <div className="border bg-pink-400 w-fit p-3">
            <p>99€</p>
          </div>
          <button className="border border-black p-3 bg-white hover:bg-black hover:text-white transition-all duration-200 ease-in-out shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-0.5 active:translate-y-0.5">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
