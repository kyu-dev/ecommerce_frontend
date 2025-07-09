import { useQuery } from "@tanstack/react-query";

export function useUser() {
  return useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/authentication/me", {
        credentials: "include",
      });
      if (!res.ok) throw new Error("Non authentifié");
      return res.json();
    },
    retry: false,
  });
}
