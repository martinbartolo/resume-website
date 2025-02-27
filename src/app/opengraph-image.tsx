import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Martin Bartolo";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom right, #000000, #1a1a1a)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <h1
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "white",
              marginBottom: 0,
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            Martin Bartolo
          </h1>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
