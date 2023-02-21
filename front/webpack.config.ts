import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

const entryFileDir = path.resolve(__dirname, 'src', 'index.ts')
const buildDir = path.resolve(__dirname, 'dist')

const config: webpack.Configuration = {
		mode: 'development',
		entry: entryFileDir,
		output: {
				path: buildDir,
				filename: '[name][contenthash].js',
				clean: true,
		},
		plugins: [
				new HtmlWebpackPlugin({
						template: path.resolve(__dirname, 'public', 'index.html'),
				}),
				new webpack.ProgressPlugin(),
		],
		module: {
				rules: [
						{
								test: /\.tsx?$/,
								use: 'ts-loader',
								exclude: /node_modules/,
						},
				],
		},
		resolve: {
				extensions: [ '.tsx', '.ts', '.js' ],
		},
}

export default config
