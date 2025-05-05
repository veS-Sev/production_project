import path from 'path'
module.exports = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-interactions',
    'storybook-addon-mock',
    '@storybook/react',
    '@storybook/test',
    '@storybook/addon-webpack5-compiler-babel'
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },

  typescript: {
    reactDocgen: false
  },

  docs: {
    autodocs: true
  },
  core: {
    builder: {
      name: '@storybook/builder-webpack5',
      options: {
        fsCache: true,
        lazyCompilation: true
      }
    }
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../../src')
      }
    }
    return config
  }
}
