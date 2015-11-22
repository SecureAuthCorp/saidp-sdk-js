var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var bump = require('gulp-bump');
var gutil = require('gulp-util');
var git = require('gulp-git');
var clean = require('gulp-clean');
var fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));

gulp.task('clean', function() {
  return gulp.src('dist')
    .pipe(clean());
});
gulp.task('compress', function() {
  return gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist'));
});
gulp.task('bump', function() {
  return gulp.src('./package.json')
    .pipe(bump({
      type: argv.level
    }).on('error', gutil.log))
    .pipe(gulp.dest('./'));
});

gulp.task('commit', function() {
  return gulp.src('.')
    .pipe(git.commit(argv.msg));
});

gulp.task('push', function(cb) {
  git.push('origin', 'master', cb);
});
