// eslint-disable-next-line @typescript-eslint/no-unused-vars
"use client";
import { useEffect, useRef, useState } from "react";
import { useUserStore } from "../store/userStore";
import { useCartStore } from "@/store/cartStore";

export function useCartSync() {
  console.log("HOOK useCartSync APPELÉ !");
  const { cart, loadLocalCart, loadBackendCart, syncLocalToBackend } =
    useCartStore();
  const { user } = useUserStore();

  const hasSynced = useRef(false);
  const [localCartLoaded, setLocalCartLoaded] = useState(false);

  // Charger le panier local une seule fois au montage
  useEffect(() => {
    if (!localCartLoaded) {
      loadLocalCart();
      setLocalCartLoaded(true);
    }
  }, [loadLocalCart, localCartLoaded]);

  // Gérer la connexion/déconnexion de l'utilisateur
  useEffect(() => {
    console.log("DEBUG SYNC", {
      user,
      cart,
      hasSynced: hasSynced.current,
      localCartLoaded,
    });

    if (user?.id && localCartLoaded && !hasSynced.current) {
      hasSynced.current = true;
      console.log("SYNC PANIER LOCAL VERS BACKEND", cart, user.id);

      // Utiliser la nouvelle fonction de synchronisation intelligente
      syncLocalToBackend(user.id)
        .then(() => {
          console.log("SYNCHRONISATION TERMINÉE");
        })
        .catch((error) => {
          console.error("ERREUR DE SYNCHRONISATION:", error);
          hasSynced.current = false; // Permettre une nouvelle tentative
        });
    } else if (user?.id && hasSynced.current) {
      // Si l'utilisateur est déjà connecté et que la sync a eu lieu,
      // on charge juste le panier backend
      loadBackendCart(user.id);
    } else if (!user?.id) {
      // Si l'utilisateur se déconnecte, on remet le flag à false
      hasSynced.current = false;
    }
  }, [
    user?.id,
    localCartLoaded,
    cart.length,
    syncLocalToBackend,
    loadBackendCart,
  ]);
}
