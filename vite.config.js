const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  base: "/tic-tac-toe/",
  server: {
    port: 8080,
    hot: true
  }
}