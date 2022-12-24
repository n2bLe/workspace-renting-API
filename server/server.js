import express from 'express';
import mongoose from 'mongoose';
import usersRoutes from './routes/users.js'
import workspacesRoutes from './routes/workspaces.js';


dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());


app.use('/api/users',usersRoutes)
app.use('/api/workspaces',workspacesRoutes);


const connect = async ()=> {
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("Connected To Mongodb");
    }catch(err){
        throw err;
    }
}


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







