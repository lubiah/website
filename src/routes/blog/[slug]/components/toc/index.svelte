<script lang="ts">
	export let headings: ArticleMeta["headings"];
</script>

<ul>
	{#each headings as { value, id }}
		<li class="p-1 mb-1 rounded-xs toc_li hover:bg-gray-100">
			<a class="block toc_link" href="#{id}">{value}</a>
		</li>
	{/each}
</ul>
