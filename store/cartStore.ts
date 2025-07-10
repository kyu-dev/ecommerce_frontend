import { create } from "zustand";

export interface CartItem {
  productId: number;
  quantity: number;
}

interface CartStore {
  cart: CartItem[];
  userId: string | null;
  // Invité
  loadLocalCart: () => void;
  saveLocalCart: () => void;
  addToLocalCart: (item: CartItem) => void;
  removeFromLocalCart: (productId: number) => void;
  clearLocalCart: () => void;
  // Connecté
  loadBackendCart: (userId: string) => Promise<void>;
  addToBackendCart: (userId: string, item: CartItem) => Promise<void>;
  removeFromBackendCart: (userId: string, productId: number) => Promise<void>;
  clearBackendCart: (userId: string) => Promise<void>;
  setUserId: (userId: string | null) => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  userId: null,

  // Chargement du panier invité (localStorage)
  loadLocalCart: () => {
    if (typeof window === "undefined") return;
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    set({ cart });
  },

  // Sauvegarde du panier invité
  saveLocalCart: () => {
    if (typeof window === "undefined") return;
    localStorage.setItem("cart", JSON.stringify(get().cart));
  },

  // Ajout d’un produit (invité)
  addToLocalCart: (item) => {
    const cart = [...get().cart];
    const idx = cart.findIndex((i) => i.productId === item.productId);
    if (idx > -1) cart[idx].quantity += item.quantity;
    else cart.push(item);
    set({ cart });
    get().saveLocalCart();
  },

  // Suppression d’un produit (invité)
  removeFromLocalCart: (productId) => {
    const cart = get().cart.filter((i) => i.productId !== productId);
    set({ cart });
    get().saveLocalCart();
  },

  // Vider le panier (invité)
  clearLocalCart: () => {
    set({ cart: [] });
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
  },

  // Chargement du panier backend (connecté)
  loadBackendCart: async (userId) => {
    const res = await fetch(`/cart/${userId}`);
    if (!res.ok) return;
    const cart = await res.json();
    set({ cart, userId });
  },

  // Ajout d’un produit (connecté)
  addToBackendCart: async (userId, item) => {
    await fetch(`/cart/${userId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    await get().loadBackendCart(userId);
  },

  // Suppression d’un produit (connecté)
  removeFromBackendCart: async (userId, productId) => {
    await fetch(`/cart/${userId}/item/${productId}`, { method: "DELETE" });
    await get().loadBackendCart(userId);
  },

  // Vider le panier backend
  clearBackendCart: async (userId) => {
    await fetch(`/cart/${userId}/clearCart`, { method: "DELETE" });
    await get().loadBackendCart(userId);
  },

  setUserId: (userId) => set({ userId }),
}));
