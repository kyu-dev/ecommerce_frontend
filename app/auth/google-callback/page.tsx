"use client";
import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { authUtils } from "@/lib/auth";

function GoogleCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    const userParam = searchParams.get("user");

    if (token) {
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

      // Rediriger vers la page d'accueil
      router.push("/");
      window.location.reload(); // Pour rafraîchir l'état d'authentification
    } else {
      // En cas d'erreur, rediriger vers login
      router.push("/auth/login");
    }
  }, [router, searchParams]);

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
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p>Chargement...</p>
        </div>
      </div>
    }>
      <GoogleCallbackContent />
    </Suspense>
  );
}
