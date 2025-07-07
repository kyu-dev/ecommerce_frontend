import { create } from "zustand";

interface AuthState {
  token: string | null;
  setToken: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  setToken: (token) => {
    set({ token });
    localStorage.setItem("token", token);
  },
  logout: () => {
    set({ token: null });
    localStorage.removeItem("token");
  },
}));
