<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<div class="px-4 py-[72px] mb-[72px] bg-gray-100">
	<h1>{data.metadata.title}</h1>
</div>

<article class="max-w-prose mx-auto px-4">
	<svelte:component this={data.component} />
</article>
