/* eslint-disable @typescript-eslint/no-var-requires */
const react = require("@vitejs/plugin-react").default;
const env = require("vite-plugin-env-compatible").default;
const tsconfigPaths = require("vite-tsconfig-paths").default;
// @ts-expect-error this file is resolved when application is used
const packageInfo = require("../../../../package.json");
/* eslint-enable @typescript-eslint/no-var-requires */

// https://vitejs.dev/config/
module.exports = {
  plugins: [
    react({
      exclude: /\.stories\.(t|j)sx?$/,
    }),
    tsconfigPaths(),
    env({ prefix: "DATAWARE_TOOLS" }),
  ],
  base: packageInfo.basePath,
  cacheDir: "./.vite",
  assetsInclude: ["robots.txt"],
  build: { outDir: "./dist" + packageInfo.basePath },
  resolve: {
    preserveSymlinks: true,
    // this option should be same with app-common peerDependencies
    dedupe: [
      "@auth0/auth0-react",
      "@emotion/react",
      "@emotion/styled",
      "@mui/icons-material",
      "@mui/lab",
      "@mui/material",
      "@mui/styles",
      "oidc-react",
      "react",
      "react-dom",
    ],
  },
};
