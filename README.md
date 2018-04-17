## gulp-suffix-time

给静态文件添加时间戳(?v=)

## 安装

```
npm install gulp-suffix-time
```

## 用法

```js
var gulp = require('gulp');
var suffixTime = require('gulp-suffix-time');

gulp.task('rev',function() {
    gulp.src("./test/test.html")
        .pipe(suffixTime())
        .pipe(gulp.dest('./'));
});
```

## 参数

无


## 例子

```js
var gulp = require('gulp');
var suffixTime = require('gulp-suffix-time');

gulp.task('suffix',['suffixCss'],function() {
    gulp.src("./test/test.html")
        .pipe(suffixTime())
        .pipe(gulp.dest('./test/'));
});

gulp.task('suffixCss',function () {
    return gulp.src('./test/styles/test.css')
        .pipe(suffixTime())
        .pipe(gulp.dest('./test/styles/'))
});
gulp.task('default',['suffix']);
```

### before: test.css
```css
body{background:url('../images/bg.png')}
```

### after: test.css
```css
body{background:url("../images/bg.png?v=201804161844"}
```
### before: test.html
```html
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <title></title>
    <link rel="stylesheet" href="./styles/test.css" type="text/css" />
</head>
<body>
    <div>
        <img src="./images/test.png" />
    </div>
    <script src="./scripts/test.js" type="text/javascript"></script>
</body>
</html>
```
### after: test.html

```html
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <title></title>
    <link rel="stylesheet" href="./styles/test.css?v=201804161844" type="text/css" />
</head>
<body>
    <div>
        <img src="./images/test.png?v=201804161844" />
    </div>
    <script src="./scripts/test.js?v=201804161844" type="text/javascript"></script>
</body>
</html>
```



