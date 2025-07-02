import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import PriceSlider from "@/components/ui/PriceSlider";
import { Checkbox } from "./ui/checkbox";
import { Star } from "lucide-react";
import { useRatingStore, useTagStore } from "@/app/store/FilterStore";

function Filter() {
  const { ratings, toggleRating } = useRatingStore();
  const { tags, toggleTag } = useTagStore();

  return (
    <Card className="w-md h-full">
      <CardHeader>
        <CardTitle>Filter</CardTitle>
      </CardHeader>
      <CardContent>
        <Separator />
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Tags</AccordionTrigger>
            <AccordionContent>
              {["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5"].map(
                (tag, index) => (
                  <div
                    key={tag}
                    className="flex items-center justify-between py-1"
                  >
                    <span>{tag}</span>
                    <Checkbox
                      checked={tags[index]}
                      onCheckedChange={() => toggleTag(index)}
                    />
                  </div>
                )
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Separator />

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Price</AccordionTrigger>
            <AccordionContent className=" pt-2">
              <PriceSlider min={0} max={1000} defaultValue={[100, 500]} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Separator />
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Rating</AccordionTrigger>
            <AccordionContent>
              {[1, 2, 3, 4].map((rating, index) => (
                <div
                  key={rating}
                  className="flex items-center justify-between py-1"
                >
                  <div className="flex gap-2">
                    {Array.from({ length: rating }, (_, i) => (
                      <Star key={i} className="fill-black w-4 h-4" />
                    ))}
                  </div>
                  <Checkbox
                    checked={ratings[index]}
                    onCheckedChange={() => toggleRating(index)}
                  />
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}

export default Filter;
