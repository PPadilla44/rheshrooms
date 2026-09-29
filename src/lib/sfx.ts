"use client";

import { soundStore } from "@/lib/stores";

// Little synthesized sound effects (no audio files). Only play when the
// visitor has turned sound on; it's off by default.

export type Sfx = "pop" | "open" | "found" | "fanfare";

let ctx: AudioContext | null = null;

function audio(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

function tone(ac: AudioContext, freq: number, start: number, dur: number, type: OscillatorType, vol = 0.12, slideTo?: number) {
  const osc = ac.createOscillator();
  const gain = ac.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, start);
  if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, start + dur);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(vol, start + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + dur);
  osc.connect(gain).connect(ac.destination);
  osc.start(start);
  osc.stop(start + dur + 0.02);
}

export function play(kind: Sfx, force = false) {
  if (!force && !soundStore.read()) return;
  const ac = audio();
  if (!ac) return;
  const t = ac.currentTime;
  switch (kind) {
    case "pop":
      tone(ac, 520, t, 0.12, "sine", 0.14, 880);
      break;
    case "open":
      tone(ac, 392, t, 0.09, "triangle", 0.1);
      tone(ac, 523, t + 0.07, 0.12, "triangle", 0.1);
      break;
    case "found":
      tone(ac, 660, t, 0.1, "square", 0.06);
      tone(ac, 880, t + 0.08, 0.1, "square", 0.06);
      tone(ac, 1320, t + 0.16, 0.18, "square", 0.06);
      break;
    case "fanfare":
      [523, 659, 784, 1047].forEach((f, i) => tone(ac, f, t + i * 0.12, 0.2, "triangle", 0.12));
      tone(ac, 1047, t + 0.5, 0.5, "triangle", 0.12);
      break;
  }
}
