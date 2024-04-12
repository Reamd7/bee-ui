import { style } from "@vanilla-extract/css";
import { textColor } from "./token.css.ts";
import { createStyle } from "./util.css.ts";

export const btn = style(
  {
    display: "flex",
  },
  "ui-btn"
);

export const btnContent = style(
  {
    vars: {
      [textColor]: "red",
    },
    selectors: {
      [`${btn} > &`]: {
        color: textColor,
      },
    },
  },
  "ui-btn-content"
);

export const btnContentGreen = createStyle("green");
