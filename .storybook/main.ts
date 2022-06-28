const path = require("path");
const { loadConfigFromFile, mergeConfig } = require("vite");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      include: ["../src/**/*.stories.mdx", "../src/**/*.stories.tsx"]
    }
  },
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite"
  },
  features: {
    storyStoreV7: true
  },
  async viteFinal(config, { configType }) {
    // // 絶対パスでインポートするためにaliasを設定
    // config.resolve.alias = {
    //   ...config.resolve.alias,
    //   src: path.resolve(__dirname, "../src")
    // };
    // const { config: userConfig } = await loadConfigFromFile(path.resolve(__dirname, "../vite.config.ts"));
    // const { config: pathConfig } = await loadConfigFromFile(path.resolve("./src"));

    return mergeConfig(config, {
      resolve: {
        alias: { "~": path.resolve(__dirname, "../src"), $: path.resolve(__dirname, "../api") }
      }
    });
  }
};
