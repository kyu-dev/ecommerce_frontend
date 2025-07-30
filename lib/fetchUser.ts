export async function fetchUser() {
  try {
    const token = localStorage.getItem("authToken");
    if (!token) {
      return null;
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/authentication/me`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (res.ok) {
      const data = await res.json();
      return data.id || null;
    } else {
      // Si le token est invalide, on le supprime
      localStorage.removeItem("authToken");
      return null;
    }
  } catch {
    return null;
  }
}
