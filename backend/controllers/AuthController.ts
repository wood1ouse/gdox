import { Request, Response } from "express";

import AuthService from "../services/AuthService";

export default class AuthController {
	static login = async (req: Request, res: Response) => {
        try {
            const user = await AuthService.login(req.body)
            
            res.status(200).json(user)
        } catch (accessError) {            
            res.status(401).json({message: `${accessError}`})
        }
	};
	static register = async (req: Request, res: Response) => {
		try {
			const createdUser = await AuthService.register(req.body);
			res.status(200).json(createdUser);
		} catch (error) {
            res.status(500).json(error)
        }
	};
    
}
