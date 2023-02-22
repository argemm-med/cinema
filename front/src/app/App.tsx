import { RouterProvider } from 'react-router-dom'
import { Suspense } from 'react'
import { router } from './router'
import { Loader } from 'widgets/ui'

export const App = () => {
		return (
				<>
						<Suspense fallback={ <Loader/> }>
								<RouterProvider router={ router }/>
						</Suspense>
				</>
		)
}
