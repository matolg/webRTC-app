var gulp = require('gulp');
var del = require('del');
var $ = require('gulp-load-plugins')();

gulp.task('styles', function() {
	return gulp.src('app/css/**/*.css')
			.pipe($.concat('style.css'))
			.pipe(gulp.dest('app/public/css'))
			.pipe($.rename({ suffix: '.min' }))
			.pipe($.minifycss())			
			.pipe(gulp.dest('app/public/css'))
			.pipe($.size({ title: 'styles' }))
			.pipe($.notify({ message: 'Styles task complete' }));
});

gulp.task('js', function() {
	return gulp.src('app/*.js')
			.pipe($.concat('bundle.js'))
			.pipe(gulp.dest('app/public/js'))
			.pipe($.rename({ suffix: '.min' }))
			.pipe($.uglify())	
			.pipe(gulp.dest('app/public/js'))
			.pipe($.size({ title: 'js' }))
			.pipe($.notify({ message: 'JS task complete' }));
});

gulp.task('images', function() {
	return gulp.src('app/images/**/*')
			.pipe($.cache($.imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
			.pipe(gulp.dest('app/public/images'))
			.pipe($.size({ title: 'images' }))
			.pipe($.notify({ message: 'Images task complete' }));
});

gulp.task('clean', function(cb) {
    del(['app/public/js', 'app/public/css', 'app/public/images'], cb)
});

gulp.task('default', ['clean'], function() {
	gulp.start('js', 'styles', 'images');
})

gulp.task('watch', function() {
	gulp.watch('app/css/*.css', ['styles']);
	gulp.watch('app/**/*.js', ['js']);
	gulp.watch('app/images/**/*', ['images']);
});