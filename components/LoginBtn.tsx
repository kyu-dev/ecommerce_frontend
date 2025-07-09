"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useUser } from "../app/hooks/useUser";

const LoginBtn = () => {
  const { data: user, isLoading, isError } = useUser();

  // Affiche rien pendant le chargement
  if (isLoading) return null;

  // Si l'utilisateur n'est PAS connecté (erreur ou pas de user), on affiche le bouton
  if (isError || !user) {
    return (
      <Link href="/auth/login">
        <Button>Login</Button>
      </Link>
    );
  }

  // Si l'utilisateur est connecté, on n'affiche rien
  return null;
};

export default LoginBtn;
