import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config: any) => {
    // Add path aliases
    config.resolve.alias["@"] = path.resolve(__dirname, "../src");
    config.resolve.alias["@/app"] = path.resolve(__dirname, "../src/app");
    config.resolve.alias["@/components"] = path.resolve(
      __dirname,
      "../src/components"
    );

    return config;
  },
};
export default config;
