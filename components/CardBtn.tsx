"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { useUserStore } from "@/store/userStore";
import { fetchUser } from "@/lib/fetchUser";

const CardBtn = () => {
  const { userId, setUserId } = useUserStore();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUser = async () => {
      const id = await fetchUser();
      setUserId(id);
      setLoading(false);
    };
    getUser();
  }, [setUserId]);

  if (loading || !userId) return null;

  return (
    <>
      <Button variant="ghost">
        <ShoppingBag />
      </Button>
    </>
  );
};

export default CardBtn;
