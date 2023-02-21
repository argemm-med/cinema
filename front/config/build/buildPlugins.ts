import { Configuration, ProgressPlugin } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import { BuildPaths } from '../types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildPlugins = (paths: BuildPaths): Configuration['plugins'] => {
		const htmlPlugin = new HtmlWebpackPlugin({
				template: paths.html,
		})

		const cssPlugin = new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash:8].css',
				chunkFilename: 'css/[name].[contenthash:8].css',
		})

		return [
				htmlPlugin,
				new ProgressPlugin(),
				cssPlugin,
		]
}
