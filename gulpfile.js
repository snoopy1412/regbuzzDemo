var gulp = require('gulp'),
	ejs = require('gulp-ejs'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
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
		.pipe(gulp.dest('./Public/css'));
});

// gulp.task('script',function(){
//     // 1. 找到文件
//     gulp.src('java/*.js')
//     gulp.src(['java/jquery.fileupload.js','java/jquery.fileupload-process.js','java/jquery.fileupload-validate.js','java/jquery.fileupload-ui.js'])  //要合并的文件
//     // 2. 压缩文件
//     .pipe(concat('jquery.fileupload.js'))    //合并所有js到main.js
//     .pipe(gulp.dest('dist/js'))    //输出main.js到文件夹
//     .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
//     .pipe(uglify())    //压缩
//     .pipe(gulp.dest('dist/js'));  //输出
// })

gulp.task('watch', function() {
	gulp.watch(["./dev/*.html"], ['ejs']);
	gulp.watch(['./sass/*.scss', './sass/**/*.scss'], ['sass']);
})
