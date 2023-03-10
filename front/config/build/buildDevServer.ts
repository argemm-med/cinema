import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import type { BuildOptions } from '../types/config'

export const buildDevServer = (port: BuildOptions['port']): DevServerConfiguration => {
	return {
		port,
		open: true,
		historyApiFallback: true,
		hot: true
	}
}
