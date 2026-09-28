import type { Metadata } from "next";
import PrintButton from "@/components/PrintButton";
import { certifications, education, jobs, profile, skills } from "@/content/resume";

export const metadata: Metadata = {
  title: "Resume",
  description: `${profile.name}, ${profile.title}. One-page resume.`,
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-bold uppercase tracking-widest text-toadstool-dark border-b-2 border-cream-deep pb-1 mb-3 mt-7 print:mt-4">
      {children}
    </h2>
  );
}

export default function Resume() {
  const allSkills = [...skills.clinical, ...skills.admin, ...skills.systems];

  return (
    <div className="flex flex-col gap-4">
      <div className="no-print flex flex-wrap items-center justify-between gap-3 pt-2">
        <p className="font-display font-semibold text-lg">Quick view: the whole resume on one page.</p>
        <PrintButton />
      </div>

      <article className="panel print-plain bg-white p-6 sm:p-10 font-sans text-[15px] leading-relaxed">
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold">{profile.name}</h1>
          <p className="text-lg font-semibold text-ink-soft">{profile.title}</p>
          <p className="mt-1">
            {profile.location} ·{" "}
            <a className="underline underline-offset-2" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </p>
        </header>

        <SectionTitle>Summary</SectionTitle>
        <p>{profile.summary}</p>

        <SectionTitle>Experience</SectionTitle>
        <div className="flex flex-col gap-5 print:gap-3">
          {jobs.map((j) => (
            <section key={`${j.org}-${j.title}`} className="break-inside-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-lg font-semibold">{j.title}</h3>
                <p className="text-sm font-semibold text-ink-soft">
                  {j.start} to {j.end}
                </p>
              </div>
              <p className="text-ink-soft">
                {j.org} · {j.location}
              </p>
              <ul className="mt-1.5 list-disc pl-5 flex flex-col gap-1">
                {j.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <SectionTitle>Education</SectionTitle>
        <ul className="flex flex-col gap-2">
          {education.map((e) => (
            <li key={e.credential} className="flex flex-wrap justify-between gap-x-4">
              <span>
                <strong>{e.credential}</strong>, {e.school}, {e.location}
              </span>
              <span className="text-sm font-semibold text-ink-soft">{e.date}</span>
            </li>
          ))}
        </ul>

        <SectionTitle>Certifications</SectionTitle>
        <ul className="list-disc pl-5 flex flex-col gap-1">
          {certifications.map((c) => (
            <li key={c.name}>
              <strong>{c.name}</strong>, {c.issuer}
            </li>
          ))}
        </ul>

        <SectionTitle>Skills</SectionTitle>
        <p>{allSkills.join(" · ")}</p>
        <p className="mt-2">
          <strong>Soft skills:</strong> {skills.people.join(" · ")}
        </p>
      </article>
    </div>
  );
}
