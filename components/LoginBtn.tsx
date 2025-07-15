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

  const handleLogout = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/authentication/logout`,
        {
          method: "POST",
          credentials: "include",
        }
      );

      if (response.ok) {
        setUser(null);
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (loading) return null;

  if (user) {
    return <Button onClick={handleLogout}>Logout</Button>;
  }

  return (
    <Link href="/auth/login">
      <Button>Login</Button>
    </Link>
  );
};

export default LoginBtn;
