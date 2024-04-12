"use strict";
const e = require("react/jsx-runtime"),
  t = require("@vanilla-extract/dynamic");
var r = "ui-btn",
  s = "ui-btn-content-green",
  i = "var(--ui-text-color)";
function a(n) {
  return e.jsx("div", {
    className: r,
    children: e.jsx("span", {
      className: s,
      style: t.assignInlineVars({ [i]: n.test }),
      children: "11",
    }),
  });
}
module.exports = a;
