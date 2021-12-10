import {Request, Response} from 'express'

export default class AuthController {
    static login = (req: Request, res: Response) => {
        res.status(200).json("Mock from login")
    }
    static register = (req: Request, res: Response) => {
        res.status(200).json("Mock from register")
    }
}