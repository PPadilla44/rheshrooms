"use client";

import { useEffect } from "react";
import Shroom from "@/components/Shroom";
import { celebratedStore, HUNT_SPOTS, huntStore, resetHunt, soundStore } from "@/lib/stores";
import { play } from "@/lib/sfx";

// Small strip under the top bar: mushroom hunt progress + sound toggle.
// Also plays click sounds site-wide (only when sound is on).
export default function VillageStatus() {
  const found = huntStore.useValue();
  const sound = soundStore.useValue();
  const celebrated = celebratedStore.useValue();
  const total = HUNT_SPOTS.length;
  const count = found.filter((s) => (HUNT_SPOTS as readonly string[]).includes(s)).length;
  const done = count >= total;
  const showCelebration = done && !celebrated;

  // Click sounds for links and buttons
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest("[data-sfx], a, button");
      if (!el) return;
      const kind = el.getAttribute("data-sfx");
      if (kind === "none") return;
      play(kind === "pop" ? "pop" : "open");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (showCelebration) play("fanfare");
  }, [showCelebration]);

  return (
    <>
      <div className="no-print w-full max-w-5xl mx-auto px-4 -mt-1 mb-3 flex items-center justify-end gap-2 text-sm">
        <p
          className="flex items-center gap-1.5 rounded-full bg-cream/90 border-2 border-wood-dark/60 px-3 py-1 font-display font-semibold"
          aria-live="polite"
        >
          <Shroom className="h-4 w-4" />
          {done ? "All mushrooms found!" : `Mushroom hunt: ${count}/${total}`}
        </p>
        <button
          type="button"
          data-sfx="none"
          aria-pressed={sound}
          onClick={() => {
            soundStore.write(!sound);
            if (!sound) play("pop", true);
          }}
          className="rounded-full bg-cream/90 border-2 border-wood-dark/60 px-3 py-1 font-display font-semibold hover:bg-white"
        >
          <span aria-hidden>{sound ? "🔊" : "🔇"}</span> Sound {sound ? "on" : "off"}
        </button>
      </div>

      {showCelebration && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="hunt-done-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 px-4"
        >
          <div className="panel pop-in max-w-sm w-full p-6 text-center flex flex-col items-center gap-3">
            <div className="flex gap-1">
              {["#e2513c", "#5a9bd5", "#8a6bc4", "#e0a526", "#5fa05a", "#d9738f", "#f2a93b"].map((c) => (
                <Shroom key={c} cap={c} className="h-8 w-8 bob" />
              ))}
            </div>
            <h2 id="hunt-done-title" className="text-2xl font-bold">
              You found all {total} mushrooms!
            </h2>
            <p>
              Chanty is impressed. You explored every corner of Rheshroom Village. Thanks for
              visiting Rhe!
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-1">
              <button
                type="button"
                autoFocus
                className="btn-glossy btn-moss"
                onClick={() => celebratedStore.write(true)}
              >
                Yay!
              </button>
              <button
                type="button"
                className="btn-glossy btn-wood"
                onClick={() => {
                  resetHunt();
                  celebratedStore.write(false);
                }}
              >
                Hunt again
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
