import { guideName } from "@/content/buildings";

// Chanty the chanterelle: original guide character.
function Chanty({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 96" className={className} aria-hidden>
      {/* stem / body */}
      <path
        d="M26 44c-2 16-4 30-4 38 0 6 8 8 18 8s18-2 18-8c0-8-2-22-4-38z"
        fill="#fff3d6"
        stroke="#5e3a24"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* wavy chanterelle cap */}
      <path
        d="M6 42c0-4 4-6 6-10 4-10 14-22 28-22s24 12 28 22c2 4 6 6 6 10 0 4-4 6-8 5-4 3-8 1-12 3-4 3-10 3-14 1-4 2-10 2-14-1-4-2-8 0-12-3-4 1-8-1-8-5z"
        fill="#f2a93b"
        stroke="#5e3a24"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M18 28c4-8 10-12 18-14" fill="none" stroke="#ffffffaa" strokeWidth="3" strokeLinecap="round" />
      {/* face */}
      <circle cx="33" cy="62" r="3.5" fill="#3b2a20" />
      <circle cx="47" cy="62" r="3.5" fill="#3b2a20" />
      <circle cx="34.2" cy="60.8" r="1.1" fill="#fff" />
      <circle cx="48.2" cy="60.8" r="1.1" fill="#fff" />
      <ellipse cx="27" cy="69" rx="4" ry="2.5" fill="#f4a3a3" />
      <ellipse cx="53" cy="69" rx="4" ry="2.5" fill="#f4a3a3" />
      <path d="M35 70c3 4 7 4 10 0" fill="none" stroke="#3b2a20" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Guide({ text }: { text: string }) {
  return (
    <div className="flex items-end gap-4">
      <Chanty className="h-20 w-16 sm:h-24 sm:w-20 shrink-0" />
      <p className="bubble px-4 py-3 text-sm sm:text-base">
        <span className="font-display font-semibold text-toadstool-dark">{guideName}: </span>
        {text}
      </p>
    </div>
  );
}
