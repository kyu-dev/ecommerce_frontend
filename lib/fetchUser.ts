export async function fetchUser() {
  try {
    const res = await fetch("http://localhost:3000/authentication/me", {
      credentials: "include",
    });
    if (res.ok) {
      const data = await res.json();
      return data.id || null;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}
