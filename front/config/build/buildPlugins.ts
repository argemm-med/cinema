import HtmlWebpackPlugin from 'html-webpack-plugin'
import { ProgressPlugin } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import type { Configuration } from 'webpack'
import type { BuildPaths } from '../types/config'

export const buildPlugins = (paths: BuildPaths): Configuration['plugins'] => {
	const htmlPlugin = new HtmlWebpackPlugin({
		template: paths.html
	})

	const cssPlugin = new MiniCssExtractPlugin({
		filename: 'css/[name].[contenthash:8].css',
		chunkFilename: 'css/[name].[contenthash:8].css'
	})

	// const refreshPlugin = [
	// 		new ReactRefreshPlugin(),
	// new webpack.HotModuleReplacementPlugin(),
	// ]

	return [
		htmlPlugin,
		new ProgressPlugin(),
		cssPlugin
		// ...refreshPlugin,
	]
}
