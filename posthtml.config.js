module.exports = {
   plugins: [
      require('posthtml-include')({ root: 'src' }),
      require('posthtml-expressions')({}),
      require('posthtml-beautify')()
   ],
}