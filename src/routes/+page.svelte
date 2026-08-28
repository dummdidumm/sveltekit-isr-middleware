<script>
	let { data } = $props();
</script>

<h1>SvelteKit ISR + middleware example</h1>
<p>foo value (always visible, creates one ISR entry per value): {data.foo}</p>
<p>
	utm_source value (not visible because ISR entries ignore it; but logged in middleware.ts): {data.utm_source}
</p>
