import { Router, Request, Response } from 'express';
import AuthController from '../controllers/AuthController';

const rootRouter = Router()

rootRouter.get('/', (_: Request, res: Response) => {
    res.status(200).json("Mock from root")
})

rootRouter.get('/login', AuthController.login)

rootRouter.get('/register', AuthController.register)

export default rootRouter