const fw500 = require('./postcss-fw500.js')
const autoprefixer = require('autoprefixer')
const postcssPxToViewport = require('postcss-px-to-viewport')

module.exports = {
  plugins:[
    fw500(),
    autoprefixer(),
    postcssPxToViewport({
      viewportWidth: 375,
      viewportHeight: 1920,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: [
        '.usepixel',
        '.ignore',
        '.hairlines',
        'van-circle__layer',
        '#disease-wrap-x',
        '.disease-map',
      ],
      minPixelValue: 1,
      mediaQuery: false,
    }),
  ],
}
