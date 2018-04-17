var gulp = require('gulp');
var suffixTime = require('gulp-suffix-time');

gulp.task('suffix',['suffixCss'],function() {
    gulp.src("./test/test.html")
        .pipe(suffixTime())
        .pipe(gulp.dest('./dest/'));
});

gulp.task('suffixCss',function () {
    return gulp.src('./test/styles/test.css')
        .pipe(suffixTime())
        .pipe(gulp.dest('./dest/styles/'))
});
gulp.task('default',['suffix']);