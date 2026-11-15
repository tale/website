import { staticPages } from "@/metadata";
import { renderCard } from "@/og";

export function GET() {
  return renderCard(staticPages.index);
}
