import { defineHastPlugin, type HastNode } from "satteri";

type ElementNode = Extract<HastNode, { type: "element" }>;
type TextNode = Extract<HastNode, { type: "text" }>;

function isWhitespace(node: Readonly<HastNode>): node is Readonly<TextNode> {
  return node.type === "text" && /^\s*$/.test(node.value);
}

function isImage(node: Readonly<HastNode>): node is Readonly<ElementNode> {
  return node.type === "element" && node.tagName === "img";
}

function hasOnlyImages(node: Readonly<ElementNode>): boolean {
  return (
    Array.isArray(node.children) &&
    node.children.every((child) => isImage(child) || isWhitespace(child))
  );
}

function imageFrom(node: Readonly<ElementNode>): ElementNode {
  return {
    type: "element",
    tagName: "img",
    properties: { ...(node.properties ?? {}) },
    children: [],
  };
}

function isCaptionedFigure(node: Readonly<HastNode> | undefined): boolean {
  return (
    node?.type === "element" &&
    node.tagName === "figure" &&
    Array.isArray(node.children) &&
    node.children.some((child) => child.type === "element" && child.tagName === "figcaption")
  );
}

function isImageLink(node: Readonly<HastNode> | undefined): boolean {
  return node?.type === "element" && node.tagName === "a";
}

function figureFrom(node: Readonly<ElementNode>, alt: string): ElementNode {
  return {
    type: "element",
    tagName: "figure",
    properties: {},
    children: [
      imageFrom(node),
      {
        type: "element",
        tagName: "figcaption",
        properties: {},
        children: [{ type: "text", value: alt }],
      },
    ],
  };
}

export function satteriUnwrapImageParagraphs() {
  return defineHastPlugin({
    name: "unwrap-image-paragraphs",
    element: {
      filter: ["p"],
      visit(node, ctx) {
        if (!hasOnlyImages(node)) return;

        const images = node.children.filter(isImage).map(imageFrom);
        if (images.length === 1) {
          ctx.replaceNode(node, images[0]!);
        } else if (images.length > 1) {
          ctx.insertBefore(node, images);
          ctx.removeNode(node);
        }
      },
    },
  });
}

export default function satteriFigure() {
  return defineHastPlugin({
    name: "figure",
    element: {
      filter: ["img"],
      visit(node, ctx) {
        const props = node.properties ?? {};
        const alt = typeof props.alt === "string" ? props.alt : "";
        const src = typeof props.src === "string" ? props.src : "";
        const parent = ctx.parent(node);

        if (!alt || !src || isCaptionedFigure(parent) || isImageLink(parent)) return;

        return figureFrom(node, alt);
      },
    },
  });
}
