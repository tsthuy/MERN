import express from 'express';
import { Request, Response, NextFunction } from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import authRouter from './routes/auth.route'
import { Logger } from 'typescript-logger';
dotenv.config();
const app =  express();

app.use(cors({
    credentials: true,
}))
app.use(compression());
app.use(cookieParser());
app.use(bodyParser());
app.use(express.json())
const server = http.createServer(app);

server.listen(9000, () => {
    console.log("server is running at port: 9000");
})

// const MONGO_URL = 'mongodb+srv://tsthuy:tsthuy@cluster0.rznuwxi.mongodb.net/?retryWrites=true&w=majority'

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_URL).then(()=> {
        console.log("Connect to mongo success!!!");
        
}).catch((err) =>{
    console.log(err);
    
})

app.get('/' , (req, res) =>{
    res.send('hello huy cute')
})
app.use('/api/auth', authRouter)

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
//   console.error(err); // Use the Error object

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});