import { Request, Response } from "express";

export default class UserController {
	static createDocument = (req: Request, res: Response) => {
        
    };

	static getDocument = (req: Request, res: Response) => {
		const { id, docId } = req.params;

		res.status(200).json(`Mock document ${docId} of user ${id}`);
	};

	static getDocuments = (req: Request, res: Response) => {
		const { id } = req.params;

		res.status(200).json(`Mock from documents list of user ${id}`);
	};
}
