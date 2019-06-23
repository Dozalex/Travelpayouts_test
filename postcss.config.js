module.exports = {
  plugins: [
    require('postcss-custom-properties'),
    require('autoprefixer')({
      browsers: ['last 2 versions', 'ie > 10'],
      grid: true,
    }),
    require('postcss-color-function'),
    require('postcss-nested'),
  ],
};
