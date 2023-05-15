import mongoose from "mongoose";

const connection = {}

async function dbConnect() {

    if (connection.isConnected){
        return
    }

   const db = await mongoose.connect('mongodb+srv://rootadmin:adminix123@cluster0.6vs28ld.mongodb.net/coba?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


connection.isConnected = db.connections[0].readyState


}

module.exports = dbConnect


