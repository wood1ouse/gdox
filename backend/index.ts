import express, {Request, Response} from 'express'

import rootRouter from './routes/rootRouter'
import userRouter from './routes/userRouter'


const app = express()
const PORT = 3000

app.use('/', rootRouter)
app.use('/user', userRouter)

app.listen(PORT, () => {
    console.log(`server is on on ${PORT} port`);
})