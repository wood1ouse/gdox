import express from "express";
import { connect } from 'mongoose';

import rootRouter from "./routes/rootRouter";
import userRouter from "./routes/userRouter";

import cors from 'cors'

import fileUpload from 'express-fileupload'

const app = express();
const PORT = 4200;

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '/');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	res.header("Access-Control-Allow-Origin", "/");

    next();
});

app.use(express.json());
app.use(express.static('static'))
app.use(cors())

app.use(fileUpload({}))

app.use("/", rootRouter);
app.use("/user", userRouter);




function startServer() {
	try {
		app.listen(PORT, async () => {
			await connect('mongodb+srv://admin:admin@cluster0.pefra.mongodb.net/gdox?retryWrites=true&w=majority')

		});
	} catch (e) {
        console.log(e);
        
    }
}

startServer()