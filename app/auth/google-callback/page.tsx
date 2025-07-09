"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GoogleCallback() {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, [router]);

  return <div>Connexion en cours...</div>;
}
