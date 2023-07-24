import { expect, test } from "@playwright/test";
import { readFileSync } from "node:fs";

const { urls: paths }: { urls: string[] } = JSON.parse(
	readFileSync(new URL("./urls.json", import.meta.url), "utf-8")
);

test.describe.parallel("Testing basic seo", () => {
	for (const path of paths) {
		test(`Testing route => ${path}`, async ({ page }) => {
			await page.goto(path);
			expect(await page.title()).toBeDefined();
			expect(await page.title()).toContain("• Lubiah");
			expect(await page.locator("meta[name='description']").getAttribute("content")).toBeDefined();
			// expect.soft(await page.locator("link[rel='canonical']").getAttribute("href")).toBe(
			// 	new URL(path, "https://lubiah.vercel.app").href.replace(/\/+$/, "")
			// );
			expect(await page.locator("h1").count(), "Only one h1 tag must exist").toBe(1);
		});
	}
});
