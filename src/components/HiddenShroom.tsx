"use client";

import { useState } from "react";
import Shroom from "@/components/Shroom";
import { huntStore, markFound, type HuntSpot } from "@/lib/stores";
import { play } from "@/lib/sfx";

type Props = {
  spot: HuntSpot;
  cap?: string;
  className?: string; // positioning, e.g. "absolute right-3 bottom-2"
};

// A small wiggling mushroom tucked into a page. Click it to collect it.
export default function HiddenShroom({ spot, cap = "#e2513c", className = "" }: Props) {
  const found = huntStore.useValue();
  const [collecting, setCollecting] = useState(false);

  if (found.includes(spot) && !collecting) return null;

  return (
    <button
      type="button"
      data-sfx="none"
      aria-label="A little mushroom! Pick it up"
      onClick={() => {
        if (collecting) return;
        setCollecting(true);
        play("found");
        setTimeout(() => {
          markFound(spot);
          setCollecting(false);
        }, 500);
      }}
      className={`z-10 h-7 w-7 sm:h-8 sm:w-8 p-0 ${className}`}
    >
      <Shroom cap={cap} className={`h-full w-full ${collecting ? "found" : "hidden-shroom"}`} />
    </button>
  );
}
