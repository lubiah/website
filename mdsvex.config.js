import { defineMDSveXConfig as defineConfig } from "mdsvex";

import readingTime from "mdsvex-reading-time";
import remarkEmoji from "remark-emoji";
import remarkHeadings from "@sveltinio/remark-headings";

import rehypeSlug from "rehype-slug";

const config = defineConfig({
	extensions: [".md"],

	smartypants: {
		dashes: "oldschool"
	},

	remarkPlugins: [readingTime, remarkEmoji, [remarkEmoji, { accessible: true }], remarkHeadings],
	rehypePlugins: [rehypeSlug]
});

export default config;
