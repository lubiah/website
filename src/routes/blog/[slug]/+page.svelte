<script lang="ts">
	import type { PageData } from "./$types";
	import CalendarIcon from "$icons/calendar.svg?component";
	import ClockIcon from "$icons/clock.svg?component";
	import { formatDate } from "$utils";
	import Head from "svelte-seo";
	export let data: PageData;

	const SEO = {
		title: `${data.metadata.title} • Lubiah`,
		description: `${data.metadata.description}`
	};
</script>

<Head
	title={SEO.title}
	description={SEO.description}
	twitter={{ title: SEO.title, description: SEO.description }}
/>
<div
	class="py-[72px] mb-[72px] tablet:mb-[84px] laptop:mb-[96px] tablet:py-[84px] laptop:py-[96px] bg-gray-100"
>
	<div class="px-4 mx-auto max-w-screen-laptop">
		<h1 class="my-0">{data.metadata.title}</h1>
		<ul
			class="text-sm mt-[48px] px-0 tablet:mt-[56px] laptop:mt-[64px] flex flex-col tablet:flex-row gap-y-2 tablet:gap-x-4 laptop:gap-x-6"
		>
			<li class="flex items-center gap-2">
				<CalendarIcon width="16" height="16" />
				<time datetime={data.metadata.date.toString()}>{formatDate(data.metadata.date)}</time>
			</li>
			<li class="flex items-center gap-2">
				<ClockIcon width="16" height="16" />
				<time>3 mins read</time>
			</li>
		</ul>
	</div>
</div>

<div class="px-4 mx-auto max-w-screen-laptop my-[100px]">
	<div class="flex flex-row justify-between tablet:gap-[30px]">
		<article class="max-w-prose">
			<svelte:component this={data.component} />
		</article>
		{#if data.metadata.headings}
			{#await import("./components/toc") then TOC}
				<aside class="text-sm text-gray-600 sticky top-[20%] h-fit hidden laptop:block">
					<p class="mb-2 mt-0 font-bold border-b border-gray-300 pb-1">Table Of Contents</p>
					<svelte:component this={TOC.default} headings={data.metadata.headings} />
				</aside>
			{/await}
		{/if}
	</div>
</div>

<style lang="postcss">
	article {
		& :global(> :first-child) {
			@apply mt-0;
		}

		& :global(pre) {
			@apply -mx-4 rounded-none p-4 laptop:-mx-0 tablet:p-2 laptop:rounded-sm;
		}
	}
</style>
