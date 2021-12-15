import { doctypeModel } from "../models/doctype";
import { UserModel } from "../models/user";

export default class DocsService {
	static getDoctypes = async () => {
		return await doctypeModel.find({});
	};

	static createDocument = async (document: any) => {
        const { userId } = document
        delete document.userId
        

		UserModel.updateOne(
			{ "_id": userId },
			{
				"$push": {
					"documents": document,
				},
			},
		).catch(error => console.log(error));
	};
}
