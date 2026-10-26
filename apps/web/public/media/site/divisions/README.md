# Image drop folder

Place files here using the **exact filename** in the table below.
The site picks them up on the next build — no code change needed.

- Format: **.webp** (convert from JPG/PNG first)
- Supply at the stated pixel size **or larger**, never smaller
- Keep each file under **~400 KB** after conversion

| Filename | Minimum size | Aspect | What it must show |
|---|---|---|---|
| `custom-extrusions.webp` | 1200 × 900 | 4:3 | Assorted custom profile sections — solid, hollow and complex multi-void — arranged to show geometry variety. Mill finish is fine and preferred here. |
| `architectural.webp` | 1200 × 900 | 4:3 | A completed building elevation using aluminium systems: curtain wall, windows or louvres. A real project is far stronger than a render. |
| `industrial-profiles.webp` | 1200 × 900 | 4:3 | T-slot framing assembled into a machine frame or workstation, showing the slot geometry and connectors clearly. |
| `solar.webp` | 1200 × 900 | 4:3 | Solar module frames or mounting rails — either stacked as finished goods, or installed on an array. Anodized finish reads best. |
| `thermal-management.webp` | 1200 × 900 | 4:3 | Heat sink extrusions end-on so the fin density is visible. Black anodized sections photograph best against a light background. |
| `oem-components.webp` | 1200 × 900 | 4:3 | Machined and finished OEM parts, kitted or laid out — showing drilled holes, tapped threads and cut ends. Conveys "ready to assemble". |

---

Spec: `apps/web/src/data/media-manifest.ts`
Check what is still missing: `npx tsx scripts/check-media.ts`
