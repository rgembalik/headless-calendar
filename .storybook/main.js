module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/html",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  viteFinal: (config, { configType }) => {
    // some configs
    if (process.env.PUBLIC_URI) {
      config.base = process.env.PUBLIC_URI;
    }

    return config;
  },
  refs: (_, { configType }) => {
    if (configType === "DEVELOPMENT") {
      return {
        react: {
          title: "React",
          url: "http://localhost:6016",
        },
        // vue: {
        //   title: "Vue",
        //   url: "http://localhost:6026",
        // },
      };
    }
    return {
      react: {
        title: "React",
        url: "/headless-calendar/react/",
      },
      // vue: {
      //   title: "Vue",
      //   url: "/headless-calendar/vue/",
      // },
    };
  },
};
