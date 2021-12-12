import { Request, Response } from "express";
import UserService from '../services/UserService';

export default class UserController {
	static createDocument = (req: Request, res: Response) => {
        
    };

	static getDocument = (req: Request, res: Response) => {
		const { id, docId } = req.params;

		res.status(200).json(`Mock document ${docId} of user ${id}`);
	};

	static getUser = async (req: Request, res: Response) => {
		const { id } = req.params;

		const user = await UserService.getUser(id)

		res.status(200).json(user);
	};
}
