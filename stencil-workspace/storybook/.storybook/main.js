module.exports = {
  "stories": ["../**/*.mdx", "../**/*.stories.@(js|jsx|ts|tsx)"],
  "staticDirs": ['../public'],

  "addons": [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "storybook-dark-mode",
    {
      name: "@storybook/addon-styling",
      options: {
        postCss: {
          implementation: require("postcss"),
        },
      },
    },
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-webpack5-compiler-swc"
  ],

  babel: async (options) => ({
    ...options,
    presets: [...options.presets, '@babel/preset-react'],
  }),

  "framework": {
    name: "@storybook/web-components-webpack5",
    options: {}
  },

  docs: {}
}
