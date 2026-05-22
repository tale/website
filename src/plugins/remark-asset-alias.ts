import { basename, extname } from "node:path";

const PREFIX = "~/";
const TARGET = "@/assets/";

interface MdNode {
  type: string;
  url?: string;
  children?: MdNode[];
}

function walk(node: MdNode, slug: string): void {
  if (
    (node.type === "image" || node.type === "link") &&
    typeof node.url === "string" &&
    node.url.startsWith(PREFIX)
  ) {
    const rest = node.url.slice(PREFIX.length);
    node.url = `${TARGET}${slug}/${rest}`;
  }

  if (Array.isArray(node.children)) {
    for (const child of node.children) walk(child, slug);
  }
}

export default function remarkAssetAlias() {
  return (tree: MdNode, file: { path?: string; history?: string[] }) => {
    const path = file.path ?? file.history?.[file.history.length - 1];
    if (!path) return;
    const slug = basename(path, extname(path));
    walk(tree, slug);
  };
}
