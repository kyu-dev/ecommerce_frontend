"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const LoginBtn = () => {
  return (
    <Link href="/auth/login">
      <Button>Login</Button>
    </Link>
  );
};

export default LoginBtn;
