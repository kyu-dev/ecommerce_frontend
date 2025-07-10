"use client";
import { useEffect, useRef, useState } from "react";

import { useUserStore } from "../store/userStore";
import { CartItem, useCartStore } from "@/store/cartStore";

export function useCartSync() {
  console.log("HOOK useCartSync APPELÉ !");
  const {
    cart,
    loadLocalCart,
    addToBackendCart,
    clearLocalCart,
    loadBackendCart,
  } = useCartStore();
  const { user } = useUserStore();

  const hasSynced = useRef(false);
  const [localCartLoaded, setLocalCartLoaded] = useState(false);

  // Charger le panier local une seule fois au montage
  useEffect(() => {
    loadLocalCart();
    setLocalCartLoaded(true);
  }, []);

  // Charger le panier backend si l'utilisateur est connecté (même si le panier local est vide)
  useEffect(() => {
    if (user?.id) {
      loadBackendCart(user.id);
    }
    // eslint-disable-next-line
  }, [user?.id]);

  useEffect(() => {
    console.log("DEBUG SYNC", {
      user,
      cart,
      hasSynced: hasSynced.current,
      localCartLoaded,
    });
    if (user?.id && cart.length > 0 && !hasSynced.current && localCartLoaded) {
      hasSynced.current = true;
      console.log("SYNC PANIER LOCAL VERS BACKEND", cart, user.id);
      Promise.all(
        cart.map((item) => {
          console.log("APPEL addToBackendCart", user.id, item);
          return addToBackendCart(user.id, item);
        })
      ).then(() => {
        clearLocalCart();
        loadBackendCart(user.id);
      });
    }
    // eslint-disable-next-line
  }, [user?.id, cart, localCartLoaded]);
}
