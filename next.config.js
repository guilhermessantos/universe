module.exports = {
  webpack: (config, { isServer }) => {
    const serverConf = {
      ...config,
      node: {
        fs: 'empty',
        module: 'empty',
      },
    }

    return !isServer ? serverConf : config
  },
}
