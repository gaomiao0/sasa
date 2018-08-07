var gulp = require("gulp");
//var sass = require("gulp-sass");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var connect = require("gulp-connect");
//定义一个复制文件的任务（命令）
gulp.task("copyfile",function(){
	gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\sasa"));
});
gulp.task("copycss",function(){
	gulp.src("css/*.css").pipe(gulp.dest("D:\\phpStudy\\WWW\\sasa\\css"));
});
gulp.task("copyfont",function(){
	gulp.src("font/*.eot").pipe(gulp.dest("D:\\phpStudy\\WWW\\sasa\\font"));
	gulp.src("font/*.svg").pipe(gulp.dest("D:\\phpStudy\\WWW\\sasa\\font"));
	gulp.src("font/*.ttf").pipe(gulp.dest("D:\\phpStudy\\WWW\\sasa\\font"));
	gulp.src("font/*.woff").pipe(gulp.dest("D:\\phpStudy\\WWW\\sasa\\font"));
	
});
gulp.task("copybig",function(){
	gulp.src("big/*.{jpg,png,bmp}").pipe(gulp.dest("D:\\phpStudy\\WWW\\sasa\\big"));
});
gulp.task("copyimages",function(){
	gulp.src("images/*.{jpg,png,bmp}").pipe(gulp.dest("D:\\phpStudy\\WWW\\sasa\\images"));
});
gulp.task("copymid",function(){
	gulp.src("mid/*.{jpg,png,bmp}").pipe(gulp.dest("D:\\phpStudy\\WWW\\sasa\\mid"));
});
gulp.task("copysmall",function(){
	gulp.src("small/*.{jpg,png,bmp}").pipe(gulp.dest("D:\\phpStudy\\WWW\\sasa\\small"));
});
gulp.task("copyphp",function(){
	gulp.src("php/*.php").pipe(gulp.dest("D:\\phpStudy\\WWW\\sasa\\php"));
});
//复制图片文件
gulp.task("copyimgs",function(){
	gulp.src("imgs/*.{jpg,png,bmp}")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\sasa\\imgs"));
});
gulp.task("copyjs",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\sasa\\js"));
});
//
//gulp.task("copysass",function(){
//	gulp.src(["scss/*.scss"])
//	.pipe(sass())
//	.pipe(gulp.dest("D:\\phpStudy\\WWW\\sasa\\css"));
//});
//合并压缩重命名文件
gulp.task("minijs",function(){
	gulp.src(["js/index.js","js/index.js"])
	.pipe(concat("common.js"))
	.pipe(uglify())
	.pipe(rename("common.min.js"))
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\sasa\\js"));
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
	gulp.watch("imgs/*.{jpg,png,bmp}",["copyimgs"]);
	gulp.watch("big/*.{jpg,png,bmp}",["copybig"]);
	gulp.watch("mid/*.{jpg,png,bmp}",["copymid"]);
	gulp.watch("images/*.{jpg,png,bmp}",["copyimages"]);
	gulp.watch("small/*.{jpg,png,bmp}",["copysmall"]);
	gulp.watch("php/*.php",["copyphp"]);
	gulp.watch("js/*.js",["copyjs"]);
	gulp.watch("css/*.css",["copycss"]);
//	gulp.watch(["scss/*.scss"],["copysass"]);
});


//简易的web服务器
gulp.task("server",function(){
	connect.server({
		"root":"dist",
		"livereload":true
	});
});
 