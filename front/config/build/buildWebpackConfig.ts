import { Configuration } from 'webpack'

import { BuildOptions } from '../types/config'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildDevServer } from './buildDevServer'

export const buildWebpackConfig = ({ mode, paths, isDev, port }: BuildOptions): Configuration => {
		return {
				mode: mode,
				entry: paths.entry,
				output: {
						path: paths.build,
						filename: '[name][contenthash].js',
						clean: true,
				},
				plugins: buildPlugins(paths),
				module: {
						rules: buildLoaders(isDev),
				},
				resolve: buildResolvers(paths),
				devtool: isDev ? 'inline-source-map' : undefined,
				devServer: isDev ? buildDevServer(port) : undefined,
		}
}
