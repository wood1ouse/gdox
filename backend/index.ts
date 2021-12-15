import express from "express";
import { connect } from 'mongoose';

import rootRouter from "./routes/rootRouter";
import userRouter from "./routes/userRouter";

import cors from 'cors'

import fileUpload from 'express-fileupload'

const app = express();
const PORT = 4200;

app.use(express.json());
app.use(express.static('static'))
app.use(cors())

app.use(fileUpload({}))

app.use("/", rootRouter);
app.use("/user", userRouter);

function startServer() {
	try {
		app.listen(PORT, async () => {
			await connect('mongodb://localhost:27017/gdox')

		});
	} catch (e) {
        console.log(e);
        
    }
}

startServer()