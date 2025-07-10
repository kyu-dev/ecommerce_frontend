export async function fetchUser() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/authentication/me`,
      {
        credentials: "include",
      }
    );
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
