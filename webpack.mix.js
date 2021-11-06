let mix = require('laravel-mix');

mix.js('src/js/app.js', 'js')
  .sass('src/scss/app.scss', 'css')
  .sass('src/scss/style.scss', 'css')
  .setPublicPath('public');