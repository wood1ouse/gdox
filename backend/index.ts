import express from "express";
import { connect } from 'mongoose';

import rootRouter from "./routes/rootRouter";
import userRouter from "./routes/userRouter";

import cors from 'cors'

const app = express();
const PORT = 4200;

app.use(express.json());
app.use(cors())

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