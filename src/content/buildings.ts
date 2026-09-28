// The village: each building is one route and one part of the resume.

export type BuildingSlug =
  | "cottage"
  | "clinic"
  | "academy"
  | "certificates"
  | "garden"
  | "post-office";

export type Building = {
  slug: BuildingSlug;
  name: string;
  subtitle: string;
  guide: string; // what Chanty says when you arrive
  cap: string; // mushroom cap color for the map roof
  x: number; // map position (percent)
  y: number;
};

export const buildings: Building[] = [
  {
    slug: "cottage",
    name: "Rhe's Cottage",
    subtitle: "About me",
    guide: "Welcome to Rhe's Cottage! Kick off your boots and meet the shroom who lives here.",
    cap: "#e2513c",
    x: 20,
    y: 30,
  },
  {
    slug: "clinic",
    name: "Sporewell Clinic",
    subtitle: "Work experience",
    guide: "This is Sporewell Clinic, where Rhe keeps every patient comfy and every tube labeled.",
    cap: "#5a9bd5",
    x: 50,
    y: 22,
  },
  {
    slug: "academy",
    name: "Spore Academy",
    subtitle: "Education",
    guide: "Spore Academy! Business degree, phlebotomy program, and nursing school up next.",
    cap: "#8a6bc4",
    x: 80,
    y: 30,
  },
  {
    slug: "certificates",
    name: "Certificate Hall",
    subtitle: "Certifications",
    guide: "Certificate Hall, where the shiny frames live. Every one of these is earned!",
    cap: "#e0a526",
    x: 22,
    y: 70,
  },
  {
    slug: "garden",
    name: "Skill Garden",
    subtitle: "Skills",
    guide: "The Skill Garden! Clinical, systems, admin and people skills, all growing nicely.",
    cap: "#5fa05a",
    x: 50,
    y: 78,
  },
  {
    slug: "post-office",
    name: "Post Office",
    subtitle: "Contact",
    guide: "Want to send Rhe a note? Drop it in the mailbox here.",
    cap: "#d9738f",
    x: 78,
    y: 70,
  },
];

export const guideName = "Chanty";

export function getBuilding(slug: string): Building | undefined {
  return buildings.find((b) => b.slug === slug);
}
