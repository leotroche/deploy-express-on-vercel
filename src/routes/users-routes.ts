// users-routes.ts

import express from 'express'
import { getUserById, getUsers } from '../controllers/users-controller'

const userRouter = express.Router()

userRouter.get('/users', getUsers)
userRouter.get('/users/:id', getUserById)

export default userRouter
