import {
  useTagStore,
  useRatingStore,
  usePriceSliderStore,
} from "@/app/store/FilterStore";

export function filterProducts(products: any[]) {
  const { tags } = useTagStore();
  const { ratings } = useRatingStore();
  const { values: priceRange } = usePriceSliderStore();

  return products.filter((product) => {
    // Filtre par tags (si au moins un tag est sélectionné)
    const hasSelectedTags = tags.some((tag) => tag);
    if (hasSelectedTags) {
      const productTags = product.tags || [];
      const isTagMatch = tags.some(
        (tag, index) => tag && productTags.includes(`Tag ${index + 1}`)
      );
      if (!isTagMatch) return false;
    }

    // Filtre par évaluation (si au moins une évaluation est sélectionnée)
    const hasSelectedRatings = ratings.some((rating) => rating);
    if (hasSelectedRatings) {
      const productRating = Math.floor(product.rating);
      const isRatingMatch = ratings[productRating - 1];
      if (!isRatingMatch) return false;
    }

    // Filtre par prix
    const productPrice = parseFloat(
      product.price.replace("€", "").replace(",", ".")
    );
    const [minPrice, maxPrice] = priceRange;
    if (productPrice < minPrice || productPrice > maxPrice) return false;

    return true;
  });
}
