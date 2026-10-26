# Image drop folder

Place files here using the **exact filename** in the table below.
The site picks them up on the next build — no code change needed.

- Format: **.webp** (convert from JPG/PNG first)
- Supply at the stated pixel size **or larger**, never smaller
- Keep each file under **~400 KB** after conversion

| Filename | Minimum size | Aspect | What it must show |
|---|---|---|---|
| `plant-exterior.webp` | 2000 × 1125 | 16:9 | The Hung Yen plant from outside, showing scale. Daylight, clean frame. |
| `plant-floor.webp` | 2000 × 1125 | 16:9 | Production floor overview — presses and handling equipment in one frame. |
| `export-packing.webp` | 2000 × 1125 | 16:9 | Export packing: profiles interleaved and strapped on fumigated pallets, or loading a container. Strong trust signal for overseas buyers. |

---

Spec: `apps/web/src/data/media-manifest.ts`
Check what is still missing: `npx tsx scripts/check-media.ts`
