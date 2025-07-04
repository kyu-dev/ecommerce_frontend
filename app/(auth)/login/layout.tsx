export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Layout UI */}
      {/* Place children where you want to render a page or nested layout */}
      <main>{children}</main>
    </>
  );
}
