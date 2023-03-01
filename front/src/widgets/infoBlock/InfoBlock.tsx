import type { FC } from 'react'

import { THEME, useTheme } from 'shared/lib/providers'
import SuccessIcon from './success.svg'
import ErrorIcon from './error.svg'
import styles from './infoBlock.module.scss'

interface InfoStore {
	isActive: boolean
	title: string
	description?: string
	type: 'error' | 'success'
}

interface InfoBlockProps {
	type: 'error' | 'success'
	isActive: boolean
	title: string
	description?: string
}

export const InfoBlock: FC<InfoBlockProps> = ({ type, title, description, isActive }) => {
	const { theme } = useTheme()
	const iconType = type === 'success' ? <SuccessIcon/> : <ErrorIcon/>

	return (
		<div className={`
				${styles.wrapper}
				${isActive && styles.active}
				${theme === THEME.dark && styles.dark}`}>
			<div className={`${styles.icon} ${styles[type]}`}>
				{iconType}
			</div>
			<div className={styles.content}>
				<div className={styles.title}>{title}</div>
				<div className={styles.description}>{description}</div>
			</div>
		</div>
	)
}
