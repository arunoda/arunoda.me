const env = require("./env-config.js");

module.exports = {
  "presets": [
    "next/babel"
  ],
  "plugins": [
    ["transform-define", env],
    "markdown-in-js/babel",
    "babel-plugin-root-import"
  ]
}
