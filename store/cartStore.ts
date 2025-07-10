import { create } from "zustand";

const API_URL = "http://localhost:3000";

export interface CartItem {
  productId: number;
  quantity: number;
}

interface CartStore {
  cart: CartItem[];
  userId: string | null;
  loadLocalCart: () => void;
  saveLocalCart: () => void;
  addToLocalCart: (item: CartItem) => void;
  removeFromLocalCart: (productId: number) => void;
  clearLocalCart: () => void;
  loadBackendCart: (userId: string) => Promise<void>;
  addToBackendCart: (userId: string, item: CartItem) => Promise<void>;
  removeFromBackendCart: (userId: string, productId: number) => Promise<void>;
  clearBackendCart: (userId: string) => Promise<void>;
  setUserId: (userId: string | null) => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  userId: null,

  loadLocalCart: () => {
    if (typeof window === "undefined") return;
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    set({ cart });
  },

  saveLocalCart: () => {
    if (typeof window === "undefined") return;
    localStorage.setItem("cart", JSON.stringify(get().cart));
  },

  addToLocalCart: (item) => {
    const cart = [...get().cart];
    const idx = cart.findIndex((i) => i.productId === item.productId);
    if (idx > -1) cart[idx].quantity += item.quantity;
    else cart.push(item);
    set({ cart });
    get().saveLocalCart();
  },

  removeFromLocalCart: (productId) => {
    const cart = get().cart.filter((i) => i.productId !== productId);
    set({ cart });
    get().saveLocalCart();
  },

  clearLocalCart: () => {
    set({ cart: [] });
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
  },

  loadBackendCart: async (userId) => {
    const res = await fetch(`${API_URL}/cart/${userId}`, {
      credentials: "include",
    });
    if (!res.ok) return;
    const data = await res.json();
    // Si data.data est un objet unique, on le met dans un tableau
    const cart = Array.isArray(data.data)
      ? data.data
      : data.data
      ? [data.data]
      : [];
    set({ cart, userId });
  },

  addToBackendCart: async (userId, item) => {
    await fetch(`${API_URL}/cart/${userId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
      credentials: "include",
    });
    await get().loadBackendCart(userId);
  },

  removeFromBackendCart: async (userId, productId) => {
    await fetch(`${API_URL}/cart/${userId}/item/${productId}`, {
      method: "DELETE",
      credentials: "include",
    });
    await get().loadBackendCart(userId);
  },

  clearBackendCart: async (userId) => {
    await fetch(`${API_URL}/cart/${userId}/clearCart`, {
      method: "DELETE",
      credentials: "include",
    });
    await get().loadBackendCart(userId);
  },

  setUserId: (userId) => set({ userId }),
}));
