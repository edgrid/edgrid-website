```
'use strict';
const gulp = require('gulp'),
      sass = require('gulp-sass'),
      postcss = require('gulp-postcss'),
      autoprefixer = require('autoprefixer'),
      cssnano = require('cssnano');

let sassOptions = {
  outputStyle: 'compressed'
};

let postcssPlugins = [
  autoprefixer({browsers: 'last 2 versions'}),
  cssnano()
];

gulp.task('styles', () =>
  gulp.src('path')
      .pipe(sass(sassOptions))
      .pipe(postcss(postcssPlugins))
      .pipe(gulp.dest('path'))
);

gulp.task('sw', () =>
  gulp.watch('./**/**.scss', ['styles'])
);
```
