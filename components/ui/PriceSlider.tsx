"use client";
import React from "react";
import { Slider } from "@/components/ui/slider";
import { usePriceSliderStore } from "@/app/store/FilterStore";

interface PriceSliderProps {
  min?: number;
  max?: number;
  defaultValue?: number[];
  onValueChange?: (value: number[]) => void;
}

export default function PriceSlider({ onValueChange }: PriceSliderProps) {
  const { min, max, values, setValues } = usePriceSliderStore();

  const handleValueChange = (newValues: number[]) => {
    setValues(newValues);
    if (onValueChange) {
      onValueChange(newValues);
    }
  };

  return (
    <div className="w-full">
      <Slider
        min={min}
        max={max}
        value={values}
        onValueChange={handleValueChange}
        step={10}
      />
      <div className="flex justify-between text-sm text-gray-600 mt-2">
        <span>€{values[0]}</span>
        <span>€{values[1]}</span>
      </div>
    </div>
  );
}
