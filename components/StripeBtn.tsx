"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/store/userStore";
import { CartItem } from "@/store/cartStore";
import { AUTH_CONFIG, authUtils } from "@/lib/auth-complete";

export function StripeBtn({ cart }: { cart: CartItem[] }) {
  const [loading, setLoading] = useState(false);
  const { user } = useUserStore();

  if (!cart || cart.length === 0) {
    return null;
  }

  const handlePayment = async () => {
    if (!user?.id) {
      alert("Vous devez être connecté pour payer.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${AUTH_CONFIG.API_URL}/order/${user.id}/create-checkout-session`,
        {
          method: "POST",
          headers: authUtils.getAuthHeaders(),
          body: JSON.stringify({ cart }),
        }
      );

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Erreur lors de la création de la session de paiement.");
      }
    } catch {
      alert("Erreur lors du paiement.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center w-full">
      <Button
        onClick={handlePayment}
        disabled={loading || !user?.id}
        className="w-full bg-blue-500 text-white hover:bg-blue-600"
      >
        {loading ? "Redirection..." : "Procéder au paiement"}
      </Button>
    </div>
  );
}
