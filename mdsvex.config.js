import { defineMDSveXConfig as defineConfig } from "mdsvex";

import readingTime from "mdsvex-reading-time";
import remarkEmoji from "remark-emoji";

const config = defineConfig({
	extensions: [".md"],

	smartypants: {
		dashes: "oldschool"
	},

	remarkPlugins: [readingTime, remarkEmoji, [remarkEmoji, { accessible: true }]],
	rehypePlugins: []
});

export default config;
