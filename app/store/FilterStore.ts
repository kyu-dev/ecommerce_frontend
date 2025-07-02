import { create } from "zustand";

type PriceSliderState = {
  min: number;
  max: number;
  values: number[];
  setValues: (newValues: number[]) => void;
};

type RatingState = {
  ratings: boolean[]; // Tableau de booléens pour les étoiles (1 à 5)
  toggleRating: (index: number) => void; // Fonction pour basculer l'état d'une étoile
};

type TagState = {
  tags: boolean[]; // Tableau de booléens pour les tags
  toggleTag: (index: number) => void; // Fonction pour basculer l'état d'un tag
};

export const usePriceSliderStore = create<PriceSliderState>((set) => ({
  min: 0,
  max: 1000,
  values: [0, 500],
  setValues: (newValues) => set({ values: newValues }),
}));

export const useRatingStore = create<RatingState>((set) => ({
  ratings: [false, false, false, false, false], // Initialisation des 5 étoiles
  toggleRating: (index) =>
    set((state) => ({
      ratings: state.ratings.map((r, i) => (i === index ? !r : r)), // change l'etat des étoile de l'arr
    })),
}));

export const useTagStore = create<TagState>((set) => ({
  tags: [false, false, false, false, false], // Initialisation des 5 tags
  toggleTag: (index) =>
    set((state) => ({
      tags: state.tags.map((t, i) => (i === index ? !t : t)),
    })),
}));
