import Link from "next/link";
import type { Building } from "@/content/buildings";

// Mushroom house: cap roof in the building's color, door and window.
function House({ cap }: { cap: string }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-auto drop-shadow-[0_4px_0_#5e3a2455]" aria-hidden>
      <path
        d="M24 50v36c0 4 3 6 7 6h38c4 0 7-2 7-6V50z"
        fill="#fff3d6"
        stroke="#5e3a24"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path d="M42 92V72c0-5 3-8 8-8s8 3 8 8v20z" fill="#8a5a3b" stroke="#5e3a24" strokeWidth="3" />
      <circle cx="54" cy="79" r="1.8" fill="#e0a526" />
      <circle cx="33" cy="64" r="6" fill="#a9d8f5" stroke="#5e3a24" strokeWidth="3" />
      <circle cx="67" cy="64" r="6" fill="#a9d8f5" stroke="#5e3a24" strokeWidth="3" />
      <path
        d="M6 50C6 26 26 8 50 8s44 18 44 42c0 4-3 6-7 6H13c-4 0-7-2-7-6z"
        fill={cap}
        stroke="#5e3a24"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path d="M18 34c5-10 14-17 24-19" fill="none" stroke="#ffffff99" strokeWidth="4" strokeLinecap="round" />
      <circle cx="32" cy="36" r="6" fill="#fff" />
      <circle cx="56" cy="22" r="4.5" fill="#fff" />
      <circle cx="72" cy="40" r="6.5" fill="#fff" />
      <circle cx="50" cy="44" r="3.5" fill="#fff" />
    </svg>
  );
}

// Decorative ground: grass, winding paths, pond and trees. Purely visual.
function Ground() {
  return (
    <svg
      viewBox="0 0 1000 600"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      <rect width="1000" height="600" fill="#9fd37f" />
      <path d="M0 0h1000v110C820 150 640 90 500 120S160 150 0 100z" fill="#b6e08f" />
      <g fill="none" stroke="#e8cf9c" strokeWidth="34" strokeLinecap="round" strokeLinejoin="round">
        <path d="M200 200C320 260 400 300 500 300" />
        <path d="M500 150V300" />
        <path d="M800 200C680 260 600 300 500 300" />
        <path d="M220 440C330 360 420 320 500 300" />
        <path d="M500 480V300" />
        <path d="M780 440C670 360 580 320 500 300" />
      </g>
      <g fill="none" stroke="#d6b97e" strokeWidth="3" strokeDasharray="2 14" strokeLinecap="round">
        <path d="M200 200C320 260 400 300 500 300" />
        <path d="M800 200C680 260 600 300 500 300" />
        <path d="M220 440C330 360 420 320 500 300" />
        <path d="M780 440C670 360 580 320 500 300" />
      </g>
      {/* town square fountain */}
      <circle cx="500" cy="300" r="58" fill="#e8cf9c" />
      <circle cx="500" cy="300" r="34" fill="#6fb7e6" stroke="#5e3a24" strokeWidth="5" />
      <circle cx="500" cy="300" r="10" fill="#fff" opacity="0.7" />
      {/* pond */}
      <ellipse cx="900" cy="540" rx="90" ry="40" fill="#6fb7e6" stroke="#4d93c4" strokeWidth="4" />
      {/* trees */}
      <g stroke="#3f7a3b" strokeWidth="4">
        <circle cx="70" cy="300" r="38" fill="#5fa05a" />
        <circle cx="110" cy="330" r="30" fill="#6fb069" />
        <circle cx="940" cy="300" r="36" fill="#5fa05a" />
        <circle cx="360" cy="560" r="30" fill="#6fb069" />
        <circle cx="650" cy="560" r="34" fill="#5fa05a" />
        <circle cx="330" cy="70" r="28" fill="#6fb069" />
        <circle cx="680" cy="64" r="30" fill="#5fa05a" />
      </g>
      {/* flowers */}
      <g fill="#fff">
        <circle cx="150" cy="520" r="6" />
        <circle cx="170" cy="540" r="6" />
        <circle cx="850" cy="120" r="6" />
        <circle cx="400" cy="200" r="5" />
        <circle cx="610" cy="420" r="5" />
      </g>
      <g fill="#f2a93b">
        <circle cx="150" cy="520" r="2.5" />
        <circle cx="170" cy="540" r="2.5" />
        <circle cx="850" cy="120" r="2.5" />
      </g>
    </svg>
  );
}

export default function VillageMap({ buildings }: { buildings: Building[] }) {
  return (
    <div className="panel overflow-hidden p-0">
      <div className="relative w-full aspect-square sm:aspect-[5/3]">
        <Ground />
        <span className="hidden sm:block absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[70%] font-display font-semibold text-[10px] sm:text-sm bg-cream/90 border-2 border-wood-dark rounded-full px-2 sm:px-3 py-0.5">
          Town Square
        </span>
        <ul>
          {buildings.map((b) => (
            <li
              key={b.slug}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-[21%] sm:w-[17%]"
              style={{ left: `${b.x}%`, top: `${b.y}%` }}
            >
              <Link href={`/${b.slug}`} className="building group block text-center">
                <House cap={b.cap} />
                <span className="mt-1 inline-block whitespace-nowrap font-display font-semibold leading-tight text-[10px] sm:text-sm bg-cream border-2 border-wood-dark rounded-full px-2 py-0.5 shadow-[0_2px_0_#5e3a24] group-hover:bg-white">
                  {b.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
