<script lang="ts">
	import CalendarIcon from "$icons/calendar.svg?component";
	import ClockIcon from "$icons/clock.svg?component";
	import { formatDate } from "$utils";

	export let title: ArticleMeta["title"];
	export let excerpt: ArticleMeta["excerpt"];
	export let date: ArticleMeta["date"];
	export let slug: ArticleMeta["slug"];
	export let readingTime: ArticleMeta["readingTime"]["text"];
</script>

<a href="/blog/{slug}" class="flex flex-col gap-y-1">
	<h2 class="text-xl font-bold my-0">{title}</h2>
	<p class="text-gray-500 text-sm laptop:text-base line-clamp-3 flex-1">{excerpt}</p>
	<div class="flex text-gray-500 text-sm justify-between laptop:justify-start laptop:gap-x-6">
		<span class="flex items-center gap-x-2">
			<CalendarIcon width={16} height={16} />
			<time>{formatDate(date)}</time>
		</span>
		<span class="flex gap-x-2 items-center">
			<ClockIcon width={16} height={16} />
			<span>{readingTime}</span>
		</span>
	</div>
</a>
