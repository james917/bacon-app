var gulp =  require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    less  = require('gulp-less'),
    path  = require('path'),
    webserver = require('gulp-webserver');


gulp.task('less', function(){
  gulp.src('./bower_components/bootstrap/less/bootstrap.less')
  .pipe(less({
    paths: [ path.join(__dirname, 'less', 'includes') ]
  }))
  .pipe(less())
  .pipe(gulp.dest('builds/app/css'))
});

gulp.task('scripts', function() {
  //console.log('works');
  gulp.src('builds/app/jquery/*.js')
  .pipe(rename({suffix:'.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('builds/app/js'));
});


  gulp.task('html', function(){
      gulp.src('builds/app/*.html')
  });



gulp.task('watch', function(){
  gulp.watch(['builds/app/*.html'], ['html'])
  gulp.watch('./bower_components/bootstrap/less/*.less', ['less']);
  gulp.watch('builds/app/js/**/*.js', ['scripts']);
});


  gulp.task('webserver', function(){
    gulp.src('builds/app/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
  });


  gulp.task('default', ['watch', 'scripts', 'less', 'html', 'webserver' ]);