import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../layout'
import { ROUTES } from 'shared'

export const router = createBrowserRouter([
		{
				path: ROUTES.home,
				element: <Layout/>,
				children: [
						{
								index: true,
								// element: <Loader/>,
						},
				],
		},
])
