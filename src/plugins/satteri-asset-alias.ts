import { basename, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { defineMdastPlugin } from "satteri";

const PREFIX = "~/";
const TARGET = "@/assets/";

function slugFromUrl(url: URL | undefined): string | null {
  if (!url) return null;
  const path = fileURLToPath(url);
  return basename(path, extname(path));
}

export default function satteriAssetAlias() {
  return defineMdastPlugin({
    name: "asset-alias",
    image(node, ctx) {
      if (!node.url.startsWith(PREFIX)) return;
      const slug = slugFromUrl(ctx.fileURL);
      if (!slug) return;
      const rest = node.url.slice(PREFIX.length);
      ctx.setProperty(node, "url", `${TARGET}${slug}/${rest}`);
    },
    link(node, ctx) {
      if (!node.url.startsWith(PREFIX)) return;
      const slug = slugFromUrl(ctx.fileURL);
      if (!slug) return;
      const rest = node.url.slice(PREFIX.length);
      ctx.setProperty(node, "url", `${TARGET}${slug}/${rest}`);
    },
  });
}
