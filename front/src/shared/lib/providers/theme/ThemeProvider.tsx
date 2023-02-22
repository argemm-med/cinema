import {
		LOCAL_STORAGE_THEME_KEY,
		THEME,
		ThemeContext,
		ThemeContextProps,
} from 'shared/lib/providers/theme/ThemeContext'
import { FC, PropsWithChildren, useMemo, useState } from 'react'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME || THEME.dark

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
		const [ theme, setTheme ] = useState<THEME>(defaultTheme)

		const toggleTheme = () => {
				const newTheme = theme === THEME.dark ? THEME.light : THEME.dark
				setTheme(newTheme)
				localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
		}

		const contextValue = useMemo<ThemeContextProps>(() => ({
				theme, toggleTheme,
		}), [ theme ])


		return (
				<ThemeContext.Provider value={ contextValue }>
						{ children }
				</ThemeContext.Provider>
		)
}
