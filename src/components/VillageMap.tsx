import Link from "next/link";
import type { Building } from "@/content/buildings";
import HiddenShroom from "@/components/HiddenShroom";

// Mushroom house: cap roof in the building's color, door and windows.
function House({ cap }: { cap: string }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-auto drop-shadow-[0_4px_0_#5e3a2455]" aria-hidden>
      <ellipse cx="50" cy="94" rx="34" ry="5" fill="#3f7a3b" opacity="0.25" />
      <path
        d="M24 50v36c0 4 3 6 7 6h38c4 0 7-2 7-6V50z"
        fill="#fff3d6"
        stroke="#5e3a24"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path d="M42 92V72c0-5 3-8 8-8s8 3 8 8v20z" fill="#8a5a3b" stroke="#5e3a24" strokeWidth="3" />
      <circle cx="54" cy="79" r="1.8" fill="#e0a526" />
      <circle cx="33" cy="64" r="6" fill="#ffe9a8" stroke="#5e3a24" strokeWidth="3" />
      <circle cx="67" cy="64" r="6" fill="#ffe9a8" stroke="#5e3a24" strokeWidth="3" />
      <path d="M33 58v12M27 64h12M67 58v12M61 64h12" stroke="#5e3a24" strokeWidth="1.5" />
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

type Pt = { x: number; y: number }; // percent of width / height

const trees: Pt[] = [
  { x: 6, y: 52 },
  { x: 10, y: 60 },
  { x: 94, y: 50 },
  { x: 35, y: 94 },
  { x: 66, y: 95 },
  { x: 34, y: 14 },
  { x: 67, y: 12 },
  { x: 4, y: 90 },
];

const flowers: Pt[] = [
  { x: 14, y: 86 },
  { x: 17, y: 89 },
  { x: 86, y: 18 },
  { x: 40, y: 34 },
  { x: 62, y: 70 },
  { x: 58, y: 36 },
  { x: 30, y: 52 },
  { x: 72, y: 52 },
];

const tinyShrooms: Pt[] = [
  { x: 8, y: 76 },
  { x: 92, y: 30 },
  { x: 44, y: 60 },
  { x: 57, y: 8 },
];

function Tree({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <ellipse cx={x} cy={y + 30} rx="30" ry="7" fill="#3f7a3b" opacity="0.25" />
      <rect x={x - 6} y={y + 6} width="12" height="24" rx="4" fill="#8a5a3b" stroke="#5e3a24" strokeWidth="3" />
      <circle cx={x} cy={y - 8} r="28" fill="#5fa05a" stroke="#3f7a3b" strokeWidth="4" />
      <circle cx={x - 16} cy={y + 4} r="18" fill="#6fb069" stroke="#3f7a3b" strokeWidth="4" />
      <circle cx={x + 16} cy={y + 4} r="18" fill="#6fb069" stroke="#3f7a3b" strokeWidth="4" />
      <circle cx={x - 8} cy={y - 18} r="7" fill="#ffffff33" />
    </g>
  );
}

function Flower({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <circle cx={x - 5} cy={y} r="4.5" fill="#fff" />
      <circle cx={x + 5} cy={y} r="4.5" fill="#fff" />
      <circle cx={x} cy={y - 5} r="4.5" fill="#fff" />
      <circle cx={x} cy={y + 5} r="4.5" fill="#fff" />
      <circle cx={x} cy={y} r="3.5" fill="#f2a93b" />
    </g>
  );
}

function TinyShroom({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <rect x={x - 3} y={y - 2} width="6" height="10" rx="2" fill="#fff3d6" stroke="#5e3a24" strokeWidth="2" />
      <path d={`M${x - 11} ${y}c0-8 5-12 11-12s11 4 11 12z`} fill="#e2513c" stroke="#5e3a24" strokeWidth="2" />
      <circle cx={x - 3} cy={y - 6} r="1.8" fill="#fff" />
      <circle cx={x + 4} cy={y - 4} r="1.5" fill="#fff" />
    </g>
  );
}

function Cloud({ x, y, s, cls }: { x: number; y: number; s: number; cls: string }) {
  return (
    <g className={cls}>
      <g transform={`translate(${x} ${y}) scale(${s})`} fill="#fff" opacity="0.9">
        <ellipse cx="0" cy="0" rx="40" ry="16" />
        <circle cx="-14" cy="-10" r="16" />
        <circle cx="12" cy="-14" r="20" />
      </g>
    </g>
  );
}

// Ground drawn at the map's real aspect ratio, so nothing is stretched.
// Paths are computed from the building positions, so they always line up.
function Ground({ w, h, buildings }: { w: number; h: number; buildings: Building[] }) {
  const P = (p: Pt) => ({ x: (p.x / 100) * w, y: (p.y / 100) * h });
  const c = { x: w / 2, y: h / 2 };
  const paths = buildings.map((b) => {
    const t = P(b);
    const door = { x: t.x, y: t.y + h * 0.1 };
    const ctrl = { x: (c.x + door.x) / 2, y: Math.max(c.y, door.y) - (door.y < c.y ? 0 : 20) };
    return { key: b.slug, d: `M${c.x} ${c.y}Q${ctrl.x} ${ctrl.y} ${door.x} ${door.y}` };
  });
  const pond = P({ x: 90, y: 90 });

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="absolute inset-0 h-full w-full" aria-hidden>
      <defs>
        <radialGradient id={`grass-${h}`} cx="50%" cy="55%" r="70%">
          <stop offset="0%" stopColor="#b2e08d" />
          <stop offset="100%" stopColor="#8cc86c" />
        </radialGradient>
      </defs>
      <rect width={w} height={h} fill={`url(#grass-${h})`} />
      {/* sky strip with drifting clouds */}
      <path d={`M0 0h${w}v${h * 0.13}C${w * 0.8} ${h * 0.17} ${w * 0.6} ${h * 0.11} ${w / 2} ${h * 0.14}S${w * 0.15} ${h * 0.17} 0 ${h * 0.12}z`} fill="#cdeaf9" />
      <Cloud x={w * 0.14} y={h * 0.07} s={1} cls="cloud cloud-a" />
      <Cloud x={w * 0.8} y={h * 0.05} s={0.8} cls="cloud cloud-b" />

      {/* dirt paths */}
      <g fill="none" stroke="#e8cf9c" strokeWidth="34" strokeLinecap="round">
        {paths.map((p) => (
          <path key={p.key} d={p.d} />
        ))}
      </g>
      <g fill="none" stroke="#d6b97e" strokeWidth="3" strokeDasharray="2 14" strokeLinecap="round">
        {paths.map((p) => (
          <path key={p.key} d={p.d} />
        ))}
      </g>

      {/* town square + fountain */}
      <circle cx={c.x} cy={c.y} r="70" fill="#e8cf9c" />
      <circle cx={c.x} cy={c.y} r="70" fill="none" stroke="#d6b97e" strokeWidth="4" strokeDasharray="10 8" />
      <circle cx={c.x} cy={c.y} r="40" fill="#c9b28a" stroke="#5e3a24" strokeWidth="5" />
      <circle cx={c.x} cy={c.y} r="30" fill="#6fb7e6" />
      <circle className="ripple" cx={c.x} cy={c.y} r="12" fill="none" stroke="#fff" strokeWidth="3" />
      <rect x={c.x - 5} y={c.y - 22} width="10" height="22" rx="4" fill="#c9b28a" stroke="#5e3a24" strokeWidth="3" />
      <circle cx={c.x} cy={c.y - 26} r="7" fill="#a9d8f5" stroke="#5e3a24" strokeWidth="3" />

      {/* pond */}
      <ellipse cx={pond.x} cy={pond.y} rx="90" ry="38" fill="#6fb7e6" stroke="#4d93c4" strokeWidth="4" />
      <ellipse cx={pond.x - 30} cy={pond.y - 8} rx="16" ry="5" fill="#ffffff66" />
      <ellipse cx={pond.x + 30} cy={pond.y + 6} rx="12" ry="7" fill="#5fa05a" stroke="#3f7a3b" strokeWidth="2" />

      {flowers.map((f, i) => {
        const p = P(f);
        return <Flower key={i} x={p.x} y={p.y} />;
      })}
      {tinyShrooms.map((f, i) => {
        const p = P(f);
        return <TinyShroom key={i} x={p.x} y={p.y} />;
      })}
      {trees.map((t, i) => {
        const p = P(t);
        return <Tree key={i} x={p.x} y={p.y} />;
      })}
    </svg>
  );
}

export default function VillageMap({ buildings }: { buildings: Building[] }) {
  return (
    <div className="panel overflow-hidden p-0">
      <div className="relative w-full aspect-square sm:aspect-[5/3]">
        <div className="sm:hidden">
          <Ground w={1000} h={1000} buildings={buildings} />
        </div>
        <div className="hidden sm:block">
          <Ground w={1000} h={600} buildings={buildings} />
        </div>
        <span className="hidden sm:block absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[95%] font-display font-semibold text-sm bg-cream/90 border-2 border-wood-dark rounded-full px-3 py-0.5">
          Town Square
        </span>
        <HiddenShroom spot="town-square" cap="#f2a93b" className="absolute left-[13%] top-[50%]" />
        <ul>
          {buildings.map((b) => (
            <li
              key={b.slug}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-[21%] sm:w-[16%]"
              style={{ left: `${b.x}%`, top: `${b.y}%` }}
            >
              <Link href={`/${b.slug}`} data-sfx="pop" className="building group block text-center">
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
