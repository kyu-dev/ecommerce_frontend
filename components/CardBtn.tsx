"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { useUserStore } from "@/store/userStore";
import { fetchUser } from "@/lib/fetchUser";
import { useCartDrawerStore } from "@/store/cartDrawerStore";

const CardBtn = () => {
  const { user, setUser } = useUserStore();
  const [loading, setLoading] = useState(true);
  const { open } = useCartDrawerStore();
  useEffect(() => {
    const getUser = async () => {
      const id = await fetchUser();
      setUser(id ? { id } : null);
      setLoading(false);
    };
    getUser();
  }, [setUser]);

  if (loading || !user) return null;

  return (
    <>
      <Button variant="ghost" onClick={open}>
        <ShoppingBag />
      </Button>
    </>
  );
};

export default CardBtn;
