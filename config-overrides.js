const rewireSass = require('react-app-rewire-scss')
const { injectBabelPlugin } = require('react-app-rewired')

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireSass(config, env)
  config = injectBabelPlugin('transform-decorators-legacy', config)

  // with loaderOptions
  // config = rewireSass.withLoaderOptions(someLoaderOptions)(config, env)
  return config
}