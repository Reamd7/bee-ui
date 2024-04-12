import * as styles from "./index.css.ts";
import * as token from "./token.css.ts";
import { assignInlineVars } from "@vanilla-extract/dynamic";

export default function Demo(props: { test: string }) {
  return (
    <div className={styles.btn}>
      <span
        className={styles.btnContentGreen}
        style={assignInlineVars({
          [token.textColor]: props.test,
        })}
      >
        11
      </span>
    </div>
  );
}
