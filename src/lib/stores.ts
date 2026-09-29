"use client";

import { useSyncExternalStore } from "react";

// Tiny localStorage-backed stores shared across the app.
// Each store notifies subscribers in this tab via a custom event,
// and other tabs via the native "storage" event.

function createStore<T>(key: string, fallback: T) {
  const event = `store:${key}`;
  let cache: { raw: string | null; value: T } | null = null;

  const read = (): T => {
    let raw: string | null = null;
    try {
      raw = window.localStorage.getItem(key);
    } catch {
      raw = null;
    }
    if (cache && cache.raw === raw) return cache.value;
    let value = fallback;
    try {
      value = raw === null ? fallback : (JSON.parse(raw) as T);
    } catch {
      value = fallback;
    }
    cache = { raw, value };
    return value;
  };

  const write = (value: T) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // storage blocked (private mode etc.); keep it in memory for this page
      cache = { raw: JSON.stringify(value), value };
    }
    window.dispatchEvent(new Event(event));
  };

  const subscribe = (cb: () => void) => {
    const onStorage = (e: StorageEvent) => e.key === key && cb();
    window.addEventListener(event, cb);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener(event, cb);
      window.removeEventListener("storage", onStorage);
    };
  };

  const useValue = () => useSyncExternalStore(subscribe, read, () => fallback);

  return { read, write, useValue };
}

// --- Mushroom hunt -------------------------------------------------------

export const HUNT_SPOTS = [
  "town-square",
  "cottage",
  "clinic",
  "academy",
  "certificates",
  "garden",
  "post-office",
] as const;

export type HuntSpot = (typeof HUNT_SPOTS)[number];

const EMPTY: string[] = [];
export const huntStore = createStore<string[]>("rheshrooms:hunt", EMPTY);

export function markFound(spot: HuntSpot) {
  const found = huntStore.read();
  if (!found.includes(spot)) huntStore.write([...found, spot]);
}

export function resetHunt() {
  huntStore.write([]);
}

export const celebratedStore = createStore<boolean>("rheshrooms:hunt-celebrated", false);

// --- Sound ---------------------------------------------------------------

export const soundStore = createStore<boolean>("rheshrooms:sound", false);
