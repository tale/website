import { ImageResponse } from "takumi-js/response";
import { iconImage } from "@/logo";

export function GET() {
  return new ImageResponse(iconImage(180), { width: 180, height: 180, format: "png" });
}
