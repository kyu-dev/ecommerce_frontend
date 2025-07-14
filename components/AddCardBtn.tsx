"use client";
import { useCartStore } from "@/store/cartStore";
import { useUserStore } from "@/store/userStore";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface AddCardBtnProps {
  productId: number;
  stock: number;
}

export default function AddCardBtn({ productId, stock }: AddCardBtnProps) {
  const { user } = useUserStore();
  const { addToBackendCart } = useCartStore();
  const [qty, setQty] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleAddToCart = async (e: React.FormEvent) => {
    e.preventDefault();

    // Si pas connecté, rediriger vers la page de connexion
    if (!user?.id) {
      router.push("/auth/login");
      return;
    }

    setIsLoading(true);
    try {
      await addToBackendCart(user.id, { productId, quantity: qty });
    } catch (error) {
      console.error("Erreur lors de l'ajout au panier:", error);
    } finally {
      setIsLoading(false);
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
      <Button
        type="submit"
        className="px-6 py-2 text-base font-semibold bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-60 transition-all duration-200"
        disabled={stock === 0 || isLoading}
      >
        {!user?.id
          ? "Se connecter pour ajouter"
          : isLoading
          ? "Ajout..."
          : "Ajouter au panier"}
      </Button>
    </form>
  );
}
