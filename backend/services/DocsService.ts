import { doctypeModel } from '../models/doctype'

export default class DocsService {
    static getDoctypes = async () => {
        return await doctypeModel.find({})
    }
}