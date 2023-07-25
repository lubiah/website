import { visit } from "unist-util-visit";
import { remove } from "unist-util-remove";
import icons from "./icons.js";

const plugin = () => (tree) => {
	const TYPES = new Set(["info"]);
	visit(tree, (node) => {
		if (node.type !== "containerDirective" || !TYPES.has(node.name)) return;
		const type = node.name;
		const data = node.data || (node.data = {});
		(data.hName = "aside"),
			(data.hProperties = {
				class: `note note--${type}`
			});
		let title = type;
		remove(node, (child) => {
			if (child.data?.directiveLabel) {
				title = child.children[0].value;
				return true;
			}
		});

		const contentContainer = {
			type: "element",
			data: { hProperties: { class: "content" } },
			children: [...node.children]
		};
		const headerContainer = {
			type: "element",
			data: { hProperties: { class: "header" } },
			children: [
				{ type: "html", value: icons[type] },
				{
					type: "element",
					value: `<span class='title'>${title}</span>`
				}
			]
		};

		node.children = [headerContainer, contentContainer];
	});
};

export default plugin;
