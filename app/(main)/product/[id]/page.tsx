interface Product {
  id: string;
  name: string;
  price: number;
  img: string;
}

interface PageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;

  try {
    const response = await fetch(`http://localhost:3000/product/get/?id=${id}`);

    if (!response.ok) {
      throw new Error("Échec de la récupération du produit");
    }

    const data = await response.json();
    const product: Product = data.data;

    return (
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <img
              src={product.img}
              alt={product.name}
              className="w-full max-w-md h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl font-bold mb-6">${product.price}</p>
            <button className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Erreur:", error);
    return (
      <div className="p-6 text-red-500">
        Erreur lors du chargement du produit
      </div>
    );
  }
}
