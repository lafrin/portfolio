let mix = require('laravel-mix');


mix.js('src/js/app.js', 'js')
  .js('src/js/portfolio.js', 'js')
  .js('src/js/kamihubuki.js', 'js')
  .setPublicPath('public');

// mix.js([
//   'public/js/app.js',
//   'public/js/portfolio.js'
//   ], './public/js/all.js')
//   .version();

mix.sass('src/scss/app.scss', 'css')
.sass('src/scss/style.scss', 'css')
.sass('src/scss/kamihubuki.scss', 'css')
.options({processCssUrls: false})
.setPublicPath('public');

// mix.styles([
//     'public/css/app.css',
//     'public/css/style.css'
//   ], 'public/css/all.css')
//   .version();

