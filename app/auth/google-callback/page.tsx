"use client";
import { useEffect, Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { authService } from "@/lib/auth-complete";
import { useUserStore } from "@/store/userStore";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

function GoogleCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setUser } = useUserStore();
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const handleCallback = async () => {
      if (isProcessing) return;

      const token = searchParams.get("token");

      if (!token) {
        router.replace("/auth/login");
        return;
      }

      setIsProcessing(true);

      try {
        const result = await authService.handleGoogleCallback(token);

        if (result.success && result.user) {
          setUser(result.user);
          window.dispatchEvent(new CustomEvent("authStateChanged"));
        }

        router.replace("/");
      } catch (error) {
        console.error("Erreur Google callback:", error);
        router.replace("/auth/login");
      }
    };

    handleCallback();
  }, [searchParams, router, setUser, isProcessing]);

  return <LoadingSpinner message="Connexion en cours..." />;
}

export default function GoogleCallback() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <GoogleCallbackContent />
    </Suspense>
  );
}
