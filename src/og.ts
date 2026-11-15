import { readFile } from "node:fs/promises";
import { container, text } from "takumi-js/helpers";
import { ImageResponse, type ImageResponseOptions } from "takumi-js/response";
import ascii from "@/assets/ascii.txt?raw";
import { blue, logoImage } from "@/logo";

// Lighter blues for the backdrop mountain and the date, picked against `blue`.
const tint = "#3a78fd";
const pale = "#bedbff";

const [mountain = "", base = ""] = ascii.split("\n\n");

const options: ImageResponseOptions = {
  width: 1200,
  height: 630,
  format: "png",
  fonts: [
    {
      name: "Berkeley Mono",
      data: await readFile("src/assets/berkeley.ttf"),
      weight: 400,
    },
    {
      name: "Berkeley Mono",
      data: await readFile("public/fonts/berkeley-bold.woff2"),
      weight: 700,
    },
  ],
};

interface Props {
  title: string;
  date?: Date;
}

export function renderCard({ title, date }: Props) {
  const meta = date ? date.toISOString().slice(0, 10) : new URL(import.meta.env.SITE).host;

  // The mountain is painted first with a lower zIndex so the title sits on it.
  const backdrop = container({
    style: {
      position: "absolute",
      right: 40,
      bottom: 28,
      zIndex: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    children: [mountain, base].map((art) =>
      text(art, { whiteSpace: "pre", fontSize: 22, lineHeight: 1, color: tint }),
    ),
  });

  const content = container({
    style: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      padding: 72,
      zIndex: 1,
    },
    children: [
      container({
        style: { display: "flex", justifyContent: "space-between", alignItems: "center" },
        children: [logoImage("#ffffff", 64), text(meta, { fontSize: 26, color: pale })],
      }),
      text(title, {
        marginTop: "auto",
        maxWidth: 900,
        fontSize: 76,
        fontWeight: 700,
        lineHeight: 1.08,
        textWrap: "balance",
        color: "#ffffff",
      }),
    ],
  });

  const card = container({
    style: {
      display: "flex",
      width: "100%",
      height: "100%",
      backgroundColor: blue,
      fontFamily: "Berkeley Mono",
    },
    children: [backdrop, content],
  });

  return new ImageResponse(card, options);
}
