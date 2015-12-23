var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');

//Defining the task to transform SCSS into CSS
gulp.task('styles', function(){
  gulp.src('public/sass/**/*.scss')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('babel', function(){
  return gulp.src('jsDev/*.js')
    .pipe(plumber())
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('./public/js/'))
});


//Watch task (to keep executing style on .scss file change)
gulp.task('default', ['styles', 'babel'], function() {
    gulp.watch('public/sass/**/*.scss',['styles']);
    gulp.watch('jsDev/*.js',['babel']);
});
