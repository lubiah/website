/**
 * Returns all the articles metadata
 */
export const getArticlesMeta = (): ArticleMeta[] => {
	const _imports = import.meta.glob("./content/**/*.md", {
		eager: true,
		import: "metadata"
	});
	const files: ArticleMeta[] = [];

	for (const path in _imports) {
		const metadata = _imports[path] as ArticleMeta;
		metadata.slug = path.split("/")[2];
		metadata.date = new Date(metadata.date);
		if (metadata.updated) metadata.updated = new Date(metadata.updated);
		files.push(metadata);
	}

	return files;
};

/**
 * Returns all the tags for all the blog posts
 */
export const getTags = (): Array<string> => {
	const articles = getArticlesMeta();
	const tags: Set<string> = new Set();
	articles.forEach((articles) => articles.tags.forEach((tag) => tags.add(tag)));
	return Array.from(tags);
};
