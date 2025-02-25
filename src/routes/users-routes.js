// users-routes.js

import express from 'express'
import { getUserById, getUsers } from '../controllers/users-controller.js'

const userRouter = express.Router()

userRouter.get('/users', getUsers)
userRouter.get('/users/:id', getUserById)

export default userRouter
