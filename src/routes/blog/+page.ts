import { getArticlesMeta } from ".";
import type { PageLoad } from "./$types";

export const load = (() => {
	const articles = getArticlesMeta();

	return {
		articles
	};
}) satisfies PageLoad;
