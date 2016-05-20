var gulp = require('gulp');
var webpack = require('webpack-stream');
var serve = require('gulp-serve');
// var jsonServer = require('json-server');

// Webpack
gulp.task('webpack', function() {
  return gulp.src('./app/router.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./dist'));
});

// Web Server
gulp.task('serve:web', serve({
  root: ['.'],
  port: 8000
}));

// Watch
gulp.task('watch', function() {
    gulp.watch('./app/**/*', ['webpack'])
})

gulp.task('default', ['webpack', 'serve:web', 'watch']);
