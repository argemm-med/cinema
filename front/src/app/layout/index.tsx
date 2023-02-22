import { Outlet } from 'react-router-dom'
import { Header } from 'widgets/ui'

export const Layout = () => {
		return (
				<>
						<Header/>
						<main className="main">
								<Outlet/>
						</main>
						<footer className="footer">
								footer
						</footer>
				</>
		)
}
