const pages = require('./pages');

module.exports = {
  pages,
  publicPath: "/",
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "*"
      },
      port: 8001
    }
}