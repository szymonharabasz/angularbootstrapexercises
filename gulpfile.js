var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var pkg = require('./package.json');
var ngAnnotate = require('gulp-ng-annotate');
var less = require('gulp-less');
var livereload = require('gulp-livereload');

var paths = {
    js: [
        'app/vendor/jquery.js',
        'app/vendor/bootstrap.js',
        'app/vendor/angular.js',
        'app/vendor/angular-animate.js',
        'app/vendor/angular-resource.js',
        'app/vendor/angular-route.js',
        'app/vendor/angular-sanitize.js',
        'app/vendor/angular-strap.js',
        'app/vendor/angular-strap.tpl.js',
        'app/module.js',
        'app/components/**/*.js',
        'app/views/**/*.js'
    ],
    less: 'assets/less/*.less'
};

gulp.task('less', function() {
    gulp.src('assets/less/bootstrap.less')
    .pipe(less({
        filename: 'bootstrap.css'
    }))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('uglify', function() {
    gulp.src(paths.js)
    .pipe(concat('ContactManager.min.js'))
    .pipe(ngAnnotate())
    .pipe(uglify({compress: false}))
    .pipe(gulp.dest('assets/js/build'));
});

gulp.task('watch', function() {
    var server = livereload();
    gulp.watch(paths.js, ['uglify']);
    gulp.watch(paths.less, ['less'])
    gulp.watch('assets/css/bootstrap.css').on('change', function (file) {
        server.changed(file.path);
    });
});

gulp.task('default', ['uglify']);