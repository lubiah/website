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

<Head title={SEO.title} description={SEO.description} />

<div class="px-4 py-[72px] mb-[72px] bg-gray-100">
	<div class="max-w-screen-laptop mx-auto">
		<h1>{data.metadata.title}</h1>
		<ul class="text-sm mt-[48px] flex flex-col gap-y-2">
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

<div class="max-w-screen-laptop mx-auto">
	<article class="max-w-prose px-4">
		<svelte:component this={data.component} />
	</article>
</div>
