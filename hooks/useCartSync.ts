import { useEffect } from "react";

import { useUserStore } from "../store/userStore";
import { CartItem, useCartStore } from "@/store/cartStore";

export function useCartSync() {
  const {
    cart,
    userId,
    loadLocalCart,
    addToBackendCart,
    clearLocalCart,
    loadBackendCart,
    setUserId,
  } = useCartStore();

  const { user, isLoggedIn } = useUserStore();

  useEffect(() => {
    if (isLoggedIn && user?.id) {
      setUserId(user.id);
      loadLocalCart();
      Promise.all(
        cart.map((item: CartItem) => addToBackendCart(user.id, item))
      ).then(() => {
        clearLocalCart();
        loadBackendCart(user.id);
      });
    } else if (!isLoggedIn) {
      setUserId(null);
      loadLocalCart();
    }
    // eslint-disable-next-line
  }, [isLoggedIn, user?.id]);
}
