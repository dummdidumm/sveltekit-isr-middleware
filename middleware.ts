export default function middleware(request: Request) {
	const url = new URL(request.url);
	// do something with the utm tracking codes here
	console.log(url.searchParams.get('utm_source'));
	// returning undefined means we fall through to the underlying isr/serverless function
}
