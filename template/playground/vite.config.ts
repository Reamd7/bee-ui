/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./playground/",
  base: "./",
  publicDir: path.join(__dirname, "./public"),
  plugins: [react()],
});
