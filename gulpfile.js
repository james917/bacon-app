var gulp =  require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    // uglify = require('gulp-uglify'),
    // rename = require('gulp-rename'),
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
  gulp.src(['./bower_components/bootstrap/js/transition.js',
          './bower_components/bootstrap/js/alert.js',
          './bower_components/bootstrap/js/button.js',
          './bower_components/bootstrap/js/carousel.js',
          './bower_components/bootstrap/js/collapse.js',
          './bower_components/bootstrap/js/dropdown.js',
          './bower_components/bootstrap/js/modal.js',
          './bower_components/bootstrap/js/tooltip.js',
          './bower_components/bootstrap/js/popover.js',
          './bower_components/bootstrap/js/scrollspy.js',
          './bower_components/bootstrap/js/tab.js',
          './bower_components/bootstrap/js/affix.js',
          'builds/app/lib/sigma/src/sigma.core.js',
          'builds/app/lib/sigma/src/sigma.core.js',
          'builds/app/lib/sigma/src/conrad.js',
          'builds/app/lib/sigma/src/utils/sigma.utils.js',
          'builds/app/lib/sigma/src/utils/sigma.polyfills.js',
          'builds/app/lib/sigma/src/sigma.settings.js',
          'builds/app/lib/sigma/src/classes/sigma.classes.dispatcher.js',
          'builds/app/lib/sigma/src/classes/sigma.classes.configurable.js',
          'builds/app/lib/sigma/src/classes/sigma.classes.graph.js',
          'builds/app/lib/sigma/src/classes/sigma.classes.camera.js',
          'builds/app/lib/sigma/src/classes/sigma.classes.quad.js',
          'builds/app/lib/sigma/src/captors/sigma.captors.mouse.js',
          'builds/app/lib/sigma/src/captors/sigma.captors.touch.js',
          'builds/app/lib/sigma/src/renderers/sigma.renderers.canvas.js',
          'builds/app/lib/sigma/src/renderers/sigma.renderers.webgl.js',
          'builds/app/lib/sigma/src/renderers/sigma.renderers.def.js',
          'builds/app/lib/sigma/src/renderers/webgl/sigma.webgl.nodes.def.js',
          'builds/app/lib/sigma/src/renderers/webgl/sigma.webgl.nodes.fast.js',
          'builds/app/lib/sigma/src/renderers/webgl/sigma.webgl.edges.def.js',
          'builds/app/lib/sigma/src/renderers/webgl/sigma.webgl.edges.fast.js',
          'builds/app/lib/sigma/src/renderers/webgl/sigma.webgl.edges.arrow.js',
          'builds/app/lib/sigma/src/renderers/canvas/sigma.canvas.labels.def.js',
          'builds/app/lib/sigma/src/renderers/canvas/sigma.canvas.hovers.def.js',
          'builds/app/lib/sigma/src/renderers/canvas/sigma.canvas.nodes.def.js',
          'builds/app/lib/sigma/src/renderers/canvas/sigma.canvas.edges.def.js',
          'builds/app/lib/sigma/src/renderers/canvas/sigma.canvas.edges.curve.js',
          'builds/app/lib/sigma/src/renderers/canvas/sigma.canvas.edges.arrow.js',
          'builds/app/lib/sigma/src/renderers/canvas/sigma.canvas.edges.curvedArrow.js',
          'builds/app/lib/sigma/src/middlewares/sigma.middlewares.rescale.js',
          'builds/app/lib/sigma/src/middlewares/sigma.middlewares.copy.js',
          'builds/app/lib/sigma/src/misc/sigma.misc.animation.js',
          'builds/app/lib/sigma/src/misc/sigma.misc.bindEvents.js',
          'builds/app/lib/sigma/src/misc/sigma.misc.drawHovers.js',
          'builds/app/lib/sigma/src/plugins/sigma.layout.forceAtlas2/worker.js',
          'builds/app/lib/sigma/src/plugins/sigma.layout.forceAtlas2/supervisor.js'


           ])
  .pipe(concat('main.js'))
  .pipe(gulp.dest('builds/app/js'))
  // gulp.src(['builds/app/js/*main.js', '! builds/app/js/*min.js'])
  // .pipe(rename({suffix:'.min'}))
  // .pipe(uglify())
  // .pipe(gulp.dest('builds/app/js/'));
});


