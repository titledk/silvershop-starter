const gulp = require('gulp');
const babel = require('gulp-babel');
const notify = require('gulp-notify');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const livereload = require('gulp-livereload');
const concat = require('gulp-concat');
const filter = require('gulp-filter');

const isDev = typeof process.env.npm_config_development !== 'undefined';
process.env.NODE_ENV = isDev ? 'development' : 'production';

const PATHS = {
  MODULES: './node_modules',
  JS_SRC: './js/src',
  JS_DIST: './js/dist',
  CSS_SRC: './styles/src',
  CSS_DIST: './styles/dist',
};


gulp.task('bundle-libs', function() {
  return gulp.src([
    //there seems to be an issue with jquery 3 and our version of foundation
    //'node_modules/jquery/dist/jquery.min.js',
    'node_modules/foundation-sites/node_modules/jquery/dist/jquery.min.js',
    'node_modules/foundation-sites/dist/foundation.min.js',
  ])
    .pipe(concat('libs.js'))
    .pipe(gulp.dest(PATHS.JS_DIST));
});


gulp.task('css', () => {
  const outputStyle = isDev ? 'expanded' : 'compressed';

return gulp.src(`${PATHS.CSS_SRC}/**/*.scss`)
  .pipe(sourcemaps.init())
  .pipe(sass({ outputStyle })
    .on('error', notify.onError({
      message: 'Error: <%= error.message %>',
    }))
  )
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(PATHS.CSS_DIST))
  //fixes issue with live reload reloading the entire page
  //see https://github.com/vohof/gulp-livereload/issues/93
  .pipe(filter("**/*.css"))
  .pipe(livereload());
});


gulp.task('js', function () {
  return browserify('./js/src/site.js')
    .transform(babelify.configure({
      presets: ['es2015'] // Transform ES6 to ES5.
    }))
    .external('jQuery') // Get jQuery from another bundle at runtime.
    .bundle()
    .pipe(source('site.js'))
    .pipe(gulp.dest(PATHS.JS_DIST));
});


gulp.task('site-watch', () => {
  if (isDev) {
    livereload.listen();
    gulp.watch(`${PATHS.CSS_SRC}/**/*.scss`, ['css']);
    gulp.watch(`${PATHS.JS_SRC}/*/**.js`, ['js']);
  }
});


/**
 * Watch
 * the only actual needed command
 */
gulp.task('watch', [
  'css',
  'js',
  'bundle-libs',
  'site-watch'
]);
