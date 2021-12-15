import * as uuid from "uuid";
import * as path from "path";

export default class FileService {
	static saveFile(file: any) {
		try {
			const filename = uuid.v4() + ".jpg";
			const filePath = path.resolve("static", filename);
			file.mv(filePath);

			return filename;
		} catch (error) {
            console.log(error);
            
        }
	}
}
