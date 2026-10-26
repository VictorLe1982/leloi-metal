# Image drop folder

Place files here using the **exact filename** in the table below.
The site picks them up on the next build — no code change needed.

- Format: **.webp** (convert from JPG/PNG first)
- Supply at the stated pixel size **or larger**, never smaller
- Keep each file under **~400 KB** after conversion

| Filename | Minimum size | Aspect | What it must show |
|---|---|---|---|
| `og-default.webp` | 1200 × 630 | 1.91:1 | Optional. Only needed if you want a photographic social share card instead of the auto-generated branded one. Leave empty to keep the generated card. |

---

Spec: `apps/web/src/data/media-manifest.ts`
Check what is still missing: `npx tsx scripts/check-media.ts`
