import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const alt = 'LELOI METAL — Precision Aluminium Extrusion & Fabrication, Vietnam';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * Default social preview card.
 *
 * Generated at build time so there is no binary asset to keep in sync with the
 * brand palette, and every route without its own card inherits this one.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #061D3B 0%, #0A2D5B 55%, #0D3870 100%)',
          padding: '72px 80px',
          fontFamily: 'sans-serif'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 64,
              height: 64,
              borderRadius: 16,
              background: '#2F7BFF',
              color: '#FFFFFF',
              fontSize: 34,
              fontWeight: 800,
              letterSpacing: -1
            }}
          >
            LL
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ color: '#FFFFFF', fontSize: 32, fontWeight: 700, letterSpacing: 4 }}>
              LELOI METAL
            </div>
            <div style={{ color: '#9AA3AF', fontSize: 18, letterSpacing: 1 }}>
              A Division of LELOI EXIM GLOBAL
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div
            style={{
              color: '#FFFFFF',
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: -1.5
            }}
          >
            Aluminium for a Better World
          </div>
          <div style={{ color: '#DCE6F3', fontSize: 28, lineHeight: 1.4, maxWidth: 900 }}>
            Precision aluminium extrusion, CNC machining and surface finishing from Vietnam for
            global B2B industries.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            borderTop: '1px solid rgba(255,255,255,0.15)',
            paddingTop: 28
          }}
        >
          {['6063 · 6061 · 6005A · 6082', 'Custom Die Tooling', 'CPTPP / EVFTA Origin'].map(
            (chip) => (
              <div
                key={chip}
                style={{
                  display: 'flex',
                  padding: '10px 20px',
                  borderRadius: 999,
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  color: '#DCE6F3',
                  fontSize: 20
                }}
              >
                {chip}
              </div>
            )
          )}
          <div style={{ display: 'flex', flexGrow: 1 }} />
          <div style={{ color: '#2F7BFF', fontSize: 24, fontWeight: 700 }}>leloimetal.com</div>
        </div>
      </div>
    ),
    size
  );
}
