import cors from 'cors'
import express from 'express'
import { CORS_ORIGIN } from './config/env.js'
import userRouter from './routes/users-routes.js'

const app = express()

// Middlewares
app.use(
	cors({
		origin: CORS_ORIGIN,
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
	}),
)
app.use(express.json())

// Routes
app.use('/api', userRouter)

// API status
app.get('/api/status', (_req, res) => {
	res.status(200).json({ message: 'Server is running' })
})

export default app
