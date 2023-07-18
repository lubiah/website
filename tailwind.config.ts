import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import COLOURS from "tailwindcss/colors";

const config: Config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		container: {
			center: true
		},
		screens: {
			tablet: "768px",
			laptop: "1024px",
			desktop: "1280px",
			ultrawide: "1536px"
		},
		borderRadius: {
			none: "0px",
			DEFAULT: "8px",
			xs: "2px",
			sm: "4px",
			md: "12px",
			lg: "16px",
			xl: "24px",
			full: "999999px"
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
