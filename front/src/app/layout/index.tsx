import { Outlet } from 'react-router-dom'

export const Layout = () => {

		return (
				<>
						<header className="header">
								header
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
