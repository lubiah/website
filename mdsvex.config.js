import { defineMDSveXConfig as defineConfig } from "mdsvex";

import readingTime from "mdsvex-reading-time";
import remarkEmoji from "remark-emoji";
import remarkHeadings from "@sveltinio/remark-headings";
import remarkDirective from "remark-directive";
import remarkAsides from "./remarkPlugins/asides/index.js";
import remarkFrontmatter from "remark-frontmatter";
import remarkHighlighter from "remark-highlighter";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
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
		remarkGfm,
		remarkBreaks,
		remarkEmoji,
		[
			remarkHighlighter,
			{
				theme: "dracula",
				inlineCode: {
					spaceSubstitution: true
				}
			}
		],
		[remarkEmoji, { accessible: true }],
		remarkHeadings,
		remarkAsides
	],
	rehypePlugins: [rehypeSlug]
});

export default config;
