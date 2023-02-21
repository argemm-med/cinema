import webpack from 'webpack'
import { resolve } from 'path'

import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { BuildEnv } from './config/types/config'

const config = ({ mode: modeEnv, port: portENV }: BuildEnv): webpack.Configuration => {
		const mode = modeEnv || 'development'
		const isDev = mode === 'development'
		const port = portENV || 5000

		return buildWebpackConfig({
				mode,
				isDev,
				port,
				paths: {
						entry: resolve(__dirname, 'src', 'index.ts'),
						html: resolve(__dirname, 'public', 'index.html'),
						build: resolve(__dirname, 'dist'),
				},
		})

}

export default config
