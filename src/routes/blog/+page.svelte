<script lang="ts">
	import type { PageData } from "./$types";
	import Card from "$components/BlogCard";
	import Head from "svelte-seo";

	export let data: PageData;

	const SEO = {
		title: `The Garden - My thoughts and notes • Lubiah`,
		description:
			"The homepage of all my thoughts, notes, and findings on programming and other topics that I find interesting"
	};
</script>

<Head title={SEO.title} description={SEO.description} />

<main class="px-4 max-w-screen-laptop mx-auto">
	<div class="my-18 tablet:my-[84px] laptop:my-[96px]">
		<h1 class="my-0 mb-4">The Garden</h1>
		<p class="text-gray-700 py-0">
			My thoughts and notes on programming and other topics which I find interesting.
		</p>
	</div>
	<div>
		<ul class="flex gap-x-4 mb-[24px] tablet:mb-[28px]">
			{#each data.tags as tag}
				<a
					href="/blog/tags/{tag}"
					class="text-base p-2 border border-gray-300 leading-none rounded-sm">{tag}</a
				>
			{/each}
		</ul>
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
