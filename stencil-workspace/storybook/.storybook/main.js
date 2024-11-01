import remarkGfm from "remark-gfm";

module.exports = {
  stories: ["../**/*.mdx", "../**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ['../public'],

  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "storybook-dark-mode",
    "@storybook/addon-webpack5-compiler-swc",
    { 
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    {
      name: "@storybook/addon-styling-webpack",
      options: {
        rules: [
          // Replaces existing CSS rules to support PostCSS
          {
            test: /\.css$/,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: { importLoaders: 1 }
              },
              {
                // Gets options from `postcss.config.js` in your project root
                loader: "postcss-loader",
                options: { implementation: require.resolve("postcss") }
              }
            ],
          }
        ]
      }
    }
  ],

  babel: async (options) => ({
    ...options,
    presets: [...options.presets, '@babel/preset-react'],
  }),

  framework: {
    name: "@storybook/web-components-webpack5",
    options: {}
  },

  docs: {}
}
