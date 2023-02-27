import styles from './button.module.scss'
import { type FC } from 'react'
import { THEME, useTheme } from 'shared/lib/providers'

interface ButtonProps {
	label: string
	handleClick?: (() => void) | undefined
	type?: 'long' | 'short'
}

export const Button: FC<ButtonProps> = ({ label, handleClick, type }) => {
	const { theme } = useTheme()

	return (
		<button className={`
						${styles.button}
						${type && styles.long}
				        ${theme === THEME.dark && styles.dark}`}
		        onClick={handleClick}
		        role="button">
			{label}
		</button>
	)
}
