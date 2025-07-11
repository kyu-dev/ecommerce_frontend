// Loader personnalisé pour désactiver complètement l'optimisation d'images
export default function imageLoader({ src }) {
  return src;
}
