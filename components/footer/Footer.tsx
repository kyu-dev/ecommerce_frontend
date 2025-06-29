const Footer = () => {
  return (
    <footer className="bg-black text-white border-t-4 border-black py-16">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Wallpaper</h3>
          <p>Votre destination créative</p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Produits</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Nouveautés
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Collections
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Promotions
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Support</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Aide
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Suivez-nous</h4>
          <div className="flex gap-4">
            <button className="bg-white text-black px-4 py-2 border-2 border-white hover:bg-black hover:text-white transition-all">
              Instagram
            </button>
            <button className="bg-white text-black px-4 py-2 border-2 border-white hover:bg-black hover:text-white transition-all">
              Twitter
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
