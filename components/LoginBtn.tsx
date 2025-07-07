"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";

const LoginBtn = () => {
  const token = useAuthStore((state) => state.token);

  return (
    <>
      {!token && (
        <Link href="/auth/login">
          <Button>Login</Button>
        </Link>
      )}
    </>
  );
};

export default LoginBtn;
