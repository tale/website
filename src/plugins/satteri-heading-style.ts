import GithubSlugger from "github-slugger";
import { defineHastPlugin, type HastNode } from "satteri";

type RawNode = Extract<HastNode, { type: "raw" }>;

const TARGETS = new Set(["h2", "h3"]);
const sluggers = new WeakMap<object, GithubSlugger>();

function textContent(node: Readonly<HastNode>): string {
  if (node.type === "text") return node.value ?? "";
  if (!("children" in node) || !Array.isArray(node.children)) return "";
  return node.children.map(textContent).join("");
}

function getSlugger(data: object): GithubSlugger {
  const existing = sluggers.get(data);
  if (existing) return existing;
  const slugger = new GithubSlugger();
  sluggers.set(data, slugger);
  return slugger;
}

function classList(value: unknown): string[] {
  if (Array.isArray(value)) return value.filter((item): item is string => typeof item === "string");
  if (typeof value === "string") return value.split(/\s+/).filter(Boolean);
  return [];
}

function unique(values: string[]): string[] {
  return [...new Set(values)];
}

function headingText(node: Readonly<HastNode>, fallback: string): string {
  const text = textContent(node);
  return text.length > 0 ? text : fallback;
}

function anchor(id: string): RawNode {
  // Raw node whose value is a single tag is skipped by Astro's heading
  // collector, so the anchor stays out of table-of-contents text.
  return {
    type: "raw",
    value: `<a class="ml-[0.4em] opacity-0 transition-opacity duration-150 !text-inherit !no-underline !font-normal group-hover:opacity-50 hover:!opacity-100 focus-visible:opacity-50" href="#${id}" aria-label="Link to this heading">#</a>`,
  };
}

export default function satteriHeadingStyle() {
  return defineHastPlugin({
    name: "heading-style",
    element: {
      filter: [...TARGETS],
      visit(node, ctx) {
        const props = node.properties ?? {};
        const existingId =
          typeof props["id"] === "string" && props["id"].length > 0 ? props["id"] : null;
        const id =
          existingId ?? getSlugger(ctx.data).slug(headingText(node, ctx.textContent(node)));

        ctx.setProperty(node, "id", id);
        ctx.setProperty(
          node,
          "className",
          unique([...classList(props["className"]), "group", "heading"]),
        );
        ctx.appendChild(node, anchor(id));
      },
    },
  });
}
