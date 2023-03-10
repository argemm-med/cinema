import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type { ModuleOptions } from 'webpack'
import type { BuildOptions } from '../types/config'

export const buildLoaders = (isDev: BuildOptions['isDev']): ModuleOptions['rules'] => {
	const svgLoader = {
		test: /.svg$/,
		use: [ '@svgr/webpack' ]
	}

	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [ { loader: 'file-loader' } ]
	}

	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: /\.module\.scss/i,
						localIdentName: isDev ? '[local]--[hash:base64:5]' : '[hash:base64:8]'
					}
				}
			},
			'sass-loader'
		]
	}

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/
	}

	return [
		fileLoader, svgLoader,
		typescriptLoader,
		cssLoader
	]
}
