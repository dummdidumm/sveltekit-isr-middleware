# SvelteKit ISR + Middleware

This example shows how you can use ISR with middleware in front. The use case is e.g. utm tracking codes, which you don't want to be part of the ISR cache key (else you would get cache misses almost always), but you want to log/analyse them, which you do in middleware instead.

Important files:
- `middleware.ts`: reads the URL parameters and can do something with it, e.g. send it to some analytics service (in this example it just logs `utm_source`)
- `+page.server.ts`: defines an ISR route with 60 seconds revalidation window, and the query parameter `foo` is a cache key, but e.g. `utm_source` is not

As a result, if you deploy this on Vercel, then go to the Logs tab, then invoke
1. `/?foo=bar&utm_source=x` you'll see a cache miss in ISR and a middleware log `x`
2. `/?foo=bar&utm_source=y` you'll see a cache hit in ISR because `bar` as a value of `foo` was already cached, and `utm_source` (which is different) is ignored, but you'll still see a middleware log `y`
