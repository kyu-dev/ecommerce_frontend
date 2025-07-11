// eslint-disable-next-line @typescript-eslint/no-unused-vars
"use client";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { useCartDrawerStore } from "@/store/cartDrawerStore";

const CardBtn = () => {
  const { open } = useCartDrawerStore();

  return (
    <Button variant="ghost" onClick={open}>
      <ShoppingBag />
    </Button>
  );
};

export default CardBtn;
