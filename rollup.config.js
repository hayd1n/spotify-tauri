import { nodeResolve } from "@rollup/plugin-node-resolve";
import image from "@rollup/plugin-image";
import typescript from "@rollup/plugin-typescript";
import uglify from "@lopatnov/rollup-plugin-uglify";

/** @type {import('rollup').RollupOptions} */
export default {
  input: "src/index.ts",
  output: {
    file: "dist/bundle.js",
    format: "esm",
  },
  plugins: [
    nodeResolve(),
    image(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    uglify(),
  ],
};
