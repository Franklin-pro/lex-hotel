import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import router from './routes/index';



const app = express();
dotenv.config();
app.use(bodyParser.json())
app.use("/api/v1",router)
const port = process.env.PORT
const database = process.env.DATABASE

//config port

app.listen(port,()=>{
    console.log(`port running on 5030`)
})

//connect database

mongoose.connect(database).then(()=>{
    console.log(`database successfully wow`)
})

export default app
