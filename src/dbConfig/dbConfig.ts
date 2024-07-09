import { error } from "console";
import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log("Mongo DB connected");
        })

        connection.on("error", ()=> {
            console.log("Mongodb connection error, please make sure DB is up and running" + error);
            process.exit();
        })

    } catch (error) {
        console.log("Something went wrong in connecting to DB");
        console.log(error);
    }
}