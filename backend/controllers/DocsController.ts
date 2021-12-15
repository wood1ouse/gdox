import { Request, Response } from "express";
import DocsService from '../services/DocsService';
import FileService from '../services/FileService';

export default class DocsController {
    static getDoctypes = async (_: Request, res: Response) => {
        try {
            const doctypes = await DocsService.getDoctypes()
            
            res.status(200).json(doctypes)
        } catch (e) {
            res.status(500).json(e)
        }
	}

    static createDocument = async (req: Request, res: Response) => {

        const photoName = FileService.saveFile(req.files?.photo)


        await DocsService.createDocument({...req.body, photoName})

    }
}