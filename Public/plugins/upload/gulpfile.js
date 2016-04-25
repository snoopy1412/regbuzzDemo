var gulp = require('gulp'),
	concat = require("gulp-concat"),
	uglify = require("gulp-uglify"),
	jshint = require('gulp-jshint');

	gulp.task('concat', function (){
	    gulp.src(['js/jquery.iframe-transport.js','js/jquery.fileupload.js','js/jquery.fileupload-process.js','js/jquery.fileupload-ui.js'])  //要合并的文件
	    .pipe(concat('all.js'))  // 合并匹配到的js文件并命名为 "all.js"
	    .pipe(uglify())
	    .pipe(gulp.dest('dist/js'));
	});	

	gulp.task('jsLint', function(){
	gulp.src(['dist/*.js'])
		.pipe(jshint())
		.pipe(jshint.reporter()); // 输出检查结果
	});

	gulp.task('watch', function(){
		gulp.watch(['dist/*.js'], ['jsLint']);
	});

	gulp.task('default',['concat'],function(){
		console.log('finished')
	});

