export async function load({ fetch }) {
	const response = await fetch('/blog/api');
	const posts = await response.json();

	return {
		posts
	}
}

