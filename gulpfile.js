'use strict'

var gulp = require('gulp')
var rename = require('gulp-rename')
var browserify = require('gulp-browserify')

gulp.task('scripts', function() {
	gulp.src('src/index.js')
		.pipe(browserify({
			insertGlobals : true,
			debug : true
		}))
		.pipe(rename('script.js'))
		.pipe(gulp.dest('build/'))
})

gulp.task('html', function () {
	gulp.src('src/index.html')
		.pipe(gulp.dest('build/'))
})

gulp.task('json', function () {
	gulp.src('src/model/data.json')
		.pipe(gulp.dest('build/'))
})

gulp.task('css', function () {
	gulp.src('src/*.css')
		.pipe(gulp.dest('build/'))
})

gulp.task('default', ['scripts', 'html', 'json', 'css'], function() {
	gulp.watch(['src/**/*.js'], ['scripts'])
	gulp.watch(['src/*.html'], ['html'])
	gulp.watch(['src/**/*.json'], ['json'])
	gulp.watch(['src/*.css'], ['css'])
})