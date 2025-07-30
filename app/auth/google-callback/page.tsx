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
    const token = searchParams.get("token");
    const userParam = searchParams.get("user");

    console.log("Google Callback - Token:", token ? "présent" : "absent");
    console.log(
      "Google Callback - UserParam:",
      userParam ? "présent" : "absent"
    );

    if (token && !isProcessing) {
      setIsProcessing(true);
      console.log("Début du processus d'authentification Google");

      // Stocker le token dans localStorage
      authUtils.setToken(token);
      console.log("Token stocké dans localStorage");

      // Optionnel: stocker aussi les infos utilisateur si nécessaire
      if (userParam) {
        try {
          const userData = JSON.parse(decodeURIComponent(userParam));
          console.log("Données utilisateur:", userData);
        } catch (e) {
          console.error("Erreur parsing user data:", e);
        }
      }

      // Redirection immédiate
      console.log("Redirection immédiate vers /");
      console.log("window.location avant redirection:", window.location.href);

      // Mise à jour de l'état utilisateur avant redirection
      console.log("AVANT APPEL fetchUser()");
      fetchUser()
        .then((userId) => {
          console.log("DANS LE THEN de fetchUser, userId:", userId);
          if (userId) {
            setUser({ id: userId });
            console.log("État utilisateur mis à jour avec ID:", userId);

            // Déclencher un événement pour notifier les autres composants
            window.dispatchEvent(new CustomEvent("authStateChanged"));
          }
          // Redirection après mise à jour de l'état
          console.log("REDIRECTION window.location.href = '/'");
          window.location.href = "/";
        })
        .catch((error) => {
          console.error("DANS LE CATCH de fetchUser:", error);
          // Redirection même en cas d'erreur
          console.log("REDIRECTION (après erreur) window.location.href = '/'");
          window.location.href = "/";
        });

      console.log("APRÈS APPEL fetchUser() (asynchrone)");

      console.log("Redirection effectuée");
    } else if (!token) {
      console.log("Aucun token trouvé, redirection vers login");
      router.replace("/auth/login");
    }
  }, [searchParams, router, isProcessing]);

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
