import type { ChangeEvent, FC } from 'react'

import styles from './input.module.scss'

import RequiredIcon from './required.svg'
import { THEME, useTheme } from 'shared/lib/providers'

interface InputProps {
	label: string
	value: string
	onChange: (value: string) => void
	error?: boolean
}

export const Input: FC<InputProps> = (props) => {
	const { theme } = useTheme()
	const { label, onChange, error, value } = props

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		onChange(e.target.value)
	}

	return (
		<label className={styles.wrapper}>
			<input className={`
					${styles.input}
				    ${theme === THEME.dark && styles.dark}
				    ${error && styles.errorInput}`}
			       value={value}
			       onChange={(e) => {
				       handleChange(e)
			       }}
			       type="text"
			       placeholder="&nbsp;"/>
			<span className={`
					${styles.label}
					${theme === THEME.dark && styles.dark}`}>
				{label}
			</span>
			<div className={styles.error}>
				<RequiredIcon/>
			</div>
		</label>
	)
}
