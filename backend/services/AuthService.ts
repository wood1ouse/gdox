import { UserModel } from "../models/user";

import Hasher from "../public/Hasher";

import { IUser } from "../public/types";

export default class AuthService {
	static login = async (user: IUser): Promise<IUser | undefined> => {
		const hasher = new Hasher();

		const dbUser = await UserModel.findOne({ email: user.email }).orFail(
			new Error("Access Denied (Client Error)"),
		);

		if (await hasher.compare(user.password, dbUser!.password)) {
			return dbUser;
		} else throw new Error("Access Denied (Client Error)")
	};

	static register = async (user: IUser): Promise<IUser | undefined> => {
		const createdUser = await UserModel.create(user);

		return createdUser;
	};
}
