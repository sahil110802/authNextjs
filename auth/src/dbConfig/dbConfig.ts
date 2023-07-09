import mongoose from "mongoose";
export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection=mongoose.connection;
        connection.on("connected",()=>{
            console.log("database connected");
        })
        connection.on("error",(err)=>{
            console.log("error: ",err);
            process.exit();
        })
    } catch (error) {
        console.log("something went wrong...");
        console.log(error);
    }
}