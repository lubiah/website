import forms from "@tailwindcss/forms";
import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		maxWidth: {
			prose: "75ch"
		},
		extend: {}
	},

	plugins: [forms]
};

export default config;
