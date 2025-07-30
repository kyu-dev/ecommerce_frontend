// Utilities pour gérer l'authentification côté client

export const authUtils = {
  // Stocker le token
  setToken: (token: string) => {
    localStorage.setItem("authToken", token);
  },

  // Récupérer le token
  getToken: (): string | null => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("authToken");
    }
    return null;
  },

  // Supprimer le token
  removeToken: () => {
    localStorage.removeItem("authToken");
  },

  // Créer les headers d'autorisation
  getAuthHeaders: (): Record<string, string> => {
    const token = authUtils.getToken();
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    return headers;
  },

  // Vérifier si l'utilisateur est connecté
  isAuthenticated: (): boolean => {
    return !!authUtils.getToken();
  },

  // Faire une requête authentifiée
  authenticatedFetch: async (url: string, options: RequestInit = {}) => {
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
    }

    return response;
  },
};
