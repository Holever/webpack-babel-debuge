const DebugPlugin = require('./debug-babel-plugin')

module.exports = {
  "presets": [ "@babel/preset-react"],
  
  // presets: [
  //   ['babel-preset-react-app', {
  //     development: true
  //   }],
  // ],
  plugins: [
    [DebugPlugin, {
      isRouterFile: (filename) => {
        return true
      },
      // excludes: ['**/other-router.js']
    }]
  ]
}