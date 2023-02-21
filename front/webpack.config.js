const path = require('path')

const entryFileDir = path.resolve(__dirname, 'src', 'index.js')
const buildDir = path.resolve(__dirname, 'dist')

module.exports = {
    mode: 'development',
    entry: entryFileDir,
    output: {
        path: buildDir,
        filename: 'foo.bundle.js',
    },
}
