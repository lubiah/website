import type { PageLoad } from "./$types";

export const load = (async ({ params }) => {
	const { slug } = params;
	const article = await import(`../content/${slug}/index.md`);
	const component = article.default;
	const metadata: ArticleMeta = article.metadata;
	return {
		component,
		metadata
	};
}) satisfies PageLoad;
