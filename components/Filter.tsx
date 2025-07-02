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
import { Label } from "./ui/label";
import { Star } from "lucide-react";

function Filter() {
  return (
    <Card className="w-md">
      <CardHeader>
        <CardTitle>Filter</CardTitle>
      </CardHeader>
      <CardContent>
        <Separator />
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Tags</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Separator />
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
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
              {[1, 2, 3, 4, 5].map((rating) => (
                <div
                  key={rating}
                  className="flex items-center justify-between py-1"
                >
                  <div className="flex gap-2">
                    {Array.from({ length: rating }, (_, i) => (
                      <Star key={i} className="fill-black w-4 h-4" />
                    ))}
                  </div>
                  <Checkbox />
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
