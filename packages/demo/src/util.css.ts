import { style } from "@vanilla-extract/css";
import { textColor } from "./token.css";
import { btn } from "./index.css";

export function createStyle(color: string) {
  return style(
    {
      vars: {
        [textColor]: color,
      },
      selectors: {
        [`${btn} > &`]: {
          color: textColor,
        },
      },
    },
    "ui-btn-content-" + color
  );
}
