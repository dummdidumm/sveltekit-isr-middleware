import type { Config } from '@sveltejs/adapter-vercel';
import type { LoadEvent } from '@sveltejs/kit';

export const config: Config = {
	isr: {
		expiration: 60, // seconds
		allowQuery: ['foo']
	}
};

export function load({ url }: LoadEvent) {
	const foo = url.searchParams.get('foo');
	const utm_source = url.searchParams.get('utm_source');
	return { foo, utm_source };
}
