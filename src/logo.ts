import { container, image } from "takumi-js/helpers";
import svg from "@/assets/logo.svg?raw";

export const blue = "#155dfc";

export function logoSvg(color: string) {
  return svg.replace("currentColor", color);
}

export function logoImage(color: string, size: number) {
  const src = `data:image/svg+xml;utf8,${encodeURIComponent(logoSvg(color))}`;
  return image({ src, width: size, height: size });
}

export const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#ffffff"/>${logoSvg(blue)}</svg>`;

export function iconImage(size: number) {
  return container({
    style: { display: "flex", width: size, height: size, backgroundColor: "#ffffff" },
    children: [logoImage(blue, size)],
  });
}
