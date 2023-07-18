import { getArticlesMeta } from "../..";
import type { PageServerLoad } from "./$types";

export const load = (({ params }) => {
	const { tag } = params;
	const articles = getArticlesMeta().filter((article) => article.tags.includes(tag));
	return {
		articles,
		tag
	};
}) satisfies PageServerLoad;
