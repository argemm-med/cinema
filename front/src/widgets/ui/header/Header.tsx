import { ThemeSwitcher } from 'shared/ui'
import { useTheme } from 'shared/lib/providers'

export const Header = () => {
		const { theme, toggleTheme } = useTheme()

		return (
				<header className="header">
						<ul className="nav">
								<li className="nav__item">{ theme }</li>
						</ul>
						<ThemeSwitcher/>
				</header>
		)
}
