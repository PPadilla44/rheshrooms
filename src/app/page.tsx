import Link from "next/link";
import Guide from "@/components/Guide";
import VillageMap from "@/components/VillageMap";
import { buildings } from "@/content/buildings";
import { profile } from "@/content/resume";

export default function TownSquare() {
  return (
    <div className="flex flex-col gap-6">
      <section className="text-center pt-2">
        <h1 className="text-3xl sm:text-5xl font-bold text-wood-dark drop-shadow-[0_2px_0_#fff7e8]">
          Welcome to Rheshroom Village!
        </h1>
        <p className="mt-2 text-base sm:text-lg text-ink">
          Home of <strong>{profile.name}</strong>, {profile.title}. {profile.nextUp}.
        </p>
      </section>

      <Guide text="Hi there! I'm Chanty. Tap any mushroom house to look around, or hit Quick view if you just need Rhe's resume. Psst: 7 little mushrooms are hiding around the village. Can you find them all?" />

      <VillageMap buildings={buildings} />

      {/* Plain list of places: handy on small screens and for screen readers */}
      <nav aria-label="Village places" className="panel p-4">
        <h2 className="text-xl font-semibold mb-3">Places to visit</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {buildings.map((b) => (
            <li key={b.slug}>
              <Link
                href={`/${b.slug}`}
                className="flex items-center gap-3 rounded-2xl border-2 border-wood-dark/30 bg-white/60 px-3 py-2 hover:bg-white"
              >
                <span
                  aria-hidden
                  className="h-4 w-4 rounded-full border-2 border-wood-dark shrink-0"
                  style={{ background: b.cap }}
                />
                <span>
                  <span className="font-display font-semibold">{b.name}</span>
                  <span className="text-ink-soft"> · {b.subtitle}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
