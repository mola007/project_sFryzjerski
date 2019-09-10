const gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

// gulp.task('styles', function(){
//  return gulp.src('./app/assets/styles/styles.css')
//   .pipe(gulp.dest('./app/temp/styles'))
// })

gulp.task('watch', 
function(){
    
browserSync.init({
notify: false,
server: {
baseDir: "app"
}
});
//zapoczątkuj html   
watch('./app/index.html', function(){
  browserSync.reload();
});

//zapoczątkuj css  
 watch('./app/assets/styles/**/*.css', 
  gulp.series('styles', 'cssInject')
 );
	

});

gulp.task('cssInject', function(){
  return gulp.src("./app/temp/styles/styles.css")
  .pipe(browserSync.stream());
 }); 

  
 gulp.task('watch');