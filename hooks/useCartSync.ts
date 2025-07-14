"use client";
import { useEffect, useRef } from "react";
import { useUserStore } from "../store/userStore";
import { useCartStore } from "@/store/cartStore";

export function useCartSync() {
  const { loadBackendCart, clearCart } = useCartStore();
  const { user } = useUserStore();
  const initDone = useRef(false);

  // Charger le panier backend quand l'utilisateur se connecte
  useEffect(() => {
    if (user?.id && !initDone.current) {
      initDone.current = true;
      console.log("CHARGEMENT PANIER BACKEND POUR UTILISATEUR:", user.id);
      loadBackendCart(user.id);
    } else if (!user?.id) {
      // Vider le panier quand l'utilisateur se déconnecte
      initDone.current = false;
      clearCart();
    }
  }, [user?.id, loadBackendCart, clearCart]);
}
