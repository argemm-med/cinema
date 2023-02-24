import { ThemeSwitcher } from 'shared/ui'
import { THEME, useTheme } from 'shared/lib/providers'

import styles from './header.module.scss'

export const Header = () => {
		const { theme } = useTheme()

		return (
				<header className={ `${ styles.header } ${ theme === THEME.dark && styles.dark }` }>
						<ul className="nav">
								<li className="nav__item">{ theme }</li>
						</ul>
						<ThemeSwitcher/>
				</header>
		)
}
