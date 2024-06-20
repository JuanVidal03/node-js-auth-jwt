import mongoose from "mongoose";

export const mongoDBConnection = async () => {
    try {

        const mongoURI = process.env.MONGOURI;
        await mongoose.connect(mongoURI);
        console.log("<<< MONGODB CONNECTED >>>");
        
    } catch (error) {
        console.log(`Error al conectar la DB: ${error}`);
        console.log(error);
    }
}