const { src, dest, series, watch } = require('gulp')
const del = require('del')
const njk = require('gulp-nunjucks-render')
const sass = require('gulp-sass')(require('sass'))

function clean() {
    return del(['dist'])
}

function html() {
    return src('src/html/pages/**/*.+(html|njk)')
        .pipe(
            njk({
                path: ['src/html'],
            })
        )
        .pipe(dest('./dist'))
}

function media() {
    return src('src/media/*')
        .pipe(dest('./dist/media'))
}

function css() {
    return src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./dist/css'));
}

function fonts() {
    return src('./node_modules/bootstrap-icons/font/fonts/*')
        .pipe(dest('./dist/css/fonts'))
}

function watchFiles() {
    watch('src/html/**/*', html)
    watch('src/scss/**/*', css)
    watch('src/media/**/*', media)
}

exports.build = series(clean, html, css, media, fonts)
exports.default = series(clean, html, css, media, fonts, watchFiles)
