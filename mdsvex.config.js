import { defineMDSveXConfig as defineConfig } from "mdsvex";

import readingTime from "mdsvex-reading-time";
import remarkEmoji from "remark-emoji";
import remarkHeadings from "@sveltinio/remark-headings";
import remarkDirective from "remark-directive";
import remarkAsides from "./remarkPlugins/asides/index.js";
import remarkFrontmatter from "remark-frontmatter";
import remarkHighlighter from "remark-highlighter";
import remarkParse from "remark-parse";

import rehypeSlug from "rehype-slug";

const config = defineConfig({
	extensions: [".md"],

	smartypants: {
		dashes: "oldschool"
	},

	remarkPlugins: [
		remarkParse,
		remarkFrontmatter,
		remarkDirective,
		readingTime,
		remarkEmoji,
		[remarkHighlighter, { theme: "dracula" }],
		[remarkEmoji, { accessible: true }],
		remarkHeadings,
		remarkAsides
	],
	rehypePlugins: [rehypeSlug]
});

export default config;
