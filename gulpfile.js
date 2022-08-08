const { src, dest, watch, series } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const browsersync = require("browser-sync").create();

function sassTask() {
  return src("src/sass/styles.sass", { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest("dist", { sourcemaps: "." }));
}

function jsTask() {
  return src("src/js/index.js", { sourcemaps: true })
    .pipe(terser())
    .pipe(dest("dist", { sourcemaps: "." }));
}

function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: ".",
    },
  });
  cb();
}

function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

function watchTask(){
    watch('*.html', browsersyncReload);
    watch(['src/sass/styles.sass', 'src/js/index.js'], series(sassTask, jsTask, browsersyncReload));
}

exports.default = series(sassTask, jsTask, browsersyncServe, watchTask);
