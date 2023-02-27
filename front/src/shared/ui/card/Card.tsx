import type { CSSProperties, FC, PropsWithChildren } from 'react'

import styles from './card.module.scss'
import { THEME, useTheme } from 'shared/lib/providers'

interface CardProps {
	styles?: CSSProperties
}

export const Card: FC<PropsWithChildren<CardProps>> = ({ children }) => {
	const { theme } = useTheme()

	return (
		<div className={`
				${styles.card} 
				${theme === THEME.dark && styles.dark}`}
		     style={styles}>
			{children}
		</div>
	)
}
