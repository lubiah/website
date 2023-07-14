import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import COLOURS from "tailwindcss/colors";

const config: Config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
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
