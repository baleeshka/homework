import { babel } from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'
import image from '@rollup/plugin-image'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
	input: 'index.js',
	output: {
		file: 'dist/bundle.js',
		format: 'cjs',
	},
	watch: {
		exclude: 'node_modules/**',
	},
	plugins: [
		babel({
			babelHelpers: 'bundled',
			presets: ['@babel/env'],
		}),
		postcss({
			plugins: [],
		}),
		image(),
		serve({ open: true }),
		livereload(),
	],
}
