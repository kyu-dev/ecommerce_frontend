"use client";
import { useEffect, Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { authUtils } from "@/lib/auth";
import { fetchUser } from "@/lib/fetchUser";
import { useUserStore } from "@/store/userStore";

function GoogleCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setUser } = useUserStore();
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const handleGoogleCallback = async () => {
      // Éviter les exécutions multiples
      if (isProcessing || !isMounted) return;

      const token = searchParams.get("token");
      const userParam = searchParams.get("user");

      // Si aucun token, rediriger vers login
      if (!token) {
        if (isMounted) router.replace("/auth/login");
        return;
      }

      setIsProcessing(true);

      try {
        // Stocker le token dans localStorage
        authUtils.setToken(token);

        // Optionnel: stocker aussi les infos utilisateur si nécessaire
        if (userParam) {
          try {
            JSON.parse(decodeURIComponent(userParam));
            // Vous pouvez stocker les infos utilisateur si nécessaire
            // localStorage.setItem('user', JSON.stringify(user));
          } catch (e) {
            console.error("Erreur parsing user data:", e);
          }
        }

        // Mettre à jour immédiatement l'état utilisateur
        const userId = await fetchUser();
        if (isMounted) {
          setUser(userId ? { id: userId } : null);
          // Rediriger vers la page d'accueil sans reload
          router.replace("/");
        }
      } catch (error) {
        console.error("Erreur lors de l'authentification Google:", error);
        // En cas d'erreur, supprimer le token et rediriger vers login
        authUtils.removeToken();
        if (isMounted) router.replace("/auth/login");
      }
    };

    // Éviter d'exécuter plusieurs fois si déjà en cours de traitement
    if (searchParams.get("token") && !isProcessing) {
      handleGoogleCallback();
    }

    return () => {
      isMounted = false;
    };
  }, [router, searchParams, setUser, isProcessing]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
        <p>Connexion en cours...</p>
      </div>
    </div>
  );
}

export default function GoogleCallback() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
            <p>Chargement...</p>
          </div>
        </div>
      }
    >
      <GoogleCallbackContent />
    </Suspense>
  );
}