gulp.task('scripts', function() {
  gulp.src([
          'builds/app/libs/sigma/src/sigma.core.js',
          'builds/app/libs/sigma/src/sigma.core.js',
          'builds/app/libs/sigma/src/conrad.js',
          'builds/app/libs/sigma/src/utils/sigma.utils.js',
          'builds/app/libs/sigma/src/utils/sigma.polyfills.js',
          'builds/app/libs/sigma/src/sigma.settings.js',
          'builds/app/libs/sigma/src/classes/sigma.classes.dispatcher.js',
          'builds/app/libs/sigma/src/classes/sigma.classes.configurable.js',
          'builds/app/libs/sigma/src/classes/sigma.classes.graph.js',
          'builds/app/libs/sigma/src/classes/sigma.classes.camera.js',
          'builds/app/libs/sigma/src/classes/sigma.classes.quad.js',
          'builds/app/libs/sigma/src/captors/sigma.captors.mouse.js',
          'builds/app/libs/sigma/src/captors/sigma.captors.touch.js',
          'builds/app/libs/sigma/src/renderers/sigma.renderers.canvas.js',
          'builds/app/libs/sigma/src/renderers/sigma.renderers.webgl.js',
          'builds/app/libs/sigma/src/renderers/sigma.renderers.def.js',
          'builds/app/libs/sigma/src/renderers/webgl/sigma.webgl.nodes.def.js',
          'builds/app/libs/sigma/src/renderers/webgl/sigma.webgl.nodes.fast.js',
          'builds/app/libs/sigma/src/renderers/webgl/sigma.webgl.edges.def.js',
          'builds/app/libs/sigma/src/renderers/webgl/sigma.webgl.edges.fast.js',
          'builds/app/libs/sigma/src/renderers/webgl/sigma.webgl.edges.arrow.js',
          'builds/app/libs/sigma/src/renderers/canvas/sigma.canvas.labels.def.js',
          'builds/app/libs/sigma/src/renderers/canvas/sigma.canvas.hovers.def.js',
          'builds/app/libs/sigma/src/renderers/canvas/sigma.canvas.nodes.def.js',
          'builds/app/libs/sigma/src/renderers/canvas/sigma.canvas.edges.def.js',
          'builds/app/libs/sigma/src/renderers/canvas/sigma.canvas.edges.curve.js',
          'builds/app/libs/sigma/src/renderers/canvas/sigma.canvas.edges.arrow.js',
          'builds/app/libs/sigma/src/renderers/canvas/sigma.canvas.edges.curvedArrow.js',
          'builds/app/libs/sigma/src/middlewares/sigma.middlewares.rescale.js',
          'builds/app/libs/sigma/src/middlewares/sigma.middlewares.copy.js',
          'builds/app/libs/sigma/src/misc/sigma.misc.animation.js',
          'builds/app/libs/sigma/src/misc/sigma.misc.bindEvents.js',
          'builds/app/libs/sigma/src/misc/sigma.misc.drawHovers.js',
          'builds/app/libs/sigma/src/plugins/sigma.layout.forceAtlas2/worker.js',
          'builds/app/libs/sigma/src/plugins/sigma.layout.forceAtlas2/supervisor.js'


           ])
  .pipe(concat('sigma.js'))
  .pipe(gulp.dest('builds/app/js'))

});


gulp.task('scripts', function() {
  gulp.src(['builds/app/libs/angular/angular.js','builds/app/libs/angular/angular-route.js', 'builds/app/libs/angular/angular-animate.js'])
  .pipe(concat('angularbacon.js'))
  .pipe(gulp.dest('builds/app/js'))

});



  gulp.task('html', function(){
      gulp.src('builds/app/*.html')
  });



gulp.task('watch', function(){
  // gulp.watch(['builds/app/*.html'], ['html'])
  gulp.watch('./bower_components/bootstrap/less/*.less', ['less']);
  gulp.watch('builds/app/js/**/*.js', ['scripts']);
  gulp.watch(['builds/app/*.html','builds/app/views/*.html'], ['html']);
});


  gulp.task('webserver', function(){
    gulp.src('builds/app/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
  });


  gulp.task('default', ['watch', 'scripts', 'less', 'html', 'webserver' ]);