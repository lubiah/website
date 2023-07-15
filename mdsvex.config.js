import { defineMDSveXConfig as defineConfig } from "mdsvex";

import readingTime from "mdsvex-reading-time";

const config = defineConfig({
	extensions: [".md"],

	smartypants: {
		dashes: "oldschool"
	},

	remarkPlugins: [readingTime],
	rehypePlugins: []
});

export default config;
