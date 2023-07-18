<script lang="ts">
	import type { PageServerData } from "./$types";
	import Card from "$components/BlogCard";
	import Head from "svelte-seo";

	export let data: PageServerData;
</script>

<Head noindex={true} nofollow={true} />

<main class="max-w-screen-laptop mx-auto px-4">
	<div class="my-18 tablet:my-21 laptop:my-24">
		<a href="/blog" class="text-gray-500 font-semibold">The Garden</a>
		<h1 class="my-0 mt-2">Content under `{data.tag}`</h1>
	</div>
	<ul class="flex gap-x-4 mb-6 tablet:mb-7 laptop:mb-8">
		{#each data.tags as tag}
			<a
				href={tag === data.tag ? "/blog" : `/blog/tags/${tag}`}
				class:active={tag === data.tag}
				class="text-base p-2 border border-gray-300 leading-none rounded-sm">{tag}</a
			>
		{/each}
	</ul>
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

<style lang="postcss">
	.active {
		@apply bg-gray-800 text-gray-300 border-none;
	}
</style>
