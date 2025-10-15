import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import svgr from "vite-plugin-svgr";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [],
    framework: {
        name: "@storybook/react-vite",
        options: {}
    },
    staticDirs: ["../public"],
    async viteFinal(config) {
        return mergeConfig(config, {
            plugins: [
                svgr({
                    svgrOptions: {
                        exportType: "default"
                    },
                    include: "**/*.svg?react"
                })
            ]
        });
    }
};
export default config;
