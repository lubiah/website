import Slugger from "github-slugger";
import { visit } from "unist-util-visit";
import { toString } from "mdast-util-to-string";

// src/index.ts
function headings() {
	return async function transformer(tree, vFile) {
		const headings2 = [];
		const slugger = new Slugger();
		function getFlatHeadingsList(node) {
			const h = {
				id: slugger.slug(toString(node)),
				depth: node.depth,
				value: toString(node)
			};
			headings2.push(h);
		}
		function buildHeadingsTree(headings3) {
			const root = { depth: 0 };
			const parents = [];
			let previous = root;
			headings3.forEach((heading) => {
				var _a;
				if (heading.depth > previous.depth) {
					if (previous.children === void 0) {
						previous.children = [];
					}
					parents.push(previous);
				} else if (heading.depth < previous.depth) {
					while (parents[parents.length - 1].depth >= heading.depth) {
						parents.pop();
					}
				}
				(_a = parents[parents.length - 1].children) == null ? void 0 : _a.push(heading);
				previous = heading;
			});
			return root.children || [];
		}
		visit(tree, "heading", getFlatHeadingsList);
		if (!vFile.data.fm) vFile.data.fm = {};
		vFile.data.fm.headings = buildHeadingsTree(headings2);
	};
}

export { headings as default };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map
