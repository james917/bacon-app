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
          'builds/app/sigma/src/sigma.core.js',
          'builds/app/sigma/src/sigma.core.js',
          'builds/app/sigma/src/conrad.js',
          'builds/app/sigma/src/utils/sigma.utils.js',
          'builds/app/sigma/src/utils/sigma.polyfills.js',
          'builds/app/sigma/src/sigma.settings.js',
          'builds/app/sigma/src/classes/sigma.classes.dispatcher.js',
          'builds/app/sigma/src/classes/sigma.classes.configurable.js',
          'builds/app/sigma/src/classes/sigma.classes.graph.js',
          'builds/app/sigma/src/classes/sigma.classes.camera.js',
          'builds/app/sigma/src/classes/sigma.classes.quad.js',
          'builds/app/sigma/src/captors/sigma.captors.mouse.js',
          'builds/app/sigma/src/captors/sigma.captors.touch.js',
          'builds/app/sigma/src/renderers/sigma.renderers.canvas.js',
          'builds/app/sigma/src/renderers/sigma.renderers.webgl.js',
          'builds/app/sigma/src/renderers/sigma.renderers.def.js',
          'builds/app/sigma/src/renderers/webgl/sigma.webgl.nodes.def.js',
          'builds/app/sigma/src/renderers/webgl/sigma.webgl.nodes.fast.js',
          'builds/app/sigma/src/renderers/webgl/sigma.webgl.edges.def.js',
          'builds/app/sigma/src/renderers/webgl/sigma.webgl.edges.fast.js',
          'builds/app/sigma/src/renderers/webgl/sigma.webgl.edges.arrow.js',
          'builds/app/sigma/src/renderers/canvas/sigma.canvas.labels.def.js',
          'builds/app/sigma/src/renderers/canvas/sigma.canvas.hovers.def.js',
          'builds/app/sigma/src/renderers/canvas/sigma.canvas.nodes.def.js',
          'builds/app/sigma/src/renderers/canvas/sigma.canvas.edges.def.js',
          'builds/app/sigma/src/renderers/canvas/sigma.canvas.edges.curve.js',
          'builds/app/sigma/src/renderers/canvas/sigma.canvas.edges.arrow.js',
          'builds/app/sigma/src/renderers/canvas/sigma.canvas.edges.curvedArrow.js',
          'builds/app/sigma/src/middlewares/sigma.middlewares.rescale.js',
          'builds/app/sigma/src/middlewares/sigma.middlewares.copy.js',
          'builds/app/sigma/src/misc/sigma.misc.animation.js',
          'builds/app/sigma/src/misc/sigma.misc.bindEvents.js',
          'builds/app/sigma/src/misc/sigma.misc.drawHovers.js',
          'builds/app/sigma/src/plugins/sigma.layout.forceAtlas2/worker.js',
          'builds/app/sigma/src/plugins/sigma.layout.forceAtlas2/supervisor.js'


           ])
  .pipe(concat('main.js'))
  .pipe(gulp.dest('builds/app/js'))
  // gulp.src(['builds/app/js/*main.js', '! builds/app/js/*min.js'])
  // .pipe(rename({suffix:'.min'}))
  // .pipe(uglify())
  // .pipe(gulp.dest('builds/app/js/'));
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