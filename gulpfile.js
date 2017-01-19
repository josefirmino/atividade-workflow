// Variáveis:
var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var htmlmin = require('gulp-htmlmin');

// Variáveis Diretórios :
var SRCcss = './source/scss/*.scss';
var SRChtml = './source/*.html';

// Minify CSS:
gulp.task('minify-css',function(){
	return gulp.src('./source/scss/*.scss')
	 .pipe(minifyCSS({
	 	keepSpecialComments: 1
	 }))
	 .pipe(gulp.dest('./dist/css'))
});

// Minify Html:
gulp.task('minify-html', function() {
  return gulp.src(SRChtml)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));
});

// Watch
gulp.task('default',function(){
	 gulp.watch(SRCcss, ['minify-css'])
	 gulp.watch(SRChtml, ['minify-html'])
});
