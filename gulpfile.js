var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    browserSync  = require('browser-sync'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglifyjs'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano      = require('gulp-cssnano'),
    rename       = require('gulp-rename'),
    del          = require('del'),
    cache        = require('gulp-cache');

gulp.task('sass', function () {
   return gulp.src('app/sass/**/*.scss')
       .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
       .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
       .pipe(gulp.dest('app/css'))
       .pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts',  function (){
    return gulp.src([
        'app/lib/jquery/dist/jquery.min.js',
        'app/lib/flexslider/jquery.flexslider-min.js',
    ])
        .pipe(concat('lib.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});

gulp.task('css-libs', function () {
    return gulp.src('app/css/libs.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'));
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: './app'
        }
    });
});

gulp.task('sass:watch', ['browser-sync', 'sass', 'scripts'], function () {
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function() {

    var buildCss = gulp.src('app/css/main.css')
        .pipe(gulp.dest('dist/css')),

        buildFonts = gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts')),

        buildJs = gulp.src('app/js/**/*')
        .pipe(gulp.dest('dist/js')),

        buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));

});

gulp.task('clear', function (callback) {
    return cache.clearAll();
});

