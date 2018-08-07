var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var connect = require("gulp-connect");
//定义一个复制文件的任务（命令）
gulp.task("copyfile",function(){
	gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\speakenglish"));
});
gulp.task("copycss",function(){
	gulp.src("css/*.css").pipe(gulp.dest("D:\\phpStudy\\WWW\\speakenglish\\css"));
});
gulp.task("copyfont",function(){
	gulp.src("font/*.eot").pipe(gulp.dest("D:\\phpStudy\\WWW\\speakenglish\\font"));
	gulp.src("font/*.svg").pipe(gulp.dest("D:\\phpStudy\\WWW\\speakenglish\\font"));
	gulp.src("font/*.ttf").pipe(gulp.dest("D:\\phpStudy\\WWW\\speakenglish\\font"));
	gulp.src("font/*.woff").pipe(gulp.dest("D:\\phpStudy\\WWW\\speakenglish\\font"));
	
});
//复制图片文件
gulp.task("img",function(){
	gulp.src("img/*.{jpg,png}")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\speakenglish\\img"));
});
gulp.task("copyjs",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\speakenglish\\js"));
});
//
gulp.task("sassfile",function(){
	gulp.src(["scss/*.scss"])
	.pipe(sass())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\speakenglish\\css"));
});nod
//合并压缩重命名文件
gulp.task("minijs",function(){
	gulp.src(["js/index.js","js/index.js"])
	.pipe(concat("common.js"))
	.pipe(uglify())
	.pipe(rename("common.min.js"))
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\speakenglish\\js"));
});

//合并和压缩重命名文件
gulp.task("babel",function(){
	gulp.src("js/goodsdetail.js")
	.pipe(babel())
	.pipe(gulp.dest("dist\\js"));
});

//启动监听器
gulp.task("watch",function(){
	gulp.watch("*.html",["copyfile"]);
	gulp.watch("img/*.{jpg,png}",["img"]);
	gulp.watch("js/*.js",["copyjs"]);
	gulp.watch("css/*.css",["copycss"]);
	gulp.watch(["scss/*.scss"],["sassfile"]);
});


//简易的web服务器
gulp.task("server",function(){
	connect.server({
		"root":"dist",
		"livereload":true
	});
});
 