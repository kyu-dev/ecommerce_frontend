"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useUserStore } from "@/store/userStore";
import { authService, authUtils, AUTH_CONFIG } from "@/lib/auth-complete";

const LoginBtn = () => {
  const { user, setUser } = useUserStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const id = await authService.fetchUser();
      setUser(id ? { id } : null);
      setLoading(false);
    };

    getUser();

    // Écouter les changements d'état d'authentification
    const handleAuthChange = () => {
      getUser();
    };

    window.addEventListener("authStateChanged", handleAuthChange);

    return () => {
      window.removeEventListener("authStateChanged", handleAuthChange);
    };
  }, [setUser]);

  const handleLogout = async () => {
    try {
      // Appeler l'endpoint de logout (optionnel)
      await fetch(`${AUTH_CONFIG.API_URL}${AUTH_CONFIG.ENDPOINTS.LOGOUT}`, {
        method: "POST",
        headers: authUtils.getAuthHeaders(),
      });
    } catch (error) {
      console.error("Logout API failed:", error);
    }

    // Supprimer le token et mettre à jour l'état
    authService.logout();
    setUser(null);
    window.location.reload();
  };

  if (loading) return null;

  if (user) {
    return <Button onClick={handleLogout}>Logout</Button>;
  }

  return (
    <Link href="/auth/login">
      <Button>Login</Button>
    </Link>
  );
};

export default LoginBtn;
