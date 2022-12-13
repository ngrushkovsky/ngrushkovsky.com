const prettierConfig = require('@ngrushkovsky/prettier-config')

module.exports = {
  ...prettierConfig,
  pluginSearchDirs: false,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
}
