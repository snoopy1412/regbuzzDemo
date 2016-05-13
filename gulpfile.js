var gulp = require('gulp'),
	ejs = require('gulp-ejs'),
	eslint = require('gulp-eslint'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	connect = require('gulp-connect');;

gulp.task('ejs', function() {
	gulp.src(["./dev/*.html"])
		.pipe(ejs({
			msg: "Hello Gulp!"
		}, {
			ext: '.html'
		}))
		.pipe(gulp.dest("./"));
});

gulp.task('lint', function() {
	return gulp.src(['**/*.js', '!node_modules/**','!./components/**','!./Public/plugins/**'])
		// eslint() attaches the lint output to the "eslint" property 
		// of the file object so it can be used by other modules. 
		.pipe(eslint())
		// eslint.format() outputs the lint results to the console. 
		// Alternatively use eslint.formatEach() (see Docs). 
		.pipe(eslint.format())
		// To have the process exit with an error code (1) on 
		// lint error, return the stream and pipe to failAfterError last. 
		.pipe(eslint.failAfterError());
})

gulp.task('sass', function() {
	gulp.src(['./sass/*.scss', './sass/**/*.scss'])
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./Public/css'));
});

gulp.task('connect', function() {
	connect.server({
		root: './',
		livereload: true
	});
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

gulp.task('default', ['connect', 'watch']);