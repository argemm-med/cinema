import { Configuration } from 'webpack'
import { BuildPaths } from '../types/config'

export const buildResolvers = (paths: BuildPaths): Configuration['resolve'] => {
		return {
				extensions: [ '.tsx', '.ts', '.js' ],
				preferAbsolute: true,
				modules: [ paths.src, 'node_modules' ],
				mainFiles: [ 'index' ],
				alias: {},
		}
}
