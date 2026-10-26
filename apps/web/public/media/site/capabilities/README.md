# Image drop folder

Place files here using the **exact filename** in the table below.
The site picks them up on the next build — no code change needed.

- Format: **.webp** (convert from JPG/PNG first)
- Supply at the stated pixel size **or larger**, never smaller
- Keep each file under **~400 KB** after conversion

| Filename | Minimum size | Aspect | What it must show |
|---|---|---|---|
| `aluminium-extrusion.webp` | 1600 × 1067 | 3:2 | The press in operation, or profile emerging onto the run-out table. |
| `cnc-machining.webp` | 1600 × 1067 | 3:2 | A CNC centre mid-cut on an aluminium profile, with swarf and coolant visible. |
| `anodizing.webp` | 1600 × 1067 | 3:2 | Anodizing line — profiles on jigs entering or leaving a tank. |
| `powder-coating.webp` | 1600 × 1067 | 3:2 | Powder coating line — profiles entering the curing oven, or a colour rack showing the RAL range. |
| `precision-cutting.webp` | 1600 × 1067 | 3:2 | Mitre saw cutting a profile, or cut components kitted and labelled for despatch. |
| `quality-control.webp` | 1600 × 1067 | 3:2 | QC bench — optical projector, spectrometer or hardness tester in use on a profile sample. |

---

Spec: `apps/web/src/data/media-manifest.ts`
Check what is still missing: `npx tsx scripts/check-media.ts`
