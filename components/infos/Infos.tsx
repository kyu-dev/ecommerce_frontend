import React from "react";

const Infos = () => {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row  border-4 border-black rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        {/* Partie gauche : Mockup */}
        <div className="md:w-1/2 w-full flex items-center justify-center  border-b-4 md:border-b-0 md:border-r-4 border-black ">
          <img
            src="/wpgroup.jpg"
            className="w-full h-full object-cover"
            alt="Groupe de fonds d'écran"
          />
        </div>
        {/* Partie droite : Avantages */}
        <div className="md:w-1/2 w-full flex flex-col gap-6 p-8 justify-center">
          <div className="bg-yellow-300 border-2 border-black p-6 rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-2xl font-bold mb-2">Qualité 4K</h3>
            <p>
              Des visuels ultra-haute définition pour un rendu exceptionnel sur
              tous vos supports.
            </p>
          </div>
          <div className="bg-green-300 border-2 border-black p-6 rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-2xl font-bold mb-2">Livraison rapide</h3>
            <p>
              Recevez vos produits en un temps record, partout en France et à
              l'international.
            </p>
          </div>
          <div className="bg-blue-300 border-2 border-black p-6 rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-2xl font-bold mb-2">Satisfait ou remboursé</h3>
            <p>Essayez sans risque : satisfait ou remboursé sous 30 jours.</p>
          </div>
          <div className="bg-pink-300 border-2 border-black p-6 rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-2xl font-bold mb-2">Support 24/7</h3>
            <p>
              Notre équipe est disponible à tout moment pour répondre à vos
              questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infos;
