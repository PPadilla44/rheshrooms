# Rheshroom Village

Rheanna Medina's portfolio at [rheshrooms.com](https://rheshrooms.com): a cozy mushroom village inspired by 2000s virtual worlds, with a plain one-page resume one click away.

## Editing content

All resume text lives in `src/content/resume.ts`. Building names, guide lines, colors and map positions live in `src/content/buildings.ts`. No component changes needed for content updates.

## Routes

| Route | Building |
| --- | --- |
| `/` | Town Square (village map) |
| `/cottage` | Rhe's Cottage: about |
| `/clinic` | Sporewell Clinic: experience |
| `/academy` | Spore Academy: education |
| `/certificates` | Certificate Hall |
| `/garden` | Skill Garden: skills |
| `/post-office` | Post Office: contact |
| `/resume` | Quick view, printable |

## Develop

```bash
npm install
npm run dev
```

Fonts (Fredoka, Nunito) are self-hosted via Fontsource packages. Deployed on Vercel.
