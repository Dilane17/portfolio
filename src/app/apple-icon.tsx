import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#07191e",
          color: "#02f5a1",
          borderRadius: "40px",
          fontFamily: "sans-serif",
          fontWeight: 900,
          fontSize: "100px",
          letterSpacing: "-5px",
        }}
      >
        CD
      </div>
    ),
    { ...size }
  );
}
