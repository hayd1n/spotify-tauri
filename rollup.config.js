import image from "@rollup/plugin-image";
import typescript from "@rollup/plugin-typescript";
import uglify from "@lopatnov/rollup-plugin-uglify";

/** @type {import('rollup').RollupOptions} */
export default {
  input: "src/index.ts",
  output: {
    file: "dist/bundle.js",
    format: "iife",
    name: "MyBundle",
  },
  plugins: [
    image(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    uglify(),
  ],
};
