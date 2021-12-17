import mongoose from "mongoose";
import { doctypeModel } from "../models/doctype";
import { UserModel } from "../models/user";

export default class DocsService {
	static getDoctypes = async () => {
		return await doctypeModel.find({});
	};

	static createDocument = async (document: any) => {
		const documentId = new mongoose.Types.ObjectId();
		const { userId } = document;
		delete document.userId;

		await UserModel.updateOne(
			{ _id: userId },
			{
				$push: {
					documents: {
						documentId,
						...document,
					},
				},
			},
		).catch((error) => console.log(error));

		return documentId;
	};

	static getDocument = async (userDoc: any) => {
		const docsOfUser = (await UserModel.findOne({ _id: userDoc._id }))
			?.documents;

		for (let document of docsOfUser || []) {
			if (document.documentId.equals(userDoc.documentId)) {
				return document;
			}
		}
	};

	static deleteDocument = async (userDoc: any) => {


		await UserModel.findByIdAndUpdate(
			userDoc._id,
			{
				$pull: {
					documents: { documentId: new mongoose.Types.ObjectId(userDoc.documentId) },
				},
			}
		).catch(err => console.log(err))
	};
}
