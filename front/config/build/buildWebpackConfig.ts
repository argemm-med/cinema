import { Configuration } from 'webpack'

import { BuildOptions } from '../types/config'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'

export const buildWebpackConfig = ({ mode, paths, isDev }: BuildOptions): Configuration => {
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
						rules: buildLoaders(),
				},
				resolve: buildResolvers(),
		}
}
