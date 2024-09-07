const gulp = require("gulp");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();

// Paths
const paths = {
  scripts: {
    src: "src/js/**/*.js",
    dest: "dist/js",
  },
  styles: {
    src: "src/scss/**/*.scss",
    dest: "dist/css",
  },
};

// Task: Minify JavaScript
function scripts() {
  return gulp
    .src(paths.scripts.src)
    .pipe(concat("app.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream());
}

// Task: Compile SCSS
function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

// Task: Serve and watch for changes
function serve() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });

  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.styles.src, styles);
  gulp.watch("*.html").on("change", browserSync.reload);
}

// Default task: Run everything
exports.default = gulp.series(gulp.parallel(styles, scripts), serve);
