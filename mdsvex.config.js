import { defineMDSveXConfig as defineConfig } from "mdsvex";
import { fileURLToPath } from "node:url";

import readingTime from "mdsvex-reading-time";
import remarkEmoji from "remark-emoji";
import remarkHeadings from "@sveltinio/remark-headings";
import remarkDirective from "remark-directive";
import remarkAsides from "./remarkPlugins/asides/index.js";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkParse from "remark-parse";

import rehypeSlug from "rehype-slug";
import rehypeHighlighter from "rehype-highlighter";
import rehypeEscapeCode from "@lubiah/rehype-escape-code";

const config = defineConfig({
	extensions: [".md"],
	highlight: false,
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
		[remarkEmoji, { accessible: true }],
		remarkHeadings,
		remarkAsides
	],
	rehypePlugins: [
		rehypeSlug,

		[
			rehypeHighlighter,
			{
				theme: "dracula",
				loadThemes: {
					"dracula-light": fileURLToPath(
						new URL("./misc/themes/dracula-dot-min-white.json", import.meta.url)
					)
				},
				inlineCode: {
					theme: "dracula-light",
					spaceSubstitution: true
				}
			}
		],
		rehypeEscapeCode
	]
});

export default config;
