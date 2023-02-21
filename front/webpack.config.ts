import webpack from 'webpack'
import { resolve } from 'path'

import { buildWebpackConfig } from './config/build/buildWebpackConfig'

const mode = 'development'
const isDev = mode === 'development'

const config: webpack.Configuration = buildWebpackConfig({
		mode: mode,
		isDev,
		paths: {
				entry: resolve(__dirname, 'src', 'index.ts'),
				html: resolve(__dirname, 'public', 'index.html'),
				build: resolve(__dirname, 'dist'),
		},
})

export default config
