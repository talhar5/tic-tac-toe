const path = require('path')

export default {
  root: path.resolve(__dirname, './src/'),
  build: {
    outDir: '../dist', emptyOutDir: true
  },
  base: "./",
  server: {
    port: 8080,
    hot: true
  }
}