var gulp = require('gulp'),
	ejs = require('gulp-ejs'),
	sass = require('gulp-sass');

gulp.task('ejs', function() {  
  gulp.src(["./dev/*.html"])
	.pipe(ejs({
		msg: "Hello Gulp!"
	},{ext: '.html'}))
	.pipe(gulp.dest("./"));
});  

gulp.task('sass', function() {
	gulp.src(['./sass/*.scss', './sass/**/*.scss'])
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
	gulp.watch(["./dev/*.html"], ['ejs']);
	gulp.watch(['./sass/*.scss', './sass/**/*.scss'], ['sass']);
})
