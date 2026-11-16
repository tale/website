import { defineHastPlugin, type HastNode } from "satteri";

// Converts images into figures in markdown, using their alt text as a caption.
export default function satteriFigure() {
  return defineHastPlugin({
    name: "figure",
    element: {
      filter: ["p"],
      visit: (node, ctx) => {
        const figures: HastNode[] = [];

        for (const child of node.children) {
          if (child.type === "text" && child.value.trim().length === 0) {
            continue;
          }

          if (child.type !== "element" || child.tagName !== "img") {
            return;
          }

          figures.push({
            type: "element",
            tagName: "figure",
            properties: {},
            children: child.properties.alt
              ? [
                  child,
                  {
                    type: "element",
                    tagName: "figcaption",
                    properties: {},
                    children: [{ type: "text", value: child.properties.alt }],
                  },
                ]
              : [child],
          });
        }

        if (figures.length === 0) {
          return;
        }

        ctx.insertBefore(node, figures);
        ctx.removeNode(node);
      },
    },
  });
}
