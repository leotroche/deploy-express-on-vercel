// users-controller.ts

import type { Request, Response } from 'express'

const API_URL = 'https://jsonplaceholder.typicode.com'

// Controller to get all users
export const getUsers = async (_req: Request, res: Response) => {
	try {
		const response = await fetch(`${API_URL}/users`)
		const users = await response.json()
		res.status(200).json(users)
	} catch (error) {
		res.status(500).json({ message: 'Internal Server Error' })
	}
}

// Controller to get a user by ID
export const getUserById = async (req: Request, res: Response) => {
	const userId = req.params.id

	try {
		const response = await fetch(`${API_URL}/users/${userId}`)
		const user = await response.json()
		res.status(200).json(user)
	} catch (error) {
		res.status(500).json({ message: 'Internal Server Error' })
	}
}
