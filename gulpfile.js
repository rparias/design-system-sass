import gulp from 'gulp'
import gulpSass from 'gulp-sass'
import nodeSass from 'sass'
import purgecss from 'gulp-purgecss'

const { src, dest, watch, series } = gulp
const sass = gulpSass(nodeSass)

const buildStyles = () => {
  return src('sass/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({ content: ['*.html'] }))
        .pipe(dest('css'))
}

const watchTask = () => {
  watch(['sass/**/*.scss', '*.html'], buildStyles)
}

export default series(buildStyles, watchTask)