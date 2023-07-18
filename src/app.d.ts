// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

declare interface ArticleMeta {
	title: string;
	description: string;
	excerpt: string;
	date: Date;
	tags: Array<string>;
	updated?: Date;
	slug: string;
	readingTime: {
		text: string;
		minutes: number;
		time: number;
		words: number;
	};
	/** Contains the headings of the blog post */
	headings: Array<{
		id: string;
		depth: number;
		value: string;
		children?: ArticleMeta["headings"];
	}>;
}

declare module "*.svg?component" {
	import type { ComponentType, SvelteComponentTyped } from "svelte";
	import type { SVGAttributes } from "svelte/elements";

	const content: ComponentType<SvelteComponentTyped<SVGAttributes<SVGSVGElement>>>;

	export default content;
}

declare module "*.svg?src" {
	const content: string;
	export default content;
}

declare module "*.svg?url" {
	const content: string;
	export default content;
}

declare module "*.svg?dataurl" {
	const content: string;
	export default content;
}

declare module "*.svg?dataurl=base64" {
	const content: string;
	export default content;
}

declare module "*.svg?dataurl=enc" {
	const content: string;
	export default content;
}

declare module "*.svg?dataurl=unenc" {
	const content: string;
	export default content;
}
