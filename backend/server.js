import "express-async-errors";
import dotEnv from "dotenv";
dotEnv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";

import cardRouter from "./Routes/cardRoutes.js";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));

//single endpoint to check if server is running...
app.get('/ping', (req,res)=>{
    res.status(200).json({msg:'Server is up and running!'});
})
//router
app.use('/', cardRouter);
//error route
app.use('*', (req,res)=>{
    res.status(404).json({msg:'Route not found on this Server!'});
})
//handle async errors within controller
app.use(errorHandlerMiddleware);

const port = 3000;
try {
    await mongoose.connect(process.env.MONGODB_URI);
    app.listen(port, ()=>{
        console.log(`server running at port: ${port}`);
    })
} catch (error) {
    console.log(error);
}