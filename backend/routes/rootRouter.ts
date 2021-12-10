import { Router, Request, Response } from 'express';

const rootRouter = Router()

rootRouter.get('/', (req: Request, res: Response) => {
    res.status(200).json("Mock from root")
})

rootRouter.get('/login', (req: Request, res: Response) => {
    res.status(200).json("Mock from login")
})

rootRouter.get('/register', (req: Request, res: Response) => {
    res.status(200).json("Mock from register")
})

export default rootRouter