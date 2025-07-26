import AddCardBtn from "@/components/AddCardBtn";
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  alcoholDegree: number | null;
  img: string;
  categoryId: number;
  volumeId: number;
  createdAt: string;
  updatedAt: string;
  rating: number;
  category: {
    id: number;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  };
}

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/product/get/?id=${id}`
    );

    if (!response.ok) {
      throw new Error("Échec de la récupération du produit");
    }

    const data = await response.json();
    const product: Product = data.data;

    return (
      <div className="p-4 md:p-10 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-xl shadow-sm overflow-hidden">
          {/* IMAGE */}
          <div className="flex items-center justify-center bg-slate-50 aspect-square overflow-hidden">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>

          {/* INFOS PRODUIT */}
          <div className="flex flex-col justify-center p-6 md:p-10 gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-slate-900 leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center gap-2 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < product.rating ? "text-yellow-400" : "text-gray-300"
                    }
                  >
                    ★
                  </span>
                ))}
                <span className="text-sm text-slate-600 font-medium">
                  {product.rating}/5
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${
                    product.category?.name === "Blonde"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {product.category?.name}
                </span>
                {product.alcoholDegree && (
                  <span className="px-2 py-1 rounded bg-gray-100 text-xs font-medium">
                    {product.alcoholDegree}°
                  </span>
                )}
                <span className="text-xs text-muted-foreground ml-2">
                  Ajouté le {new Date(product.createdAt).toLocaleDateString()}
                </span>
              </div>
              <div className="mb-6">
                <p className="text-base md:text-lg text-slate-700 leading-relaxed whitespace-pre-line min-h-[6rem] md:min-h-[8rem]">
                  {product.description}
                </p>
              </div>
            </div>

            {/* ENCAR PRIX/ACHAT */}
            <div className="flex flex-col gap-4">
              <div className="flex items-end gap-4">
                <span className="text-3xl font-bold text-primary">
                  {product.price} €
                </span>

                <span
                  className={`ml-4 px-3 py-1 rounded-full text-xs font-bold ${
                    product.stock > 0
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {product.stock > 0
                    ? `En stock (${product.stock})`
                    : "Rupture de stock"}
                </span>
              </div>
              <AddCardBtn productId={product.id} stock={product.stock} />
              <div className="flex flex-col gap-1 text-xs text-muted-foreground mt-2">
                <div>
                  Catégorie :{" "}
                  <span className="font-semibold">
                    {product.category?.name}
                  </span>
                </div>
                <div>
                  Description catégorie : {product.category?.description}
                </div>
                <div>
                  Dernière mise à jour :{" "}
                  {new Date(product.updatedAt).toLocaleDateString()}
                </div>
              </div>
            </div>
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
