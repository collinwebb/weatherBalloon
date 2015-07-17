var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    watch = require('gulp-watch'),
    run = require('run-sequence');


gulp.task('default', function (cb) {
  run('nyan', 'watch', cb);
});

gulp.task('watch', function(){
  return watch(['tests/**/*.js', 'routes/**.*.js'], function(){
    gulp.start('nyan');
  });
});

gulp.task('nyan', function(){
  return gulp.src('tests/tests.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}));
});
