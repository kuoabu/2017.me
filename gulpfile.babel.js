import gulp from 'gulp'
import livereload from 'gulp-livereload'
import nodemon from 'gulp-nodemon'
import chalk from 'chalk'
import runSequence from 'run-sequence'

/**
 * run and watch the changes to restart server
 */
gulp.task('server', () => {
	nodemon({
		script: 'index.js',
		ext: 	'src/*.js',
		ignore: 'node_modules/*',
		env: {
			'NODE_ENV': 'development' 
		}
	})
	.on('start', () => {
		livereload.reload()
	})
})


/**
 * watch the static files to reload pages in browser
 */
gulp.task('watch', () => {
	livereload.listen();

	gulp.watch(['*/*.html'], (e) => {
		livereload.changed(e.path);
	})
})


/**
 * dev mode
 */
gulp.task('dev', ['server', 'watch']);
