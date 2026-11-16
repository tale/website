import { defineHastPlugin } from "satteri";

// Reads IDs from `satteriHeadingIdsPlugin` and adds a "#" to allow anchoring.
export default function satteriHeadingAnchor() {
  return defineHastPlugin({
    name: "heading-anchor",
    element: {
      filter: ["h2", "h3"],
      visit: (node, ctx) => {
        const id = node.properties?.id;
        if (!id) {
          return;
        }

        ctx.appendChild(node, {
          type: "raw",
          value: `<a class="heading-anchor" href="#${id}" aria-label="Link to this heading">#</a>`,
        });
      },
    },
  });
}
