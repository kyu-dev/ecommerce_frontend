// eslint-disable-next-line @typescript-eslint/no-unused-vars
"use client";
import { ReactNode } from "react";
import { useCartSync } from "@/hooks/useCartSync";

export default function CartSyncProvider({
  children,
}: {
  children: ReactNode;
}) {
  useCartSync();
  console.log("CartSyncProvider MONTÉ !");
  return <>{children}</>;
}
