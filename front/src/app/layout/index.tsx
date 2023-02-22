import { Outlet } from 'react-router-dom'
import { useTheme } from 'shared/lib/providers'

export const Layout = () => {

		const { theme, toggleTheme } = useTheme()
		return (
				<>
						<header className="header">
								{ theme }
								<button onClick={ toggleTheme }>click</button>
						</header>
						<main className="main">
								<Outlet/>
						</main>
						<footer className="footer">
								footer
						</footer>
				</>
		)
}
