import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import json from "@rollup/plugin-json";
import importmap from "@eik/rollup-plugin";
import postcss from "rollup-plugin-postcss";
import postcssLessLoader from "rollup-plugin-postcss-webpack-alias-less-loader";
import path from "path";

export default {
  input: "src/index.js",
  plugins: [
    importmap({
      maps: [
        {
          imports: {
            react: "https://neik.dev.intern.nav.no/npm/@pika/react/v16/package/source.production.js",
            "react-dom": "https://neik.dev.intern.nav.no/npm/@pika/react-dom/v16/package/source.production.js",
          },
        },
      ],
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    nodeResolve({
      extensions: [".js"],
    }),
    babel({
      presets: ["@babel/preset-react"],
    }),
    commonjs({
      include: ["node_modules/**"],
    }),
    json(),
    postcss({
      extract: path.resolve("dist/generelle-fliser.css"),
      loaders: [
        postcssLessLoader({
          nodeModulePath: "./node_modules",
          aliases: {},
        }),
      ],
    }),
  ],
  output: [
    {
      file: "dist/generelle-fliser.esm.js",
      format: "esm",
      plugins: [terser()],
    },
  ],
};
