import { getArticlesMeta, getTags } from "../..";
import type { PageServerLoad } from "./$types";

export const load = (({ params }) => {
	const { tag } = params;
	const tags = getTags();
	const articles = getArticlesMeta().filter((article) => article.tags.includes(tag));
	return {
		articles,
		tag,
		tags
	};
}) satisfies PageServerLoad;
