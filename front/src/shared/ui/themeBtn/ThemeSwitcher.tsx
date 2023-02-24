import { THEME, useTheme } from 'shared/lib/providers'

import styles from './main.module.scss'
import { useMemo } from 'react'

export const ThemeSwitcher = () => {
	const { theme, toggleTheme } = useTheme()

	const inputValue = useMemo(() => theme === THEME.dark, [ theme ])

	return (
		<div className={styles.checkboxWrapper}>
			<label className={styles.switch}>
				<input type="checkbox" checked={inputValue} onChange={toggleTheme}/>
				<span className={styles.slider}></span>
			</label>
		</div>
	)
}
