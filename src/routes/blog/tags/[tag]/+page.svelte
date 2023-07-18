<script lang="ts">
	import type { PageServerData } from "./$types";
	import Card from "$components/BlogCard";

	export let data: PageServerData;
</script>

<main class="max-w-screen-laptop mx-auto">
	<div class="my-18">
		<a href="/blog" class="text-gray-500 font-semibold">The Garden</a>
		<h1 class="my-0">Content under `{data.tag}`</h1>
	</div>
	<div>
		<div class="flex flex-col gap-y-12 laptop:grid laptop:grid-cols-2 laptop:gap-x-12">
			{#each data.articles as article}
				<Card
					title={article.title}
					excerpt={article.excerpt}
					date={article.date}
					slug={article.slug}
					readingTime={article.readingTime.text}
				/>
			{/each}
		</div>
	</div>
</main>
