import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import bodyParser from 'body-parser'
import cors from 'cors';
import usersRoutes from './routes/users.js'
import workspacesRoutes from './routes/workspaces.js';
import authRoutes from './routes/auth.js';


dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())


app.use('/api/auth',authRoutes)
app.use('/api/users',usersRoutes)
app.use('/api/ws',workspacesRoutes);


const connect = async ()=> {
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("Connected To Mongodb");
    }catch(err){
        throw err;
    }
}

mongoose.set("strictQuery", false);
mongoose.connection.on('disconnected',()=>{
    console.log("Mongodb Disconnected");
})

mongoose.connection.on("connected",()=>{
    console.log("Mongodb Connected")
})

app.listen(PORT,()=>{
    connect();
    console.log(`Server is running on port ${PORT}`)
})







