var gulp = require("gulp"),
    less = require("gulp-less"),
    nano = require("gulp-cssnano"),
    browserSync = require("browser-sync").create(),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    addSrc = require("gulp-add-src");


gulp.task("html", function(){
    return gulp.src("src/*.html")
        .pipe(gulp.dest("dist"));
});

gulp.task("css", function(){
    return gulp.src("src/style/style.less")
        .pipe(less())
        .pipe(nano())
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});
gulp.task("img", function(){
    return gulp.src("src/img/**/*.{jpg,png}")
        .pipe(gulp.dest("dist/img"));
});
gulp.task("img", function(){
    return gulp.src("src/img/**/*.{jpg,png}")
        .pipe(gulp.dest("dist/img"));
});
gulp.task("fonts", function(){
    return gulp.src([

    ])
        .pipe(gulp.dest("dist/fonts"));
});
gulp.task("json", function(){
    return gulp.src("src/data/*.json")
        .pipe(gulp.dest("dist/data"));
});
gulp.task("vendor-css", function(){
    return gulp.src([
        "node_modules/bootstrap/dist/css/bootstrap.min.css",
        "node_modules/bootstrap/dist/css/bootstrap-theme.min.css",
        "node_modules/bootstrap/dist/css/bootstrap.css",
        "node_modules/toastr/build/toastr.css"


    ])
        .pipe(nano())
        .pipe(concat("vendor.min.css"))
        .pipe(gulp.dest("dist/css"));
});
gulp.task("js-vendor", function(){
    return gulp.src([
        "node_modules/jquery/dist/jquery.js",
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.js",
        "node_modules/bootstrap/dist/js/bootstrap.min.js",
        "node_modules/jquery-validation/dist/jquery.validate.js",
        "node_modules/jquery-validation/dist/additional-methods.js",
        "node_modules/toastr/build/toastr.min.js",
        "node_modules/datatables.net/js/jquery.dataTables.js",
        "src/js/main.js"
    ])
        .pipe(addSrc.prepend("node_modules/jquery/dist/jquery.js"))
        .pipe(concat("vendor.min.js"))
        .pipe(gulp.dest("dist/js"))
});
gulp.task("fonts", function(){
    return gulp.src("src/fonts/*")
        .pipe(gulp.dest("dist/fonts"));
});

gulp.task("watch", function(){
    browserSync.init({
        server: "dist"
    });
    gulp.watch("src/style/**/*.less", ["css"]);
    gulp.watch("src/**/*.html", ["html"]);
    gulp.watch("src/js/*.js", ["js-vendor"]);
    gulp.watch("dist/**/*.html").on("change", browserSync.reload);
    gulp.watch("dist/*.js").on("change", browserSync.reload);
});
gulp.task("default", ["html", "img", "fonts", "vendor-css", "css", "js-vendor", "json", "watch","fonts"]);