"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useUserStore } from "@/store/userStore";
import { fetchUser } from "@/lib/fetchUser";

const LoginBtn = () => {
  const { user, setUser } = useUserStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const id = await fetchUser();
      setUser(id ? { id } : null);
      setLoading(false);
    };
    getUser();
  }, [setUser]);

  if (loading || user) return null;

  return (
    <Link href="/auth/login">
      <Button>Login</Button>
    </Link>
  );
};

export default LoginBtn;
