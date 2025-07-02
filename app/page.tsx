import Link from "next/link";
import React from "react";

function page() {
  return (
    <>
      <Link className="bg-red-500 text-8xl" href={"/discover"}>
        discover
      </Link>
    </>
  );
}

export default page;
