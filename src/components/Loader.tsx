import Shroom from "@/components/Shroom";

// Sub-second "sprouting mushroom" splash on first load. Pure CSS: it fades
// itself out, never blocks clicks, and lives in the root layout so it only
// plays once per visit (client navigations keep the layout mounted).
export default function Loader() {
  return (
    <div
      aria-hidden
      className="loader no-print pointer-events-none fixed inset-0 z-[60] flex flex-col items-center justify-center gap-3 bg-sky"
    >
      <div className="sprout">
        <Shroom className="h-24 w-24" />
      </div>
      <p className="font-display font-semibold text-xl text-wood-dark">Sprouting the village…</p>
    </div>
  );
}
