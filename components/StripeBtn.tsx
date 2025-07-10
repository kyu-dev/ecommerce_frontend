"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/store/userStore";

export function StripeBtn({ cart }: { cart: any }) {
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
      const res = await fetch(
        `http://localhost:3000/order/${user.id}/create-checkout-session`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cart }),
          credentials: "include",
        }
      );
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Erreur lors de la création de la session de paiement.");
      }
    } catch (e) {
      alert("Erreur lors du paiement.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handlePayment}
      disabled={loading || !user?.id}
      className="w-fit bg-yellow-400 text-black hover:bg-yellow-300"
    >
      {loading ? "Redirection..." : "Procéder au paiement"}
    </Button>
  );
}
