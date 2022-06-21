import commonjs from "@rollup/plugin-commonjs";
export default {
  input: "src/index.js",
  output: [
    {
      file: "es/index.js",
      format: "es",
    },
    {
      file: "cjs/index.js",
      format: "cjs",
    },
    {
      file: "lib/index.js",
      format: "umd",
      name: "imageToIco",
    },
  ],
  plugins: [commonjs()],
};
