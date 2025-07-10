"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useUserStore } from "@/store/userStore";
import { fetchUser } from "@/lib/fetchUser";

const LoginBtn = () => {
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

  if (loading || userId) return null;

  return (
    <Link href="/auth/login">
      <Button>Login</Button>
    </Link>
  );
};

export default LoginBtn;
