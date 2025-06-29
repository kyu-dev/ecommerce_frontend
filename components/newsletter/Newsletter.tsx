import React from "react";

const Newsletter = () => {
  return (
    <section className=" py-16 mt-20 ">
      <div className="max-w-2xl mx-auto text-center px-8">
        <h2 className="text-4xl font-bold mb-6">Restez connecté</h2>
        <p className="text-xl mb-8">
          Recevez nos dernières nouveautés en avant-première
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Votre email"
            className="flex-1 px-4 py-3 border-2 border-black focus:outline-none rounded-sm text-lg"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 border-2 border-black hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-sm"
          >
            S'abonner
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
