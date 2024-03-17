import { json, type RequestEvent } from '@sveltejs/kit';

export async function GET({ url }: RequestEvent) {
	const resource = url.searchParams.get('resource');
	if (!resource) {
		return json({
			status: 400,
			body: 'Resource parameter is required'
		}, new Response(null, { status: 400 }));
	}

	const [resourceType, _resourceValue] = resource.split(':');
	switch (resourceType) {
		case 'acct':
			return json({
				subject: resource,
				links: [
					{
						rel: 'http://openid.net/specs/connect/1.0/issuer',
						href: 'https://authelia-sso-us-east-1-connect.tale.me'
					}
				]
			});

		default:
			return json({
				status: 404,
				body: 'Resource type not found'
			}, new Response(null, { status: 404 }));
	}

}
