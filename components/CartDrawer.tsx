"use client";
import { useCartDrawerStore } from "@/store/cartDrawerStore";
import { useCartStore } from "@/store/cartStore";
import { useUserStore } from "@/store/userStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { StripeBtn } from "./StripeBtn";
import Image from "next/image";

export default function CartDrawer() {
  const { isOpen, close } = useCartDrawerStore();
  const { cart, isLoaded, removeFromBackendCart } = useCartStore();
  const { user } = useUserStore();
  const router = useRouter();

  // Fermer le drawer et rediriger si pas connecté
  useEffect(() => {
    if (isOpen && !user?.id) {
      close();
      router.push("/auth/login");
    }
  }, [isOpen, user?.id, close, router]);

  // Ne pas afficher le drawer si pas connecté
  if (!user?.id) {
    return null;
  }

  const total = cart.reduce((acc, item) => {
    if (item.product && typeof item.product.price === "number") {
      return acc + item.product.price * item.quantity;
    }
    return acc;
  }, 0);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ willChange: "transform" }}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold">Mon panier</h2>
        <button onClick={close} className="text-2xl">
          &times;
        </button>
      </div>
      <div className="p-4 flex flex-col gap-4">
        {!isLoaded ? (
          <p className="text-muted-foreground">Chargement du panier...</p>
        ) : cart.length === 0 ? (
          <p className="text-muted-foreground">Votre panier est vide.</p>
        ) : (
          cart.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between gap-2 border-b pb-2"
            >
              {/* Affichage image, nom, prix */}
              <div className="flex items-center gap-2 flex-1">
                {item.product?.img && (
                  <Image
                    src={item.product.img}
                    alt={item.product?.name || ""}
                    className="w-12 h-12 object-cover rounded"
                    width={48}
                    height={48}
                  />
                )}
                <div>
                  <div className="font-semibold">
                    {item.product?.name || `Produit #${item.productId}`}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.product?.price ? `${item.product.price} €` : null}
                  </div>
                </div>
              </div>
              <span className="mx-2">x{item.quantity}</span>
              <button
                className="text-red-500 hover:text-red-700 text-xl px-2"
                onClick={() => {
                  removeFromBackendCart(user.id, item.productId);
                }}
                title="Supprimer"
              >
                &times;
              </button>
            </div>
          ))
        )}
      </div>
      {/* Affichage du total */}
      {cart.length > 0 && (
        <div className="p-4 border-t flex justify-between items-center font-bold text-lg">
          <span>Total :</span>
          <span>{total.toFixed(2)} €</span>
        </div>
      )}
      <StripeBtn cart={cart} />
    </div>
  );
}
