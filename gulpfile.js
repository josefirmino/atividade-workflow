// Variáveis:
var gulp = require('gulp');
<<<<<<< HEAD
var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');
=======
var minifyCSS = require('gulp-minify-css');
var htmlmin = require('gulp-htmlmin');
>>>>>>> 9f4e8ff2a3cfaf99749b50c77e65101df0c14c3e

// Variáveis Diretórios :
var SRCcss = './source/scss/*.scss';
var SRChtml = './source/*.html';

<<<<<<< HEAD
// Compilar e Minificar SCSS
gulp.task('sass', function () {
 return gulp.src(SRCcss)
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest('./dist/css'));
=======
// Minify CSS:
gulp.task('minify-css',function(){
	return gulp.src('./source/scss/*.scss')
	 .pipe(minifyCSS({
	 	keepSpecialComments: 1
	 }))
	 .pipe(gulp.dest('./dist/css'))
>>>>>>> 9f4e8ff2a3cfaf99749b50c77e65101df0c14c3e
});

// Minify Html:
gulp.task('minify-html', function() {
  return gulp.src(SRChtml)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));
});

// Watch
gulp.task('default',function(){
<<<<<<< HEAD
	 gulp.watch(SRCcss, ['sass'])
=======
	 gulp.watch(SRCcss, ['minify-css'])
>>>>>>> 9f4e8ff2a3cfaf99749b50c77e65101df0c14c3e
	 gulp.watch(SRChtml, ['minify-html'])
});
