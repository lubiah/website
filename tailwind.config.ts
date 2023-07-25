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
			laptop: "1100px",
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
			gray: COLOURS.neutral,
			info: {
				50: "#F3F4FB",
				100: "#E8E9F8",
				200: "#CCD0EF",
				300: "#A9AFE5",
				400: "#7E87D7",
				500: "#3A47BD",
				600: "#343FA8",
				700: "#2B358C",
				800: "#262F7D",
				900: "#1A2056",
				950: "#12163B"
			}
		},
		extend: {
			lineHeight: {
				tighter: "1.15"
			},
			spacing: {
				18: "4.5rem",
				21: "5.25rem"
			}
		}
	},

	plugins: [forms]
};

export default config;
