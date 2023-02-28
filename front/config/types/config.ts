export interface BuildPaths {
	entry: string
	build: string
	html: string
	src: string
}

type BuildMode = 'development' | 'production'

export interface BuildEnv {
	mode: BuildMode
	port: number
}

export interface BuildOptions extends BuildEnv {
	paths: BuildPaths
	isDev: boolean
}
