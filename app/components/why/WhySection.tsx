import { MoveRight } from "lucide-react";
import React from "react";

const WhySection = () => {
  return (
    <div className="flex justify-between px-20 py-30">
      <h3 className="text-4xl font-bold flex">
        Why <br /> Choosing Us
      </h3>
      <div className="flex flex-col gap-5 w-2xs">
        <h4 className="text-2xl font-bold">Luxury facilities</h4>
        <p>
          The advantage of hiring a workspace with us is that givees you
          comfortable service and all-around facilities.
        </p>
        <button className="flex gap-6 text-orange-400">
          More infos <MoveRight />
        </button>
      </div>
      <div className="flex flex-col gap-5 w-2xs">
        <h4 className="text-2xl font-bold">Luxury facilities</h4>
        <p>
          The advantage of hiring a workspace with us is that givees you
          comfortable service and all-around facilities.
        </p>
        <button className="flex gap-6 text-orange-400">
          More infos <MoveRight />
        </button>
      </div>
      <div className="flex flex-col gap-5 w-2xs">
        <h4 className="text-2xl font-bold">Luxury facilities</h4>
        <p>
          The advantage of hiring a workspace with us is that givees you
          comfortable service and all-around facilities.
        </p>
        <button className="flex gap-6 text-orange-400">
          More infos <MoveRight />
        </button>
      </div>
    </div>
  );
};

export default WhySection;
