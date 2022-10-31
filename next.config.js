const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: ["medusa-file-server.s3.us-east-2.amazonaws.com", "localhost", "store.cyruskia.com", "api.cyruskia.com"],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
