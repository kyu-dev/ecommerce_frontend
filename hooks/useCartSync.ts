"use client";
import { useEffect, useRef, useState } from "react";
import { useUserStore } from "../store/userStore";
import { useCartStore } from "@/store/cartStore";

export function useCartSync() {
  console.log("HOOK useCartSync APPELÉ !");
  const { cart, loadLocalCart, loadBackendCart, syncLocalToBackend } =
    useCartStore();
  const { user } = useUserStore();

  const initDone = useRef(false);
  const [localCartLoaded, setLocalCartLoaded] = useState(false);

  // Charger le panier local une seule fois au montage
  useEffect(() => {
    if (!localCartLoaded) {
      console.log("CHARGEMENT PANIER LOCAL");
      loadLocalCart();
      setLocalCartLoaded(true);
    }
  }, [loadLocalCart, localCartLoaded]);

  // Initialisation une seule fois quand l'utilisateur est connecté et le panier local chargé
  useEffect(() => {
    if (user?.id && localCartLoaded && !initDone.current) {
      initDone.current = true;
      console.log("INITIALISATION PANIER POUR UTILISATEUR:", user.id);

      // 1. Sauvegarder le panier local actuel
      const localCartItems = [...cart];
      console.log("PANIER LOCAL SAUVEGARDÉ:", localCartItems);

      // 2. Charger le panier backend
      loadBackendCart(user.id).then(() => {
        console.log("PANIER BACKEND CHARGÉ");

        // 3. Si le panier local avait des items et qu'on veut les synchroniser
        if (localCartItems.length > 0) {
          console.log("SYNCHRONISATION DU PANIER LOCAL");
          // Remettre temporairement les items locaux pour la synchronisation
          useCartStore.setState({ cart: localCartItems });
          syncLocalToBackend(user.id).catch((error) => {
            console.error("ERREUR DE SYNCHRONISATION:", error);
          });
        }
      });
    } else if (!user?.id) {
      // Réinitialiser quand l'utilisateur se déconnecte
      initDone.current = false;
    }
  }, [user?.id, localCartLoaded]);
}
