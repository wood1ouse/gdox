import { Schema, Model, model } from 'mongoose'

const documentSchema: Schema = new Schema({
    type: {type: String, required: true},
})