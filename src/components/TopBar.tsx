"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { buildings } from "@/content/buildings";
import Shroom from "@/components/Shroom";

export default function TopBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  const close = () => setOpen(false);

  // Close the map menu when clicking elsewhere or pressing Escape
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="no-print w-full max-w-5xl mx-auto px-4 pt-4 pb-3">
      <nav
        aria-label="Main"
        className="panel flex items-center justify-between gap-2 px-3 py-2 sm:px-4"
      >
        <Link href="/" className="flex items-center gap-2 font-display font-semibold text-lg sm:text-xl">
          <Shroom className="h-8 w-8 shrink-0" />
          <span className="sm:hidden">Rheshrooms</span>
          <span className="hidden sm:inline">Rheshroom Village</span>
        </Link>

        <div className="flex items-center gap-2">
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              className="btn-glossy btn-wood text-sm"
              aria-expanded={open}
              aria-controls="map-menu"
              onClick={() => setOpen((v) => !v)}
            >
              Map <span aria-hidden>▾</span>
            </button>
            {open && (
              <ul
                id="map-menu"
                className="panel absolute right-0 mt-3 w-60 p-2 z-40 flex flex-col gap-1"
              >
                <li>
                  <Link href="/" onClick={close} className="block rounded-xl px-3 py-2 hover:bg-cream-deep font-semibold">
                    Town Square
                  </Link>
                </li>
                {buildings.map((b) => (
                  <li key={b.slug}>
                    <Link
                      href={`/${b.slug}`}
                      onClick={close}
                      aria-current={pathname === `/${b.slug}` ? "page" : undefined}
                      className="flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-cream-deep"
                    >
                      <span
                        aria-hidden
                        className="h-3 w-3 rounded-full border-2 border-wood-dark"
                        style={{ background: b.cap }}
                      />
                      <span>
                        <span className="font-semibold">{b.name}</span>
                        <span className="block text-xs text-ink-soft">{b.subtitle}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Link href="/resume" className="btn-glossy btn-moss text-sm whitespace-nowrap">
            Quick view
          </Link>
        </div>
      </nav>
    </header>
  );
}
