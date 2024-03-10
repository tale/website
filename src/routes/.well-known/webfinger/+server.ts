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
				status: 200,
				body: JSON.stringify({
					subject: resource,
					links: [
						{
							rel: 'http://webfinger.net/rel/profile-page',
							href: 'https://authelia-sso-us-east-1-connect-pingsaas.tale.me'
						}
					]
				})
			});

		default:
			return json({
				status: 404,
				body: 'Resource type not found'
			}, new Response(null, { status: 404 }));
	}

}
