/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./playground/",
  base: "./",
  publicDir: path.join(__dirname, "./public"),
  plugins: [
    react(),
    vanillaExtractPlugin({
      // configuration
      identifiers: function ({ filePath, hash, debugId, packageName }) {
        console.log({
          filePath,
          hash,
          debugId,
          packageName,
          arguments,
        });
        if (packageName?.startsWith("@bee-ui/")) {
          if (debugId) {
            return debugId;
          }
        }
        return `${filePath}_${hash}`;
      },
      unstable_mode: "emitCss",
    }),
  ],
});
