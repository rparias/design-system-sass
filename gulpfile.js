import gulp from 'gulp'
import gulpSass from 'gulp-sass'
import nodeSass from 'sass'

const { src, dest, watch, series } = gulp
const sass = gulpSass(nodeSass)

const buildStyles = () => {
  return src('shinobi/**/*.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

const watchTask = () => {
  watch(['shinobi/**/*.scss'], buildStyles)
}

export default series(buildStyles, watchTask)