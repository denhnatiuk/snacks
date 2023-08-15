// const autoprefixer = require('autoprefixer');
// const postcss = require('rollup-plugin-postcss');
import autoprefixer from "autoprefixer";
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "assets/scss/main.scss",
    output: {
      file: "assets/css/main.css",
      format: "es"
    },
    plugins: [
      postcss({
        plugins: [autoprefixer],
        extract: true,
        minimize: true,
        sourceMap: false,
        extensions: [".scss"]
      })
    ]
  }
];
