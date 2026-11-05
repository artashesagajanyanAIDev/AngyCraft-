import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "ЭнджиКрафт — handmade gypsum decor & masterclasses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          background:
            "radial-gradient(60% 60% at 12% 8%, #f4dde3 0%, transparent 60%), radial-gradient(55% 60% at 92% 100%, #e8a4ad 0%, transparent 55%), linear-gradient(135deg, #fdf6f2 0%, #f7e9e4 100%)",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Decorative dots */}
        <div
          style={{
            position: "absolute",
            top: 56,
            right: 64,
            display: "flex",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 9999,
              background: "#c97d8b",
              opacity: 0.35,
            }}
          />
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 9999,
              background: "#c97d8b",
              opacity: 0.6,
            }}
          />
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 9999,
              background: "#c97d8b",
              opacity: 0.85,
            }}
          />
        </div>

        {/* Top — brand chip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 9999,
              background: "#c97d8b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            A
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: 6,
              color: "#3a2b30",
            }}
          >
            ANGICRAFT
          </div>
        </div>

        {/* Middle — headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            maxWidth: 900,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#2a1e22",
            }}
          >
            <div style={{ display: "flex" }}>Handmade gypsum</div>
            <div style={{ display: "flex", fontStyle: "italic", color: "#c97d8b" }}>
              craft &amp; masterclasses
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#6b5560",
              maxWidth: 760,
            }}
          >
            Candles, decor, figurines &amp; gift sets — made with love in soft
            rose &amp; ivory tones.
          </div>
        </div>

        {/* Bottom — footer row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid rgba(201,125,139,0.25)",
            paddingTop: 28,
            fontSize: 26,
            color: "#6b5560",
          }}
        >
          <div style={{ display: "flex" }}>AngyKraft.ru</div>
          <div style={{ display: "flex" }}>Masterclasses · Catalog · Gifts</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
