// @ts-check
/**
 * This file crawls the build of my website and creates a json file containing each url
 * something like a crawler
 */
import { fileURLToPath } from "node:url";
import { createServer } from "vite";
import Crawler from "simplecrawler";
import { write, writeFileSync } from "node:fs";

(async () => {
	const URLS = new Set();
	const port = 5000;
	const configFile = fileURLToPath(new URL("../vite.config.ts", import.meta.url));
	const Server = await createServer({
		configFile,
		mode: "development",
		server: {
			port
		}
	});

	await Server.listen();
	const crawler = new Crawler(`http://localhost:${port}`);
	crawler.on("fetchcomplete", (queueItem, responsBody, response) => {
		if (response.headers["content-type"] === "text/html") URLS.add(new URL(queueItem.url).pathname);
	});

	crawler.on("complete", async () => {
		await Server.close();
		const destination = fileURLToPath(new URL("urls.json", import.meta.url));
		const data = JSON.stringify({ urls: [...URLS] });
		writeFileSync(destination, data);
	});

	crawler.start();
})();
