const autoprefixer  = require('gulp-autoprefixer'),
      babel         = require('gulp-babel'),
      browserSync   = require('browser-sync'),
      concat        = require('gulp-concat'),
      cssnano       = require('gulp-cssnano'),
      del           = require('del'),
      gulp          = require('gulp'),
      rename        = require('gulp-rename'),
      sass          = require('gulp-sass'),
      shell         = require('gulp-shell'),
      sourcemaps    = require('gulp-sourcemaps'),
      uglify        = require('gulp-uglify');



const server = browserSync.create();

const karmaTestCommand = 'node_modules/karma/bin/karma start karma.conf.js';

const paths = {
  fa_webfonts: {
    src: 'node_modules/@fortawesome/fontawesome-free/webfonts/*',
    dest: 'dist/webfonts'
  },
  img: {
    src: 'src/img/**/*',
    dest: 'dist/img'
  },
  html: {
    src: 'src/**/**.html',
    dest: 'dist'
  },
  scss: {
    src: 'src/scss/**/**.scss',
    dest: 'dist/css'
  },
  headjs:  {
    src: [
      'src/js/vendor/modernizr.min.js'
    ],
    dest: 'dist/js/'
  },
  bodyjs: {
    src: [
      'node_modules/@fortawesome/fontawesome-free/js/all.min.js',
      'src/js/global.js',
      'src/js/utilities.js',
      'src/js/show-hide.js'
    ],
    dest: 'dist/js/'
  },
  dist: {
    local: 'dist/**/*',
    live: '/var/www/html'
  }
};

const clean_dev_dist = () => del(['dist']);

// Delete all files in a directory without deleting the
// directory itself.
const clean_live_dist = () => del(
  [paths.dist.live + '/**', '!' + paths.dist.live], 
  {force: true}
);



// Copy Font Awesome web fonts into distribution.
function fa_webfonts() {
  return gulp.src(paths.fa_webfonts.src)
  .pipe(gulp.dest(paths.fa_webfonts.dest))
  .pipe(browserSync.reload({
    stream: true
  }));
}



// Copy image assets into distribution.
function img() {
  return gulp.src(paths.img.src)
  .pipe(gulp.dest(paths.img.dest))
  .pipe(browserSync.reload({
    stream: true
  }));
}



// Copy HTML files into distribution.
function html() {
  return gulp.src(paths.html.src)
  .pipe(gulp.dest(paths.html.dest))
  .pipe(browserSync.reload({
    stream: true
  }));
}



// Build SCSS into CSS and minify as part of the build operation to the local server.
function scss_prototype() {
  return gulp.src(paths.scss.src)
    .pipe(sass().on('error', function(err) { // Converts SCSS to CSS with gulp-sass
      console.error(err.message);
      browserSync.notify(err.message, 3000); // Display error in the browser.
      this.emit('end'); // Prevent gulp from catching the error and exiting the watch process.
    }))
  .pipe(autoprefixer())
  .pipe(gulp.dest('dist/css/'))
  .pipe(rename({suffix: '.min'}))
  .pipe(cssnano())
  .pipe(gulp.dest(paths.scss.dest))
  .pipe(browserSync.reload({
    stream: true
  }));
}



// Build SCSS into CSS and minify as part of the deploy operation to the live server.
// Here we want to kill the Gulp process if an error is encountered so that we don't
// deploy a broken build.
function scss_deploy() {
  return gulp.src(paths.scss.src)
  .pipe(sass().on('error', function(err) { // Converts SCSS to CSS with gulp-sass
    console.error(err.message);
  }))
  .pipe(autoprefixer())
  .pipe(gulp.dest('dist/css/'))
  .pipe(rename({suffix: '.min'}))
  .pipe(cssnano())
  .pipe(gulp.dest(paths.scss.dest));
}



// Build JavaScript that can be imported in the body for regular HTML interactions.
function bodyjs() {
  return gulp.src(paths.bodyjs.src)
  .pipe(sourcemaps.init( {loadMaps: true}))
  .pipe(concat('all.body.min.js'))
  .pipe(babel({
    presets: ['@babel/env'],
    compact: false
  }))
  .pipe(uglify())
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest(paths.bodyjs.dest, {newLine:'\r\n'}))
  .pipe(browserSync.reload({
    stream: true
  }));
}



// Build JavaScript that we need to load in the head that needs to provide
// functionality before the DOM is fully loaded (eg feature detection).
function headjs() {
  return gulp.src(paths.headjs.src)
  .pipe(concat('all.head.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest(paths.headjs.dest, {newLine:'\r\n'}))
  .pipe(browserSync.reload({
    stream: true
  }));
}

// Copy all files from local dist directory to the web server directory.
function deploy_to_server() {
  return gulp.src(paths.dist.local)
  .pipe(gulp.dest(paths.dist.live));
}



function reload(done) {
  server.reload();
  done();
}



function serve(done) {
  server.init({
    server: {
      baseDir: 'dist'
    }
  });
  done();
}



function watch() {
  gulp.watch(paths.img.src, gulp.series(img, reload));
  gulp.watch(paths.html.src, gulp.series(html, reload));
  gulp.watch(paths.scss.src, gulp.series(scss_prototype, reload));
  gulp.watch(paths.headjs.src, gulp.series(headjs, reload));
  gulp.watch(paths.bodyjs.src, gulp.series(bodyjs, reload));
}



const deploy = gulp.series(clean_dev_dist, fa_webfonts, img, html, scss_deploy, headjs, bodyjs,
  clean_live_dist, deploy_to_server);

const build = gulp.series(clean_dev_dist, fa_webfonts, img, html, scss_prototype, headjs, bodyjs);

const dev = gulp.series(build, serve, watch);



//Initial Build task
gulp.task('build', build);

// Deploy task to be run on the live server.
gulp.task('deploy', deploy);

// Default task
gulp.task('dev', dev);

// Run unit tests.
gulp.task('test', shell.task(karmaTestCommand));