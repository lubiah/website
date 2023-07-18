import { getArticlesMeta, getTags } from ".";
import type { PageLoad } from "./$types";

export const load = (() => {
	const articles = getArticlesMeta();
	const tags = getTags();
	return {
		articles,
		tags
	};
}) satisfies PageLoad;
