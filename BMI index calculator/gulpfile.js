var gulp = require('gulp');
var watch = require('gulp-watch');  //npm install gulp-watch --save-dev
var postcss = require('gulp-postcss');  //npm install gulp-postcss --save-dev
var autoprefixer = require('autoprefixer'); //npm install autoprefixer --save-dev
var cssvars = require('postcss-simple-vars'); //npm install postcss-simple-vars --save-dev
var nested = require('postcss-nested')

// gulp.task('default', function(){
//   console.log("wooohooo");
// });
//
// gulp.task('html', function(){
//   console.log('made some changes in the html file')
// });

// simple example for pipe
// gulp.task('style', function(){
//   return gulp.src('bmi_styles.css').pipe(gulp.dest('./temp'));
// });

//multiple pipes
gulp.task('style', function(){
  return gulp.src('bmi_styles.css')
    .pipe(postcss([cssvars, autoprefixer]))
    .pipe(gulp.dest('./temp'));
});

// gulp.task('watch', function(){
//   watch('bmi.html', function(){
//     gulp.start('html');
//   });
// });

gulp.task('watch', function(){

  watch('bmi.html', function(){
    gulp.start('html');
  });
  watch('bmi_styles.css', function(){
    gulp.start('style');
  });
});
