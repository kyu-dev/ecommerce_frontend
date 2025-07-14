"use client";
import { useCartStore } from "@/store/cartStore";
import { useUserStore } from "@/store/userStore";
import { useState } from "react";

interface ProductClientProps {
  productId: number;
  stock: number;
}

export default function ProductClient({
  productId,
  stock,
}: ProductClientProps) {
  const { user } = useUserStore();
  const { addToBackendCart, addToLocalCart } = useCartStore();
  const [qty, setQty] = useState(1);

  const handleAddToCart = (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      addToBackendCart(user.id, { productId, quantity: qty });
    } else {
      addToLocalCart({ productId, quantity: qty });
    }
  };

  return (
    <form className="flex items-center gap-3 mt-2" onSubmit={handleAddToCart}>
      <input
        type="number"
        min={1}
        max={stock}
        value={qty}
        onChange={(e) => setQty(Number(e.target.value))}
        className="w-20 border rounded px-2 py-1 text-center text-base focus:outline-primary"
        aria-label="Quantité"
      />
      <button
        type="submit"
        className="px-6 py-2 text-base font-semibold bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-60 transition-all duration-200"
        disabled={stock === 0}
      >
        Ajouter au panier
      </button>
    </form>
  );
}
