import { ImageResponse } from "next/og";
import { profile } from "@/content/resume";

export const alt = "Rheshroom Village, the portfolio of Rheanna Medina";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const caps = ["#e2513c", "#5a9bd5", "#8a6bc4", "#e0a526", "#5fa05a", "#d9738f"];

function Mushroom({ cap, px }: { cap: string; px: number }) {
  return (
    <svg width={px} height={px} viewBox="0 0 64 64">
      <path
        d="M24 36c0 10-2 18-2 20 0 3 4 4 10 4s10-1 10-4c0-2-2-10-2-20z"
        fill="#fff7e8"
        stroke="#5e3a24"
        strokeWidth="3"
      />
      <path
        d="M4 34C4 18 17 6 32 6s28 12 28 28c0 3-3 5-6 5H10c-3 0-6-2-6-5z"
        fill={cap}
        stroke="#5e3a24"
        strokeWidth="3"
      />
      <circle cx="22" cy="24" r="4" fill="#fff" />
      <circle cx="40" cy="16" r="3" fill="#fff" />
      <circle cx="46" cy="28" r="4.5" fill="#fff" />
    </svg>
  );
}

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #a9d8f5 0%, #cdeaf9 45%, #9fd37f 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#fff7e8",
            border: "8px solid #5e3a24",
            borderRadius: 48,
            boxShadow: "0 14px 0 #5e3a24",
            padding: "48px 72px",
          }}
        >
          <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
            {caps.map((c) => (
              <Mushroom key={c} cap={c} px={84} />
            ))}
          </div>
          <div style={{ fontSize: 76, fontWeight: 800, color: "#5e3a24" }}>Rheshroom Village</div>
          <div style={{ fontSize: 38, color: "#3b2a20", marginTop: 12 }}>
            {`${profile.name} · ${profile.title}`}
          </div>
          <div style={{ fontSize: 30, color: "#3f7a3b", marginTop: 10 }}>{profile.nextUp}</div>
        </div>
      </div>
    ),
    size,
  );
}
