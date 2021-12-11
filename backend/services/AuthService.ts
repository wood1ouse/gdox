import { UserModel } from "../public/schemas";
import { IUser } from "../public/types";

export default class AuthService {
	static login = () => {};

	static register = async (user: IUser): Promise<IUser> => {
		if (!user) {
			throw new Error("No user data provided");
		}
		const createdUser = await UserModel.create(user);

		return createdUser;
	};
}
