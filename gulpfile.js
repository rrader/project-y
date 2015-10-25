var gulp = require('gulp');
var concat = require('gulp-concat');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var exec = require('child_process').exec

var path = {
  static: ['ui/**/*.html'],
  jsMain: 'ui/js/app.js',
  jsFiles: ['ui/js/*.js', 'ui/js/**/*.js'],
  cssFiles: ['ui/css/*.css', 'ui/css/**/*.css'],
  jsDev: 'ui/js',
  cssDev: 'ui/css',
  jsProd: 'ui-dist/js',
  cssProd: 'ui-dist/css',
  prod: 'ui-dist'
};

function concatCSS (output) {
  return gulp.src(path.cssFiles)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(output));
}

function browserifyJS (output) {
  var b = browserify({
    entries: path.jsMain,
    transform: [babelify]
  });

  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(output));
}

gulp.task('bundle-js', function () {
  browserifyJS(path.jsDev);
});

gulp.task('bundle-js-prod', function () {
  browserifyJS(path.jsProd);
});

gulp.task('bundle-css', function () {
  concatCSS(path.cssDev);
});

gulp.task('bundle-css-prod', function () {
  concatCSS(path.cssProd);
});

gulp.task('copy-static', function (){
  gulp.src(path.static)
    .pipe(gulp.dest(path.prod));
});

gulp.task('build', ['bundle-js-prod', 'bundle-css-prod', 'copy-static']);

gulp.task('watch-css', function () {
  gulp.watch(path.cssFiles, ['bundle-css']);
});

gulp.task('watch', function () {
  gulp.watch(path.cssFiles, ['bundle-css-prod']);
  gulp.watch(path.jsFiles, ['bundle-js-prod']);
  gulp.watch(path.static, ['copy-static']);
});

// Python tasks

gulp.task('serve', function() {
  proc = exec('source venv/bin/activate;' +
    'PYTHONUNBUFFERED=1 ./manage.py collectstatic --noinput;' +
    'PYTHONUNBUFFERED=1 ./manage.py migrate --noinput;' +
    'PYTHONUNBUFFERED=1 ./manage.py runserver');
  proc.stderr.on('data', function(data) {
    process.stdout.write(data);
  });
  proc.stdout.on('data', function(data) {
    process.stdout.write(data);
  });
});

gulp.task('default', ['watch', 'serve']);
gulp.task('production', ['build']);
