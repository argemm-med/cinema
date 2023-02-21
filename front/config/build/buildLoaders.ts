import { ModuleOptions } from 'webpack'

export const buildLoaders = (): ModuleOptions['rules'] => {
		const cssLoader = {
				test: /\.s[ac]ss$/i,
				use: [
						// Creates `style` nodes from js strings
						'style-loader',
						// Translates CSS into CommonJS
						'css-loader',
						// Compiles Sass to CSS
						'sass-loader',
				],
		}

		const typescriptLoader = {
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
		}

		return [
				typescriptLoader,
				cssLoader,
		]
}
