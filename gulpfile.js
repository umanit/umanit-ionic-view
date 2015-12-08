var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sh = require('shelljs');
var minify = require('gulp-minify');

var paths = {
  sass: ['./scss/**/*.scss'],
  js: ['./lib/*.js', './lib/**/*.js']
};

gulp.task('default', ['js']);

gulp.task('js', [], function(done) {
  gulp.src(paths.js)
   .pipe(minify({}))
   .pipe(gulp.dest('./dist/'))
   .on('end', done)
  ;
});
