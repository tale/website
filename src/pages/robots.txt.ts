const robots = `
User-agent: *
Allow: /

Sitemap: ${new URL("sitemap-index.xml", import.meta.env.SITE).href}
`.trim();

export function GET() {
	return new Response(robots, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
}
