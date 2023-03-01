import { Outlet } from 'react-router-dom'
import { useTheme } from 'shared/lib/providers'
import { Header } from 'widgets'

export const Layout = () => {
	const { theme } = useTheme()
	return (
		<div className={`app ${theme}`}>
			<Header/>
			<main className="main">
				<Outlet/>
			</main>
			<footer className="footer">
				footer
			</footer>
		</div>
	)
}
