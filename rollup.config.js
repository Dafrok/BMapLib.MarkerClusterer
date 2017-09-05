import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import path from 'path'

export default {
    entry: path.resolve(__dirname, './src/index.js'),
    dest: path.resolve(__dirname, './index.js'),
    format: 'umd',
    moduleName: 'BMapLib.MarkerClusterer',
    plugins: [
        babel({
          exclude: '**',
          presets: ['es2015-rollup']
        }),
        nodeResolve({
            jsnext: true,
            main: true,
            extensions: [ '.js', '.json' ]
        }),
        commonjs({
            include: 'node_modules/**'
        }),
        replace({
            'process.env.NODE_ENV': "'production'"
        })
    ]
}