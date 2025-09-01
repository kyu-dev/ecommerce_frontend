function Footer() {
  return (
    <footer className="w-full border-t mt-12 py-6 bg-white text-center text-muted-foreground text-sm">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-2 px-4">
        <span>
          © {new Date().getFullYear()} BeerShop. Tous droits réservés.
        </span>
        <span>
          Réalisé par{" "}
          <a
            href="https://github.com/kyu-dev"
            className="underline hover:text-primary"
          >
            Arthur Vienot Ongaro
          </a>
        </span>
      </div>
    </footer>
  );
}

export { Footer };
