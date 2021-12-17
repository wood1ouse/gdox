import { Document, Types } from 'mongoose';

export interface IUser extends Document {
    firstName: string,
    lastName: string
    email: string
    password: string
    documents: Types.Array<any>
}

export interface IDoctype extends Document {
    type: string
    fields: Types.Array<String>
}