import useSWR from 'swr'
import type { Users } from '../types/response.'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

function UsersPage() {
	const { data, error, isLoading } = useSWR<Users>('/api/users', fetcher)

	if (isLoading) return <div>Loading...</div>

	if (error) return <div>Error: {error}</div>

	return (
		<main className="main">
			<h1 className="title">Users</h1>
			<section className="grid-container">
				{data?.map((user) => (
					<article key={user.id} className="grid-item">
						<h2>{user.name}</h2>
						<p>{user.email}</p>
						<p>{user.phone}</p>
						<p>{user.website}</p>
					</article>
				))}
			</section>
		</main>
	)
}

export default UsersPage
