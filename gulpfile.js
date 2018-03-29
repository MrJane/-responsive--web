//引入gulp
var gulp = require('gulp');
//引入压缩JS插件
var uglify = require('gulp-uglify');
// 引入less插件
var less = require('gulp-less');
// 引入图片压缩插件
var imagemin = require('gulp-imagemin');
//引入压缩css
var cleancss = require('gulp-clean-css');
var rename = require('gulp-rename')
var webserver =require('gulp-webserver')
var livereload = require('gulp-livereload')
//
gulp.task("css",function(){
	gulp.src('./styles/less/*.less')//源文件
	.pipe(less())
	.pipe(cleancss())
		.pipe(rename({
			suffix:'.min'
		}))
	.pipe(gulp.dest('./dist/css/'))
})
gulp.task("js",function () {
	gulp.src('./scripts/*.js')
		.pipe(uglify())
		.pipe(rename({
			suffix:'.min'
		}))
		.pipe(gulp.dest('./dist/js/'))
})
gulp.task('imagemin',function () {
	gulp.src('./images/**')
		.pipe(imagemin())
		.pipe(gulp.dest('./dist/images'))
})
gulp.task('mywatch',function () {
	gulp.watch('./styles/less/*.less',['css']);
	gulp.watch('./scripts/*.js',['js'])
})
gulp.task('webserver',function () {
	gulp.src('./')
		.pipe(webserver({
            livereload:true,
			open:true
		}))
})
gulp.task('default',['webserver','mywatch']);