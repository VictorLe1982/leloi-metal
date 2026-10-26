# Image drop folder

Place files here using the **exact filename** in the table below.
The site picks them up on the next build — no code change needed.

- Format: **.webp** (convert from JPG/PNG first)
- Supply at the stated pixel size **or larger**, never smaller
- Keep each file under **~400 KB** after conversion

| Filename | Minimum size | Aspect | What it must show |
|---|---|---|---|
| `home-hero.webp` | 2400 × 1350 | 16:9 | The headline shot. A wide view of extruded aluminium profiles — ideally the run-out table with profiles emerging, or a dense stack of finished sections catching the light. Must read well when the left 55% is covered by dark overlay and white text. Avoid faces, avoid visible third-party branding, avoid cluttered backgrounds. |

---

Spec: `apps/web/src/data/media-manifest.ts`
Check what is still missing: `npx tsx scripts/check-media.ts`
