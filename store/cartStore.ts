import { create } from "zustand";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  description: string;
}

export interface CartItem {
  productId: number;
  quantity: number;
  product?: Product;
}

interface CartStore {
  cart: CartItem[];
  userId: string | null;
  isLoaded: boolean;
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
  isLoaded: false,

  loadLocalCart: () => {
    if (typeof window === "undefined") return;
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    set({ cart, isLoaded: true });
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
    if (!res.ok) {
      set({ isLoaded: true });
      return;
    }
    const data = await res.json();
    // Nouvelle logique pour parser la structure backend
    let cart: CartItem[] = [];
    if (data.data && Array.isArray(data.data.items)) {
      cart = data.data.items.map((item: any) => ({
        productId: item.productId,
        quantity: item.quantity,
        product: item.product, // On ajoute l'objet produit complet
      }));
    }
    set({ cart, userId, isLoaded: true });
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
