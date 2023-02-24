import { Outlet } from 'react-router-dom'
import { Header } from 'widgets/ui'
import { useTheme } from 'shared/lib/providers'

import SvgIcon from 'app/assets/cld-cloud-computer-network-svgrepo-com.svg'

export const Layout = () => {
	const { theme } = useTheme()
	return (
		<div className={`app ${theme}`}>
			<Header/>
			<SvgIcon width={20} height={'auto'}/>
			<main className="main">
				<Outlet/>
			</main>
			<footer className="footer">
				footer
			</footer>
		</div>
	)
}
