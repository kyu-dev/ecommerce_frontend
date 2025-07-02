import { create } from "zustand";

interface PriceSliderState {
  min: number;
  max: number;
  values: number[];
  setValues: (newValues: number[]) => void;
}

export const usePriceSliderStore = create<PriceSliderState>((set) => ({
  min: 0,
  max: 1000,
  values: [100, 500],
  setValues: (newValues) => set({ values: newValues }),
}));
