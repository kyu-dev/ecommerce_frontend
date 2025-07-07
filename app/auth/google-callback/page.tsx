"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export default function GoogleCallback() {
  const setToken = useAuthStore((state) => state.setToken);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      setToken(token);
      router.push("/"); // Redirige vers la page d'accueil ou dashboard
    }
  }, [setToken, router, searchParams]);

  return <div>Connexion en cours...</div>;
}
