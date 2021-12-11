import { Request, Response } from "express";
import DocsService from '../services/DocsService';

export default class DocsController {
    static getDoctypes = async (_: Request, res: Response) => {
        try {
            const doctypes = await DocsService.getDoctypes()
            
            res.status(200).json(doctypes)
        } catch (e) {
            res.status(500).json(e)
        }
	}
}