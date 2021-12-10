import { Router, Request, Response } from 'express';

const userRouter = Router()

userRouter.get('/:id/document/:docId', (req: Request, res: Response) => {
    const {id, docId} = req.params
    
    res.status(200).json(`Mock document ${docId} of user ${id}`)
})

userRouter.get('/:id/documents', (req: Request, res: Response) => {
    const {id} = req.params

    res.status(200).json(`Mock from documents list of user ${id}`)
})

export default userRouter