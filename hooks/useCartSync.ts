"use client";
import { useEffect, useRef } from "react";
import { useUserStore } from "../store/userStore";
import { useCartStore } from "@/store/cartStore";

export function useCartSync() {
  const { loadBackendCart, clearCart } = useCartStore();
  const { user } = useUserStore();
  const initDone = useRef(false);
  const currentUserId = useRef<string | null>(null);

  // Charger le panier backend quand l'utilisateur se connecte
  useEffect(() => {
    // Si l'utilisateur n'a pas changé, ne rien faire
    if (currentUserId.current === user?.id) {
      return;
    }

    if (user?.id && !initDone.current) {
      initDone.current = true;
      currentUserId.current = user.id;
      console.log("CHARGEMENT PANIER BACKEND POUR UTILISATEUR:", user.id);
      loadBackendCart(user.id);
    } else if (!user?.id && currentUserId.current) {
      // Vider le panier quand l'utilisateur se déconnecte
      initDone.current = false;
      currentUserId.current = null;
      console.log("DÉCONNEXION - VIDAGE DU PANIER");
      clearCart();
    }
  }, [user?.id, loadBackendCart, clearCart]);
}
