'use strict';
var gulp = require('gulp'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps');
  
gulp.task('scss', ['scss-style', 'scss-bootstrap-mvc', 'scss-themes']);

gulp.task('scss-themes', [
  'scss-all-themes',
  'scss-theme-red',
  'scss-theme-amber',
  'scss-theme-blue-grey',
  'scss-theme-blue',
  'scss-theme-brown',
  'scss-theme-cyan',
  'scss-theme-deep-orange',
  'scss-theme-deep-purple',
  'scss-theme-green',
  'scss-theme-grey',
  'scss-theme-indigo',
  'scss-theme-light-blue',
  'scss-theme-lime',
  'scss-theme-orange',
  'scss-theme-pink',
  'scss-theme-purple',
  'scss-theme-teal',
  'scss-theme-yellow'
]);

gulp.task('scss-all-themes', function () {
  return gulp.src('./scss/themes/all-themes.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./wwwroot/css/themes'));
});

gulp.task('scss-bootstrap-mvc', function () {
  return gulp.src('./scss/bootstrap.mvc.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./wwwroot/css'));
});

gulp.task('scss-theme-red', function () {
  return gulp.src('./scss/themes/theme-red.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./wwwroot/css/themes'));
});

gulp.task('scss-theme-amber', function () {
  return gulp.src('./scss/themes/theme-amber.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./wwwroot/css/themes'));
});

gulp.task('scss-theme-blue-grey', function () {
  return gulp.src('./scss/themes/theme-blue-grey.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./wwwroot/css/themes'));
});

gulp.task('scss-theme-blue', function () {
  return gulp.src('./scss/themes/theme-blue.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./wwwroot/css/themes'));
});

gulp.task('scss-theme-brown', function () {
  return gulp.src('./scss/themes/theme-brown.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./wwwroot/css/themes'));
});

gulp.task('scss-theme-cyan', function () {
  return gulp.src('./scss/themes/theme-cyan.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./wwwroot/css/themes'));
});

gulp.task('scss-theme-deep-orange', function () {
  return gulp.src('./scss/themes/theme-deep-orange.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./wwwroot/css/themes'));
});

gulp.task('scss-theme-deep-purple', function () {
  return gulp.src('./scss/themes/theme-deep-purple.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./wwwroot/css/themes'));
});

gulp.task('scss-theme-green', function () {
  return gulp.src('./scss/themes/theme-green.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./wwwroot/css/themes'));
});

gulp.task('scss-theme-grey', function () {
  return gulp.src('./scss/themes/theme-grey.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./wwwroot/css/themes'));
});

gulp.task('scss-theme-indigo', function () {
  return gulp.src('./scss/themes/theme-indigo.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./wwwroot/css/themes'));
});

gulp.task('scss-theme-light-blue', function () {
  return gulp.src('./scss/themes/theme-light-blue.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./wwwroot/css/themes'));
});

gulp.task('scss-theme-lime', function () {
  return gulp.src('./scss/themes/theme-lime.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./wwwroot/css/themes'));
});

gulp.task('scss-theme-indigo', function () {
  return gulp.src('./scss/themes/theme-indigo.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./wwwroot/css/themes'));
});

gulp.task('scss-theme-orange', function () {
  return gulp.src('./scss/themes/theme-orange.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./wwwroot/css/themes'));
});

gulp.task('scss-theme-pink', function () {
  return gulp.src('./scss/themes/theme-pink.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./wwwroot/css/themes'));
});

gulp.task('scss-theme-purple', function () {
  return gulp.src('./scss/themes/theme-purple.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./wwwroot/css/themes'));
});

gulp.task('scss-theme-teal', function () {
  return gulp.src('./scss/themes/theme-teal.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./wwwroot/css/themes'));
});

gulp.task('scss-theme-yellow', function () {
  return gulp.src('./scss/themes/theme-yellow.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./wwwroot/css/themes'));
});

gulp.task('scss-style', function () {
  return gulp.src('./scss/style.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./wwwroot/css'));
});

gulp.task('scss:watch', function () {
  gulp.watch('./scss/**/*.scss', ['scss']);
});