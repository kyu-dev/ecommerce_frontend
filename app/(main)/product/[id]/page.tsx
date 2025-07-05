import { products } from "@/data/products";

export default async function ProductPage({ params }: { params: any }) {
  const { id } = await params;
  const product = products.find((e) => e.id === id);

  if (!product) {
    return (
      <div className="p-6">
        <p>Produit non trouvé</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full max-w-md h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg mb-4">{product.description}</p>
          <p className="text-2xl font-bold mb-6">${product.price}</p>
          <button className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}
