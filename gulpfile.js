"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var csso = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var sprite = require("gulp-svgstore");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var del = require("del");
var htmlmin = require("gulp-htmlmin");

gulp.task("css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))

    .pipe(csso())
    .pipe(rename("style.min.css"))

    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("server", function () {
  server.init({
    server: "build/"
    // notify: false,
    // open: true,
    // cors: true,
    // ui: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css"));
  gulp.watch("source/img/sprite-*.svg", gulp.series("sprite", "posthtml", "refresh"));
  gulp.watch("source/js/**/*.js", gulp.series("copy-js", "refresh"));
  gulp.watch("source/*.html", gulp.series("posthtml", "refresh"));
});

gulp.task("refresh", function(done) {
  server.reload();
  done();
})

gulp.task("imagemin", function() {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.jpegtran({progressive: true}),
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.svgo()
]))
  .pipe(gulp.dest("source/img"))
});


gulp.task("webp", function() {
  return gulp.src("source/img/**/*.{png,jpg}")
  .pipe(webp({quality: 90}))

  .pipe(gulp.dest("source/img"))
});

gulp.task("sprite", function(){
  return gulp.src("source/img/sprite-*.svg")

  .pipe(sprite({
    inlineSvg: true
  }))
  .pipe(rename("sprite.svg"))

  .pipe(gulp.dest("build/img"))
});

gulp.task("posthtml", function() {
  return gulp.src("source/*.html")

  .pipe(posthtml([
    include()
  ]))

  .pipe(htmlmin({ collapseWhitespace: true }))

  .pipe(gulp.dest("build"))
});

gulp.task("copy-js", function() {
  return gulp.src([
    "source/js/**"
  ], {
    base:"source"
  })
  .pipe(gulp.dest("build"));
});


gulp.task("copy", function() {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/**"
  ], {
    base:"source"
  })
  .pipe(gulp.dest("build"));
});

gulp.task ("clean", function(){
  return del("build");
});

gulp.task("gulp-htmlmin", function(){
  return gulp.src("build/source/*.html")
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest("build"));
})


gulp.task("build", gulp.series("clean", "copy", "css", "sprite", "posthtml"));
gulp.task("start", gulp.series("build", "server"));
