import React from "react";
import Link from "next/link";

const SuccessPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="flex flex-col items-center gap-6 p-8 bg-gray-50 rounded-xl shadow">
        <div className="bg-green-100 rounded-full p-4">
          <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="12" fill="#bbf7d0" />
            <path
              d="M7 13l3 3 7-7"
              stroke="#22c55e"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 text-center">
          Merci pour votre commande !
        </h1>
        <p className="text-gray-600 text-center max-w-md">
          Votre paiement a été validé et votre commande est en cours de
          préparation. Un email de confirmation vous a été envoyé.
        </p>
        <Link
          href="/"
          className="mt-4 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-full shadow hover:bg-yellow-300 transition"
        >
          Retour à l'accueil
        </Link>
      </div>
    </main>
  );
};

export default SuccessPage;
