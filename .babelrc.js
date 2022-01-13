const DebugePlugin = require('./debuge-babel-plugin')

module.exports = {
  "presets": [ "@babel/preset-react"],
  
  // presets: [
  //   ['babel-preset-react-app', {
  //     development: true
  //   }],
  // ],
  plugins: [
    [DebugePlugin, {
      isRouterFile: (filename) => {
        return true
      },
      // excludes: ['**/other-router.js']
    }]
  ]
}