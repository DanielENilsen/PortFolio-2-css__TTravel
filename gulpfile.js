const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const { src, dest } = require('gulp');
const sass = require('gulp-sass');


function style() { 
    return src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(dest('./css'))
    .pipe(browserSync.stream());
   
}

function watch() { 
    browserSync.init({
        server: {
          baseDir: './',
        }
      });
    
    gulp.watch('./src/scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./src/page/**/*.html').on('change', browserSync.reload);
    gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);

}

exports.watch = watch;