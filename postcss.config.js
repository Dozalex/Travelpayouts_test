module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['last 2 versions'],
    }),
    require('postcss-custom-properties'),
    require('postcss-nested'),
  ],
};
