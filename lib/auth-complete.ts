/**
 * 🔐 SYSTÈME D'AUTHENTIFICATION COMPLET
 * Tout-en-un : service + hook + utilities + constantes
 */

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/userStore";

// ==================== CONSTANTES ====================
export const AUTH_CONFIG = {
  API_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  ENDPOINTS: {
    LOGIN: "/authentication/login",
    REGISTER: "/authentication/register",
    GOOGLE: "/authentication/google",
    ME: "/authentication/me",
    LOGOUT: "/authentication/logout",
  },
  ROUTES: {
    HOME: "/",
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
  },
  STORAGE_KEY: "authToken",
} as const;

// ==================== TYPES ====================
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message?: string;
  user?: { id: string };
}

// ==================== UTILITIES ====================
export const authUtils = {
  setToken: (token: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(AUTH_CONFIG.STORAGE_KEY, token);
    }
  },
  getToken: () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(AUTH_CONFIG.STORAGE_KEY);
    }
    return null;
  },
  removeToken: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(AUTH_CONFIG.STORAGE_KEY);
    }
  },
  isAuthenticated: () => {
    if (typeof window !== "undefined") {
      return !!localStorage.getItem(AUTH_CONFIG.STORAGE_KEY);
    }
    return false;
  },

  getAuthHeaders: () => {
    const token = authUtils.getToken();
    return {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    };
  },

  authenticatedFetch: async (
    url: string,
    options: RequestInit = {}
  ): Promise<Response> => {
    const headers = {
      ...authUtils.getAuthHeaders(),
      ...options.headers,
    };

    const response = await fetch(url, {
      ...options,
      headers,
    });

    // Si le token est expiré ou invalide, on le supprime
    if (response.status === 401) {
      authUtils.removeToken();
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("authStateChanged"));
      }
    }

    return response;
  },
};

// ==================== SERVICE ====================
export const authService = {
  async fetchUser(): Promise<string | null> {
    try {
      const token = authUtils.getToken();
      if (!token) return null;

      const response = await fetch(
        `${AUTH_CONFIG.API_URL}${AUTH_CONFIG.ENDPOINTS.ME}`,
        {
          headers: authUtils.getAuthHeaders(),
        }
      );

      if (!response.ok) {
        authUtils.removeToken();
        return null;
      }

      const data = await response.json();
      return data.id || null;
    } catch {
      return null;
    }
  },

  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      const response = await fetch(
        `${AUTH_CONFIG.API_URL}${AUTH_CONFIG.ENDPOINTS.LOGIN}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        }
      );

      const data = await response.json();
      if (!response.ok) return { success: false, message: data.message };

      authUtils.setToken(data.token);
      const userId = await this.fetchUser();

      return { success: true, user: userId ? { id: userId } : undefined };
    } catch {
      return { success: false, message: "Erreur de connexion" };
    }
  },

  async register(credentials: RegisterCredentials): Promise<AuthResponse> {
    try {
      const response = await fetch(
        `${AUTH_CONFIG.API_URL}${AUTH_CONFIG.ENDPOINTS.REGISTER}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        }
      );

      const data = await response.json();
      return response.ok
        ? { success: true, message: "Compte créé avec succès" }
        : { success: false, message: data.message };
    } catch {
      return { success: false, message: "Erreur lors de l'inscription" };
    }
  },

  redirectToGoogle: () => {
    window.location.href = `${AUTH_CONFIG.API_URL}${AUTH_CONFIG.ENDPOINTS.GOOGLE}`;
  },

  async handleGoogleCallback(token: string): Promise<AuthResponse> {
    try {
      authUtils.setToken(token);
      const userId = await this.fetchUser();
      return { success: true, user: userId ? { id: userId } : undefined };
    } catch {
      authUtils.removeToken();
      return { success: false, message: "Erreur Google" };
    }
  },

  logout: () => {
    authUtils.removeToken();
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("authStateChanged"));
    }
  },
};

// ==================== HOOK ====================
export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const { setUser } = useUserStore();

  const login = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    setError("");

    const result = await authService.login(credentials);

    if (result.success) {
      if (result.user) {
        setUser(result.user);
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("authStateChanged"));
        }
      }
      router.push(AUTH_CONFIG.ROUTES.HOME);
    } else {
      setError(result.message || "Erreur");
    }

    setIsLoading(false);
  };

  const register = async (credentials: RegisterCredentials) => {
    setIsLoading(true);
    setError("");

    const result = await authService.register(credentials);

    if (!result.success) {
      setError(result.message || "Erreur");
    }

    setIsLoading(false);
    return result;
  };

  return {
    login,
    register,
    loginWithGoogle: authService.redirectToGoogle,
    logout: () => {
      authService.logout();
      setUser(null);
      router.push(AUTH_CONFIG.ROUTES.LOGIN);
    },
    isLoading,
    error,
    setError,
    isAuthenticated: authUtils.isAuthenticated(),
  };
};
