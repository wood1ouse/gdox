import { UserModel } from '../models/user'

export default class UserService {
    static getUser = (id: string) => {
        return UserModel.findById(id)
    }
    static getDocument = () => {

    }

    
}