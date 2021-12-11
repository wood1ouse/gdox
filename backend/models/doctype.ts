import { Schema, Model, model } from "mongoose";
import { IDoctype } from "../public/types";

const doctypeSchema: Schema = new Schema({
	type: { type: String },
	fields: [String],
});

export const doctypeModel: Model<IDoctype> = model(
	"Doctype",
	doctypeSchema,
	"doctypes",
);
