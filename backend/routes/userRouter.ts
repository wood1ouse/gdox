import { Router } from 'express';
import UserController from '../controllers/UserController';

const userRouter = Router()

userRouter.get('/:id/document/:docId', UserController.getDocument)

userRouter.get('/:id', UserController.getUser)

export default userRouter