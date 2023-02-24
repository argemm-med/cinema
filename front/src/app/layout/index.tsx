import { Outlet } from 'react-router-dom'
import { Header } from 'widgets/ui'
import { useTheme } from 'shared/lib/providers'

export const Layout = () => {
		const { theme } = useTheme()

		return (
				<>
						<div className={ `app ${ theme }` }>
								<Header/>
								<main className="main">
										<Outlet/>
								</main>
								<footer className="footer">
										footer
								</footer>
						</div>
				</>
		)
}
