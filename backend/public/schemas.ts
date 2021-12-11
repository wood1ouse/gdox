import { Schema, Model, model } from 'mongoose'

import { IUser } from './types'

const userSchema: Schema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    documents: {type: [String]}
})

export const UserModel: Model<IUser> = model('User', userSchema)