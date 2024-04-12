import { jsx as t } from "react/jsx-runtime";
import { assignInlineVars as n } from "@vanilla-extract/dynamic";
var r = "ui-btn",
  a = "ui-btn-content-green",
  o = "var(--ui-text-color)";
function l(e) {
  return t("div", {
    className: r,
    children: t("span", {
      className: a,
      style: n({
        [o]: e.test,
      }),
      children: "11",
    }),
  });
}
export { l as default };
