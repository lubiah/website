'use strict';

var Slugger = require('github-slugger');
var unistUtilVisit = require('unist-util-visit');
var mdastUtilToString = require('mdast-util-to-string');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Slugger__default = /*#__PURE__*/_interopDefault(Slugger);

// src/index.ts
function headings() {
  return async function transformer(tree, vFile) {
    const headings2 = [];
    const slugger = new Slugger__default.default();
    function getFlatHeadingsList(node) {
      const h = {
        id: slugger.slug(mdastUtilToString.toString(node)),
        depth: node.depth,
        value: mdastUtilToString.toString(node)
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
    unistUtilVisit.visit(tree, "heading", getFlatHeadingsList);
    if (!vFile.data.fm)
      vFile.data.fm = {};
    vFile.data.fm.headings = buildHeadingsTree(headings2);
  };
}

module.exports = headings;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.cjs.map