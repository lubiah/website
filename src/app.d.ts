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
	updated?: Date;
}
