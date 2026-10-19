import { ImageResponse } from "next/og";

type OgImageProps = {
  eyebrow: string;
  title: string;
};

// Image de partage 1200x630 aux couleurs du site (onyx / vert).
export function renderOgImage({ eyebrow, title }: OgImageProps) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#07191e",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#02f5a1",
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 70 ? 56 : 68,
            fontWeight: 700,
            lineHeight: 1.12,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 30,
            color: "#9fb3b8",
          }}
        >
          <span>Clovis Ahouandjinou</span>
          <span>dylan-dev.me</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
