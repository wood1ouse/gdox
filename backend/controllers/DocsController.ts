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

    static getDocument = async (req: Request, res: Response) => {
        try {
            const document = await DocsService.getDocument(req.body)

            res.status(200).json(document)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    static createDocument = async (req: Request, res: Response) => {

        const photoName = FileService.saveFile(req.files?.photo)

        const docId = await DocsService.createDocument({...req.body, photoName})

        res.status(200).json(docId)
    }

    static deleteDocument = async (req: Request, res: Response) => {
        
    }
}