const tailwindcss = require("tailwindcss");
const presetEnv = require("postcss-preset-env");

const config = {
	plugins: [
		presetEnv({
			stage: 1
		}),
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		tailwindcss()
		//But others, like autoprefixer, need to run after,
	]
};

module.exports = config;
