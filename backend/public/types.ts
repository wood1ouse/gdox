import { Document, Types } from 'mongoose';

// TODO: interface of Document (use it with documents: Types.DocumentArray<Document>)
export interface IUser extends Document {
    email: string
    password: string
    documents: Types.Array<string>
}

export interface IDoctype extends Document {
    type: string
    fields: Array<String>
}