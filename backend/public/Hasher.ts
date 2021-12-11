import bcrypt from "bcrypt";

import { SALTROUNDS } from "./config";

export default class Hasher {
	constructor(private saltRounds: number = SALTROUNDS) {}

	hash = async (plainPassword: string): Promise<string> => {
        const salt = await bcrypt.genSalt(this.saltRounds)
        
		return new Promise((resolve, reject) => {
			bcrypt.hash(plainPassword, salt, (err, hash) => {
				if (err) {
					reject(err);
				}
				resolve(hash);
			});
		});
	};

    compare = (plainPassword: string, hash: string): Promise<boolean> => {
        return new Promise((resolve, reject) => {
            bcrypt.compare(plainPassword, hash, (err, result) => {
                if (err) {
                    reject(err)
                }
                resolve(result)
            })
        })
    }
}

