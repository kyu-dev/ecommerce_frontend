"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useUserStore } from "@/store/userStore";
import { fetchUser } from "@/lib/fetchUser";
import { authUtils } from "@/lib/auth";

const LoginBtn = () => {
  const { user, setUser } = useUserStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const id = await fetchUser();
      setUser(id ? { id } : null);
      setLoading(false);
    };

    getUser();

    // Écouter les changements d'état d'authentification
    const handleAuthChange = () => {
      console.log(
        "Événement authStateChanged reçu, rechargement de l'utilisateur"
      );
      getUser();
    };

    window.addEventListener("authStateChanged", handleAuthChange);

    return () => {
      window.removeEventListener("authStateChanged", handleAuthChange);
    };
  }, [setUser]);

  const handleLogout = async () => {
    try {
      // Appeler l'endpoint de logout (optionnel, pour nettoyer côté serveur si nécessaire)
      await authUtils.authenticatedFetch(
        `${process.env.NEXT_PUBLIC_API_URL}/authentication/logout`,
        {
          method: "POST",
        }
      );

      // Supprimer le token du localStorage
      authUtils.removeToken();

      // Mettre à jour l'état local
      setUser(null);

      // Rafraîchir la page pour s'assurer que tous les états sont réinitialisés
      window.location.reload();
    } catch (error) {
      console.error("Logout failed:", error);
      // Même en cas d'erreur, on supprime le token local
      authUtils.removeToken();
      setUser(null);
      window.location.reload();
    }
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
