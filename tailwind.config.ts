import forms from "@tailwindcss/forms";
import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {}
	},

	plugins: [forms]
};

export default config;
