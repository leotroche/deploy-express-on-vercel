import { Suspense, lazy } from 'react'
import { Route, Switch } from 'wouter'

const UsersPage = lazy(() => import('./routes/UsersPage'))

export default function AppRoutes() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Switch>
				<Route path="/" component={UsersPage} />
				<Route>404: No such page!</Route>
			</Switch>
		</Suspense>
	)
}
