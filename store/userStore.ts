// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { create } from "zustand";

export interface User {
  id: string;
  // Ajoute d'autres propriétés utilisateur si besoin
}

interface UserState {
  user: User | null;
  isLoggedIn: boolean;
  setUser: (user: User | null) => void;
  setIsLoggedIn: (logged: boolean) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoggedIn: false,
  setUser: (user) => set({ user }),
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
}));
