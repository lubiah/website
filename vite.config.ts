import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import svelteSvg from "@poppanator/sveltekit-svg";

export default defineConfig({
	plugins: [sveltekit(), svelteSvg()],
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"]
	}
});
