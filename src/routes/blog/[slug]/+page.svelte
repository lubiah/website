<script lang="ts">
	import type { PageData } from "./$types";
	import CalendarIcon from "$icons/calendar.svg?component";
	import { formatDate } from "$utils";
	export let data: PageData;
</script>

<div class="px-4 py-[72px] mb-[72px] bg-gray-100">
	<h1>{data.metadata.title}</h1>
	<ul class="text-sm mt-[48px]">
		<li class="flex items-center gap-2">
			<CalendarIcon width="16" height="16" />
			<time datetime={data.metadata.date.toString()}>{formatDate(data.metadata.date)}</time>
		</li>
	</ul>
</div>

<article class="max-w-prose mx-auto px-4">
	<svelte:component this={data.component} />
</article>
