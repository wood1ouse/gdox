import { Request, Response } from "express";
import AuthService from "../services/AuthService";

export default class AuthController {
	static login = (req: Request, res: Response) => {
		res.status(200).json("Mock from login");
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
