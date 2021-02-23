const { ESLINT_MODES, whenProd } = require("@craco/craco");
const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [{ plugin: CracoLessPlugin }],
  eslint: {
    mode: ESLINT_MODES.file,
  },
  webpack: {
    configure: {
      externals: whenProd(() => ({
        react: "React",
        "react-dom": "ReactDOM",
      })),
    },
  },
};
