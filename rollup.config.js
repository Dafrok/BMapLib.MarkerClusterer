import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import path from 'path'

export default {
  input: path.resolve(__dirname, './src/index.js'),
  output: [
    {
      file: path.resolve(__dirname, './index.js'),
      name: 'BMapLib.MarkerClusterer',
      format: 'umd',
      globals: {
        'bmaplib.texticonoverlay': 'BMapLib.TextIconOverlay'
      }
    },
    {
      file: path.resolve(__dirname, './index.common.js'),
      format: 'cjs'
    },
    {
      file: path.resolve(__dirname, './index.esm.js'),
      format: 'esm'
    }
  ],
  plugins: [
    babel({
      exclude: '**',
      presets: ['es2015-rollup']
    }),
    nodeResolve({
      jsnext: true,
      main: true,
      extensions: ['.js', '.json']
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    replace({
      'process.env.NODE_ENV': "'production'"
    })
  ],
  external: ['bmaplib.texticonoverlay']
}