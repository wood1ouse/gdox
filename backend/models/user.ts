import { Schema, Model, model } from 'mongoose'

import Hasher from '../public/Hasher';

import { IUser } from '../public/types'

const userSchema: Schema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    documents: {type: [String]}
})

userSchema.pre('save', async function (next) {
    const currentUser = this as IUser;
    const hasher = new Hasher()

    if (!currentUser.isModified('password')) {
        return next();
    }
    try {
        currentUser.password = await hasher.hash(currentUser.password)
    } catch (e: any) {
        return next(e);
    }
});

export const UserModel: Model<IUser> = model('User', userSchema, 'users')