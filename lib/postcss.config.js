module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-simple-vars': {},
    'postcss-nested': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
    },
    'postcss-stack': {
      list: [
        'main',
        'header',
        'modal'
      ]
    }
  },
};