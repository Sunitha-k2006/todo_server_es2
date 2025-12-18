//const monogoose =require('mongoose') commonjs 



import mongoose from "mongoose"//module
import dotenv from "dotenv"

dotenv.config();
const connectDb =() =>{
    try{
        //"mongodb://127.0.0.1:27017/sece_ToDoList"
        mongoose.connect(process.env.MONGODB_URL);
        console.log("db has been connected");
    }catch(err){
        console.error(err);
    }

}
export default connectDb;