export async function fetchUser() {
  console.log("=== DÉBUT fetchUser ===");
  try {
    const token = localStorage.getItem("authToken");
    console.log(
      "fetchUser - Token dans localStorage:",
      token ? "présent" : "absent"
    );
    console.log(
      "fetchUser - Token value:",
      token ? token.substring(0, 20) + "..." : "null"
    );

    if (!token) {
      console.log("fetchUser - Aucun token trouvé, retour null");
      return null;
    }

    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/authentication/me`;
    console.log("fetchUser - URL API complète:", apiUrl);
    console.log(
      "fetchUser - process.env.NEXT_PUBLIC_API_URL:",
      process.env.NEXT_PUBLIC_API_URL
    );

    console.log("fetchUser - Début de l'appel fetch...");

    const res = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    console.log("fetchUser - Appel fetch terminé, status:", res.status);
    console.log("fetchUser - Response OK:", res.ok);

    if (res.ok) {
      const data = await res.json();
      console.log("fetchUser - Données reçues:", data);
      return data.id || null;
    } else {
      console.log("fetchUser - Réponse non-ok, status:", res.status);
      const errorText = await res.text();
      console.log("fetchUser - Erreur du serveur:", errorText);
      // Si le token est invalide, on le supprime
      localStorage.removeItem("authToken");
      return null;
    }
  } catch (error) {
    console.error("fetchUser - Erreur dans le catch:", error);
    return null;
  } finally {
    console.log("=== FIN fetchUser ===");
  }
}
