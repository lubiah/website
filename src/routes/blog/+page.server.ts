import { getArticlesMeta, getTags } from ".";
import type { PageServerLoad } from "./$types";

export const load = (() => {
	const articles = getArticlesMeta();
	const tags = getTags();
	return {
		articles,
		tags
	};
}) satisfies PageServerLoad;
