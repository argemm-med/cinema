import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../layout'
import { lazy } from 'react'
import { ROUTES } from 'shared/config'

const Home = lazy(async () =>
	await import('../../pages').then(({ Home }) => ({ default: Home })))
const NotFound = lazy(async () =>
	await import('../../pages').then(({ NotFound }) => ({ default: NotFound })))

export const router = createBrowserRouter([
	{
		path: ROUTES.home,
		element: <Layout/>,
		children: [
			{
				index: true,
				element: <Home/>
			}
		]
	},
	{
		path: ROUTES.notFound,
		element: <NotFound/>
	}
])
