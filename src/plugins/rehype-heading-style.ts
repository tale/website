import GithubSlugger from "github-slugger";

interface HastNode {
  type: string;
  tagName?: string;
  value?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
}

const TARGETS = new Set(["h2", "h3"]);

function textContent(node: HastNode): string {
  if (node.type === "text") return node.value ?? "";
  if (!Array.isArray(node.children)) return "";
  return node.children.map(textContent).join("");
}

function decorate(node: HastNode, slugger: GithubSlugger): void {
  if (node.type === "element" && node.tagName && TARGETS.has(node.tagName)) {
    const props = (node.properties ??= {});

    const existingId =
      typeof props["id"] === "string" && props["id"].length > 0 ? (props["id"] as string) : null;
    const id = existingId ?? slugger.slug(textContent(node));
    props["id"] = id;

    const existing = Array.isArray(props["className"]) ? (props["className"] as string[]) : [];
    props["className"] = [...existing, "group", "heading"];

    const children = node.children ?? [];

    // Raw node whose value is a single tag is skipped by Astro's
    // rehype-collect-headings, so the anchor stays out of the collected
    // text/slug used by the table of contents.
    children.push({
      type: "raw",
      value: `<a class="ml-[0.4em] opacity-0 transition-opacity duration-150 !text-inherit !no-underline !font-normal group-hover:opacity-50 hover:!opacity-100 focus-visible:opacity-50" href="#${id}" aria-label="Link to this heading">#</a>`,
    });

    node.children = children;
    return;
  }

  if (Array.isArray(node.children)) {
    for (const child of node.children) decorate(child, slugger);
  }
}

export default function rehypeHeadingStyle() {
  return (tree: HastNode) => {
    const slugger = new GithubSlugger();
    decorate(tree, slugger);
  };
}
