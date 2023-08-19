<script lang="ts">
	export let headings: ArticleMeta["headings"];
</script>

<ul class="pl-0">
	{#each headings as { value, id }}
		<li class="list-marker-none my-0 p-1 mb-1 rounded-xs toc_li hover:bg-gray-100">
			<a class="block toc_link" href="#{id}">{value}</a>
		</li>
	{/each}
</ul>
