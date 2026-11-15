import { ImageResponse } from "takumi-js/response";
import { iconImage } from "@/logo";

export function GET() {
  return new ImageResponse(iconImage(32), { width: 32, height: 32, format: "ico" });
}
