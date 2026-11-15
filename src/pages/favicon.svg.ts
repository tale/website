import { iconSvg } from "@/logo";

export function GET() {
  return new Response(iconSvg, {
    headers: { "Content-Type": "image/svg+xml" },
  });
}
