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
						src: resolve(__dirname, 'src'),
						entry: resolve(__dirname, 'src', 'index.tsx'),
						html: resolve(__dirname, 'public', 'index.html'),
						build: resolve(__dirname, 'dist'),
				},
		})

}

export default config
