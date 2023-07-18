<script lang="ts">
	export let headings: ArticleMeta["headings"];
</script>

<ul>
	{#each headings as { value, id }}
		<li class="px-0.5 py-1 mb-1 rounded-xs">
			<a class="block" href="#{id}">{value}</a>
		</li>
	{/each}
</ul>
