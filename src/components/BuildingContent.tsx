import Link from "next/link";
import { certifications, education, jobs, profile, skills } from "@/content/resume";
import type { BuildingSlug } from "@/content/buildings";

function Cottage() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg leading-relaxed">{profile.summary}</p>
      <p className="rounded-2xl bg-moss/15 border-2 border-moss-dark/40 px-4 py-3 font-semibold">
        🌱 {profile.nextUp}.
      </p>
      <p className="text-ink-soft">Based in {profile.location}.</p>
    </div>
  );
}

function Clinic() {
  return (
    <ol className="flex flex-col gap-5">
      {jobs.map((j) => (
        <li key={`${j.org}-${j.title}`} className="rounded-2xl bg-white/70 border-2 border-wood-dark/25 p-4">
          <h3 className="text-xl font-semibold">{j.title}</h3>
          <p className="text-ink-soft">
            {j.org} · {j.location}
          </p>
          <p className="text-sm font-semibold text-toadstool-dark mt-1">
            {j.start} to {j.end}
          </p>
          <ul className="mt-3 list-disc pl-5 flex flex-col gap-1.5">
            {j.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

function Academy() {
  return (
    <ul className="flex flex-col gap-4">
      <li className="rounded-2xl bg-moss/15 border-2 border-dashed border-moss-dark/60 p-4">
        <h3 className="text-xl font-semibold">Nursing school</h3>
        <p className="text-ink-soft">Coming up next · starts January 2027</p>
      </li>
      {education.map((e) => (
        <li key={e.credential} className="rounded-2xl bg-white/70 border-2 border-wood-dark/25 p-4">
          <h3 className="text-xl font-semibold">{e.credential}</h3>
          <p className="text-ink-soft">
            {e.school} · {e.location}
          </p>
          <p className="text-sm font-semibold text-toadstool-dark mt-1">{e.date}</p>
        </li>
      ))}
    </ul>
  );
}

function Certificates() {
  return (
    <ul className="grid gap-4 sm:grid-cols-3">
      {certifications.map((c) => (
        <li
          key={c.name}
          className="rounded-xl p-2 bg-gradient-to-b from-[#e7b95a] to-[#b98524] shadow-[0_4px_0_#5e3a24]"
        >
          <div className="h-full rounded-lg bg-cream border-2 border-[#8a6420] p-4 text-center flex flex-col items-center gap-2">
            <span aria-hidden className="text-3xl">🏅</span>
            <h3 className="font-semibold leading-snug">{c.name}</h3>
            <p className="text-sm text-ink-soft">{c.issuer}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

const beds: { label: string; items: string[]; color: string }[] = [
  { label: "Clinical", items: skills.clinical, color: "#e2513c" },
  { label: "Systems", items: skills.systems, color: "#5a9bd5" },
  { label: "Admin", items: skills.admin, color: "#e0a526" },
  { label: "People", items: skills.people, color: "#d9738f" },
];

function Garden() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {beds.map((bed) => (
        <section key={bed.label} className="rounded-2xl bg-[#e9d3a8] border-2 border-wood-dark/40 p-4">
          <h3 className="text-lg font-semibold mb-2">{bed.label}</h3>
          <ul className="flex flex-wrap gap-2">
            {bed.items.map((s) => (
              <li
                key={s}
                className="rounded-full bg-white border-2 px-3 py-1 text-sm font-semibold"
                style={{ borderColor: bed.color }}
              >
                {s}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function PostOffice() {
  return (
    <div className="flex flex-col items-start gap-4">
      <p className="text-lg">
        The best way to reach Rhe is by email. She reads every letter that lands in the mailbox.
      </p>
      <a href={`mailto:${profile.email}`} className="btn-glossy text-lg">
        ✉️ {profile.email}
      </a>
      <Link href="/resume" className="btn-glossy btn-moss">
        View or print the resume
      </Link>
    </div>
  );
}

export default function BuildingContent({ slug }: { slug: BuildingSlug }) {
  switch (slug) {
    case "cottage":
      return <Cottage />;
    case "clinic":
      return <Clinic />;
    case "academy":
      return <Academy />;
    case "certificates":
      return <Certificates />;
    case "garden":
      return <Garden />;
    case "post-office":
      return <PostOffice />;
  }
}
