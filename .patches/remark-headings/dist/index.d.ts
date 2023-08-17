import { Root } from "mdast";

type HeadingItem = {
	id?: string;
	depth: number;
	value?: string;
	children?: Array<HeadingItem>;
};
declare function headings(): (tree: Root, vFile: any) => Promise<void>;

export { HeadingItem, headings as default };
