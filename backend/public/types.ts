import { Document, Types } from 'mongoose';

// TODO: interface of Document (use it with documents: Types.DocumentArray<Document>)
export interface IUser extends Document {
    firstName: string,
    lastName: string
    email: string
    password: string
    documents: Types.Array<string>
}

export interface IDoctype extends Document {
    type: string
    fields: Types.Array<String>
}