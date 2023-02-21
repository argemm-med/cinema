import { Configuration, ProgressPlugin } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import { BuildPaths } from '../types/config'

export const buildPlugins = (paths: BuildPaths): Configuration['plugins'] => {
		const htmlPlugin = new HtmlWebpackPlugin({
				template: paths.html,
		})

		return [
				htmlPlugin,
				new ProgressPlugin(),
		]
}
