import { RouterProvider } from 'react-router-dom'
import { Suspense } from 'react'

import { router } from './router'
import { Loader } from 'widgets/ui'
import { ThemeProvider } from 'shared/lib/providers'

import './style/main.scss'

export const App = () => {
	return (
		<>
			<Suspense fallback={<Loader/>}>
				<ThemeProvider>
					<RouterProvider router={router}/>
				</ThemeProvider>
			</Suspense>
		</>
	)
}
