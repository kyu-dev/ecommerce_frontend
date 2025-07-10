"use client";
import { useCartDrawerStore } from "@/store/cartDrawerStore";
import { useCartStore } from "@/store/cartStore";

export default function CartDrawer() {
  const { isOpen, close } = useCartDrawerStore();
  const { cart } = useCartStore();

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
        {cart.length === 0 ? (
          <p className="text-muted-foreground">Votre panier est vide.</p>
        ) : (
          cart.map((item, idx) => (
            <div key={idx} className="flex justify-between">
              <span>Produit #{item.productId}</span>
              <span>x{item.quantity}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
