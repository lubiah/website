import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import COLOURS from "tailwindcss/colors";

const config: Config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		maxWidth: {
			prose: "75ch"
		},
		colors: {
			gray: COLOURS.neutral
		},
		extend: {}
	},

	plugins: [forms]
};

export default config;
