import cors from 'cors'
import express from 'express'
import { CORS_ORIGIN } from './config/env.js'
import userRouter from './routes/users-routes.js'

const app = express()

// 🚀 CORS Middleware
const allowedOrigins = ['http://localhost:5173']

if (CORS_ORIGIN) {
	allowedOrigins.push(CORS_ORIGIN)
}

app.use(
	cors({
		origin: allowedOrigins,
		methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
		allowedHeaders: ['Content-Type', 'Authorization'],
		exposedHeaders: ['Authorization'],
		credentials: true,
	}),
)

// 🚀 JSON Middleware
app.use(express.json())

// Routes
app.use('/api', userRouter)

// API status
app.get('/api/status', (_req, res) => {
	res.status(200).json({ message: 'Server is running' })
})

export default app
