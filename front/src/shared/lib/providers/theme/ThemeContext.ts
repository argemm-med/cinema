import { createContext } from 'react'

export enum THEME {
		light = 'light',
		dark = 'dark'
}

export const LOCAL_STORAGE_THEME_KEY = 'current-theme'

export interface ThemeContextProps {
		theme?: THEME
		toggleTheme?: () => void
}

export const ThemeContext = createContext<ThemeContextProps>({})
