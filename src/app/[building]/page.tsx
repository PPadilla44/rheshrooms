import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BuildingContent from "@/components/BuildingContent";
import Guide from "@/components/Guide";
import Shroom from "@/components/Shroom";
import { buildings, getBuilding } from "@/content/buildings";

export const dynamicParams = false;

export function generateStaticParams() {
  return buildings.map((b) => ({ building: b.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[building]">): Promise<Metadata> {
  const { building } = await params;
  const b = getBuilding(building);
  return b ? { title: `${b.name} · ${b.subtitle}` } : {};
}

export default async function BuildingPage({ params }: PageProps<"/[building]">) {
  const { building } = await params;
  const b = getBuilding(building);
  if (!b) notFound();

  const i = buildings.indexOf(b);
  const prev = buildings[(i - 1 + buildings.length) % buildings.length];
  const next = buildings[(i + 1) % buildings.length];

  return (
    <div className="flex flex-col gap-5">
      <Guide text={b.guide} />

      <article className="panel p-3 sm:p-4">
        <div className="panel-inner p-4 sm:p-6">
          <header className="flex items-center gap-3 mb-5">
            <Shroom cap={b.cap} className="h-12 w-12 shrink-0" />
            <div>
              <h1 className="text-2xl sm:text-4xl font-bold leading-tight">{b.name}</h1>
              <p className="text-ink-soft font-semibold">{b.subtitle}</p>
            </div>
          </header>
          <BuildingContent slug={b.slug} />
        </div>
      </article>

      <nav aria-label="Next and previous buildings" className="flex flex-wrap justify-between gap-3">
        <Link href={`/${prev.slug}`} className="btn-glossy btn-wood text-sm">
          ← {prev.name}
        </Link>
        <Link href="/" className="btn-glossy btn-wood text-sm">
          Back to Town Square
        </Link>
        <Link href={`/${next.slug}`} className="btn-glossy btn-wood text-sm">
          {next.name} →
        </Link>
      </nav>
    </div>
  );
}
