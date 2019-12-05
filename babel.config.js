const plugins = [
  'jsx-v-model',
  '@babel/plugin-proposal-export-default-from'
]

if (process.env.NODE_ENV === 'development') {
  plugins.push('dynamic-import-node')
}

module.exports = {
  presets: ['@vue/app'],
  plugins
}
