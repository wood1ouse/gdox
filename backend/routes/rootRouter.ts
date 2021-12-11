import { Router, Request, Response } from 'express';
import AuthController from '../controllers/AuthController';
import DocsController from '../controllers/DocsController';

const rootRouter = Router()

rootRouter.get('/', (_: Request, res: Response) => {
    res.status(200).json("Mock from root")
})

rootRouter.post('/login', AuthController.login)

rootRouter.post('/register', AuthController.register)

rootRouter.get('/documentlist', DocsController.getDoctypes)

export default rootRouter