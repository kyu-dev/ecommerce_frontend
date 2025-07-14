"use client";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { useCartDrawerStore } from "@/store/cartDrawerStore";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "next/navigation";

const CardBtn = () => {
  const { open } = useCartDrawerStore();
  const { user } = useUserStore();
  const router = useRouter();

  const handleClick = () => {
    // Si pas connecté, rediriger vers la page de connexion
    if (!user?.id) {
      router.push("/auth/login");
      return;
    }

    // Sinon ouvrir le panier
    open();
  };

  return (
    <Button variant="ghost" onClick={handleClick}>
      <ShoppingBag />
    </Button>
  );
};

export default CardBtn;
