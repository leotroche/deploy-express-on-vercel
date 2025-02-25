// users-controller.js

const API_URL = 'https://jsonplaceholder.typicode.com'

// Controller to get all users
export const getUsers = async (req, res) => {
	try {
		const response = await fetch(`${API_URL}/users`)
		const users = await response.json()
		res.status(200).json(users)
	} catch (error) {
		res.status(500).json({ message: 'Internal Server Error' })
	}
}

// Controller to get a user by ID
export const getUserById = async (req, res) => {
	const userId = req.params.id

	try {
		const response = await fetch(`${API_URL}/users/${userId}`)
		const user = await response.json()
		return res.status(200).json(user)
	} catch (error) {
		return res.status(500).json({ message: 'Internal Server Error' })
	}
}
