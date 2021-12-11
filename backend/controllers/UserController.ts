import { Request, Response } from 'express';
import {connect} from 'mongoose'

export default class UserController {
    static getDocument = (req: Request, res: Response) => {
        const {id, docId} = req.params
        
        res.status(200).json(`Mock document ${docId} of user ${id}`)
    }

    static getDocuments = (req: Request, res: Response) => {
        const {id} = req.params
    
        res.status(200).json(`Mock from documents list of user ${id}`)
    }
}