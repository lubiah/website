import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import COLOURS from "tailwindcss/colors";

const config: Config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		screens: {
			"tablet-sm": "640px",
			tablet: "768px",
			laptop: "1024px",
			desktop: "1280px",
			ultrawide: "1536px"
		},
		colors: {
			gray: COLOURS.neutral
		},
		extend: {
			lineHeight: {
				tighter: "1.15"
			}
		}
	},

	plugins: [forms]
};

export default config;
